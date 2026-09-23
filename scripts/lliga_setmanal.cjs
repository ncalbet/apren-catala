'use strict';
// ⚠️ El repo és PÚBLIC i el log de les Actions també: qualsevol el pot llegir.
// Aquí només s'escriuen recomptes. Mai un pseudònim, un lid, un uid ni un correu.
//
// Administració de la lliga setmanal (el que les regles no deixen fer a ningú):
//   node lliga_setmanal.cjs prepara            crea la setmana en curs i les dues següents
//   node lliga_setmanal.cjs tanca              tanca les setmanes acabades: podi i medalles
//   node lliga_setmanal.cjs prova-obre AAAA-MM-DD   obre ARA una setmana de prova (sense medalles)
//   node lliga_setmanal.cjs neteja AAAA-MM-DD       esborra una setmana de prova i els seus punts
// Sense ordre: prepara + tanca. És el que fa el cron; les dues coses són idempotents.
//
// Una setmana és el document /lliga/{dilluns AAAA-MM-DD} amb:
//   inici  dilluns 00:00:00, hora de Madrid
//   fi     diumenge 23:58:00, hora de Madrid (dos minuts de marge, decisió de l'usuari)
// Les regles de Firestore només accepten punts entre inici i fi.

const PRIMERA_SETMANA = '2026-09-28';   // primera setmana oficial de la lliga
const MEDALLES = ['or', 'plata', 'bronze'];

// ── Hora de Madrid, sense dependències ──

// Parts de la data i l'hora a Madrid per a un instant (ms des de 1970).
const FMT_MADRID = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Madrid', hourCycle: 'h23',
  year: 'numeric', month: '2-digit', day: '2-digit',
  hour: '2-digit', minute: '2-digit', second: '2-digit',
});
function partsMadrid(ms) {
  const p = Object.fromEntries(FMT_MADRID.formatToParts(new Date(ms)).map(x => [x.type, x.value]));
  return { y: +p.year, m: +p.month, d: +p.day, h: +p.hour, mi: +p.minute, s: +p.second };
}

// Instant (ms) que correspon a una hora de rellotge de Madrid. Es resol en dues
// passades perquè el desfasament canvia amb l'horari d'estiu.
function utcDeMadrid(y, m, d, h, mi) {
  const rellotge = Date.UTC(y, m - 1, d, h, mi);
  let ms = rellotge;
  for (let i = 0; i < 2; i++) {
    const p = partsMadrid(ms);
    const desfas = Date.UTC(p.y, p.m - 1, p.d, p.h, p.mi) - ms;
    ms = rellotge - desfas;
  }
  return ms;
}

const pad = n => String(n).padStart(2, '0');
const ymd = (y, m, d) => `${y}-${pad(m)}-${pad(d)}`;

// Dilluns (AAAA-MM-DD) de la setmana de Madrid que conté l'instant.
function setmanaDe(ms) {
  const p = partsMadrid(ms);
  const dia = new Date(Date.UTC(p.y, p.m - 1, p.d));
  const dow = (dia.getUTCDay() + 6) % 7;          // dilluns = 0
  dia.setUTCDate(dia.getUTCDate() - dow);
  return ymd(dia.getUTCFullYear(), dia.getUTCMonth() + 1, dia.getUTCDate());
}

// Suma dies a una data AAAA-MM-DD (calendari pur, sense zones).
function sumaDies(s, n) {
  const [y, m, d] = s.split('-').map(Number);
  const t = new Date(Date.UTC(y, m - 1, d + n));
  return ymd(t.getUTCFullYear(), t.getUTCMonth() + 1, t.getUTCDate());
}

// Límits d'una setmana en ms.
function limitsSetmana(dilluns) {
  const [y, m, d] = dilluns.split('-').map(Number);
  const [yg, mg, dg] = sumaDies(dilluns, 6).split('-').map(Number);
  return { inici: utcDeMadrid(y, m, d, 0, 0), fi: utcDeMadrid(yg, mg, dg, 23, 58) };
}

// Podi: per punts, de més a menys; els empats comparteixen posició (1, 1, 3…).
// Només hi entra qui ha fet algun punt. Mateix criteri que podiDe() d'index.html.
function podiDe(files) {
  const ordenats = files.filter(f => f.punts > 0).sort((a, b) => b.punts - a.punts);
  const podi = [];
  ordenats.forEach((f, i) => {
    const posicio = (i > 0 && f.punts === ordenats[i - 1].punts) ? podi[i - 1].posicio : i + 1;
    podi.push({ lid: f.lid, punts: f.punts, posicio });
  });
  return podi.filter(f => f.posicio <= 3);
}

module.exports = { partsMadrid, utcDeMadrid, setmanaDe, sumaDies, limitsSetmana, podiDe, PRIMERA_SETMANA };

// ── Firestore (només si s'executa com a script) ──
if (require.main === module) {
  const admin = require('firebase-admin');
  admin.initializeApp({ credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)) });
  const db = admin.firestore();
  const { Timestamp, FieldValue } = admin.firestore;

  async function prepara() {
    const ara = Date.now();
    let setmana = setmanaDe(ara);
    if (setmana < PRIMERA_SETMANA) setmana = PRIMERA_SETMANA;
    let creades = 0;
    for (let i = 0; i < 3; i++) {
      const s = sumaDies(setmana, 7 * i);
      const ref = db.doc(`lliga/${s}`);
      const snap = await ref.get();
      if (snap.exists) continue;
      const { inici, fi } = limitsSetmana(s);
      await ref.set({ inici: Timestamp.fromMillis(inici), fi: Timestamp.fromMillis(fi), tancada: false });
      creades++;
    }
    console.log(`Prepara: ${creades} setmanes noves.`);
  }

  async function tancaSetmana(ref) {
    return db.runTransaction(async tx => {
      const w = await tx.get(ref);
      if (!w.exists || w.data().tancada) return null;
      if (w.data().fi.toMillis() > Date.now()) return null;
      const parts = await tx.get(ref.collection('participants'));
      const files = parts.docs.map(p => ({ lid: p.id, punts: p.data().punts || 0 }));
      const podi = podiDe(files);
      const prova = !!w.data().prova;
      // Una transacció fa TOTES les lectures abans de cap escriptura.
      const perfils = prova ? [] : await Promise.all(
        podi.map(f => tx.get(db.doc(`lligaPerfils/${f.lid}`))));
      let medalles = 0;
      podi.forEach((f, i) => {
        const ps = perfils[i];
        if (!ps || !ps.exists) return;             // prova, o ha sortit de la lliga
        tx.update(ps.ref, { [`medalles.${MEDALLES[f.posicio - 1]}`]: FieldValue.increment(1) });
        medalles++;
      });
      const ambPunts = files.filter(f => f.punts > 0);
      // Per revisar el sostre: quanta gent s'hi acosta. 7 dies × 150 = 1.050.
      const aprop = ambPunts.filter(f => f.punts >= 0.8 * 1050).length;
      tx.update(ref, {
        tancada: true, podi,
        estadistiques: { participants: files.length, ambPunts: ambPunts.length, aprop80: aprop },
      });
      return { participants: files.length, ambPunts: ambPunts.length, aprop, medalles, prova };
    });
  }

  async function tanca() {
    const obertes = await db.collection('lliga').where('tancada', '==', false).get();
    let tancades = 0;
    for (const w of obertes.docs) {
      const r = await tancaSetmana(w.ref);
      if (!r) continue;
      tancades++;
      console.log(`Tancada ${r.prova ? '(prova) ' : ''}${w.id}: ${r.participants} participants, ` +
        `${r.ambPunts} amb punts, ${r.aprop} a prop del màxim, ${r.medalles} medalles.`);
    }
    console.log(`Tanca: ${tancades} setmanes tancades.`);
  }

  async function provaObre(s) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s || '')) throw new Error('Cal una setmana AAAA-MM-DD');
    const { fi } = limitsSetmana(s);
    await db.doc(`lliga/${s}`).set({
      inici: Timestamp.fromMillis(Date.now() - 60000), fi: Timestamp.fromMillis(fi),
      tancada: false, prova: true,
    });
    console.log(`Setmana de prova ${s} oberta fins al diumenge a les 23:58.`);
  }

  async function neteja(s) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s || '')) throw new Error('Cal una setmana AAAA-MM-DD');
    const ref = db.doc(`lliga/${s}`);
    const w = await ref.get();
    if (w.exists && !w.data().prova) throw new Error(`${s} no és una setmana de prova: no s'esborra.`);
    const parts = await ref.collection('participants').get();
    const batch = db.batch();
    parts.docs.forEach(p => batch.delete(p.ref));
    batch.delete(ref);
    await batch.commit();
    console.log(`Neteja ${s}: ${parts.size} registres de punts esborrats.`);
  }

  const [ordre, arg] = process.argv.slice(2);
  const feina = {
    prepara, tanca,
    'prova-obre': () => provaObre(arg),
    neteja: () => neteja(arg),
    undefined: async () => { await prepara(); await tanca(); },
  }[ordre];
  if (!feina) { console.error(`Ordre desconeguda: ${ordre}`); process.exit(1); }
  feina().catch(e => { console.error(e.message); process.exit(1); });
}
