'use strict';
// Diagnòstic: quants usuaris han estat actius recentment (només logs, no modifica res).
// - lastRefreshTime (Auth): última sessió activa de l'app (refresc del token d'identitat)
// - progress.lastDay (Firestore): últim dia amb un exercici completat
//
// ⚠️ El repo és PÚBLIC i el log de les Actions també: qualsevol el pot llegir.
// Per això només escriu recomptes, cap fila per persona. Per saber qui és qui, la
// consola de Firebase (Authentication) ensenya el correu i la darrera connexió.
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();

async function run() {
  const users = [];
  let pageToken;
  do {
    const res = await admin.auth().listUsers(1000, pageToken);
    users.push(...res.users);
    pageToken = res.pageToken;
  } while (pageToken);

  const docs = await db.collection('users').get();
  const fsData = {};
  docs.forEach(d => { fsData[d.id] = d.data(); });

  // Només recomptes: una fila per usuari era el perfil d'activitat d'una persona real,
  // i amb pocs usuaris qui sap el seu XP s'hi reconeix. Per al detall, la consola de Firebase.
  const ara = Date.now();
  const dins = (d, dies) => !!d && ara - new Date(d).getTime() < dies * 86400000;
  const finestres = [['24 h', 1], ['7 dies', 7], ['30 dies', 30]];

  console.log('Finestra | Amb sessió (refresh) | Amb exercici (lastDay)');
  console.log('---');
  for (const [finestra, dies] of finestres) {
    const sessio = users.filter(u => dins(u.metadata.lastRefreshTime, dies)).length;
    const exercici = users.filter(u => dins(fsData[u.uid]?.progress?.lastDay, dies)).length;
    console.log(`${finestra} | ${sessio} | ${exercici}`);
  }
  const notifs = users.filter(u => fsData[u.uid]?.notificacionsActives === true).length;
  console.log(`\nTotal: ${users.length} usuaris, ${notifs} amb les notificacions actives.`);

  // Actius per setmana (de dilluns a diumenge, com la lliga) a partir de
  // progress.practiceHistory, que desa els últims 30 dies practicats amb toDateString().
  // La llista té sostre: a qui l'ha omplerta se li han esborrat els dies més antics, i
  // les setmanes d'abans del seu primer dia desat el deixen fora. Per això s'avisa.
  const SETMANES = 10;
  const dilluns = d => {
    const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    x.setDate(x.getDate() - (x.getDay() + 6) % 7);
    return x;
  };
  const clau = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  // Per a cada setmana d'alta (cohort), d'on venen els comptes nous i si tornen:
  // - «ja practicaven»: dies practicats d'abans del dia d'alta. El primer inici de sessió
  //   puja l'historial local, o sigui que són usuaris d'abans que s'han registrat. Si van
  //   practicar el mateix dia d'alta abans de registrar-se, no es pot distingir.
  // - «han practicat després»: algun dia practicat en una setmana posterior a la d'alta.
  // - «han reobert»: l'última sessió (refresh) és d'una setmana posterior, hagin
  //   practicat o no. De les obertures no hi ha historial: només l'última.
  const aquesta = dilluns(new Date(ara));
  const setmanes = [];
  for (let i = SETMANES - 1; i >= 0; i--) {
    const d = new Date(aquesta);
    d.setDate(d.getDate() - 7 * i);
    setmanes.push(clau(d));
  }
  const kAquesta = clau(aquesta);
  const nom = k => `${k}${k === kAquesta ? ' (en curs)' : ''}`;

  // Diagnòstic: qui només ha practicat un dia, quants exercicis va fer (pocs = va plegar
  // a mitja primera sessió; molts = la va acabar i no va tornar), i quants tornen segons
  // el nivell que més han practicat. progress.mastery té una entrada per exercici fet, i
  // el prefix de l'id és el nivell. Només comptes creats dins de les setmanes de la taula;
  // per nivell, a més, d'abans de la setmana en curs, perquè hagin tingut temps de tornar.
  const TRAMS = [[1, 2], [3, 5], [6, 9], [10, 19], [20, Infinity]];
  const unDiaPerTram = TRAMS.map(() => 0), perNivell = {};

  const actius = {}, actiusDeLaSetmana = {}, cohorts = {};
  let plenaDes = null, senseHistorial = 0;
  for (const u of users) {
    const hist = (fsData[u.uid]?.progress?.practiceHistory || [])
      .map(s => new Date(s)).filter(d => !isNaN(d));
    if (!hist.length && fsData[u.uid]?.progress?.lastDay) senseHistorial++;
    const alta = new Date(u.metadata.creationTime);
    const kAlta = clau(dilluns(alta));
    for (const k of new Set(hist.map(d => clau(dilluns(d))))) {
      actius[k] = (actius[k] || 0) + 1;
      if (k === kAlta) actiusDeLaSetmana[k] = (actiusDeLaSetmana[k] || 0) + 1;
    }
    if (hist.length >= 30) {
      const primer = new Date(Math.min(...hist));
      if (!plenaDes || primer > plenaDes) plenaDes = primer;
    }
    const c = cohorts[kAlta] ||= { nous: 0, abans: 0, cap: 0, unDia: 0, mesDies: 0, despres: 0, reobert: 0 };
    const diaAlta = new Date(alta.getFullYear(), alta.getMonth(), alta.getDate());
    const dies = new Set(hist.map(clau)).size;
    const ref = u.metadata.lastRefreshTime ? new Date(u.metadata.lastRefreshTime) : null;
    c.nous++;
    if (hist.some(d => d < diaAlta)) c.abans++;
    if (dies === 0) c.cap++; else if (dies === 1) c.unDia++; else c.mesDies++;
    if (hist.some(d => clau(dilluns(d)) > kAlta)) c.despres++;
    if (ref && clau(dilluns(ref)) > kAlta) c.reobert++;

    const fets = Object.keys(fsData[u.uid]?.progress?.mastery || {});
    if (kAlta >= setmanes[0] && dies === 1) {
      const i = TRAMS.findIndex(([a, b]) => fets.length >= a && fets.length <= b);
      if (i >= 0) unDiaPerTram[i]++;
    }
    if (fets.length && kAlta >= setmanes[0] && kAlta < kAquesta) {
      const perNv = {};
      for (const id of fets) { const nv = id.split('-')[0]; perNv[nv] = (perNv[nv] || 0) + 1; }
      const nivell = Object.entries(perNv).sort((a, b) => b[1] - a[1])[0][0];
      const n = perNivell[nivell] ||= { comptes: 0, tornen: 0 };
      n.comptes++;
      if (hist.some(d => clau(dilluns(d)) > kAlta)) n.tornen++;
    }
  }

  console.log('\nSetmana (dilluns) | Comptes que hi han practicat | D\'ells, creats aquella setmana | Comptes nous');
  console.log('---');
  for (const k of setmanes) {
    console.log(`${nom(k)} | ${actius[k] || 0} | ${actiusDeLaSetmana[k] || 0} | ${cohorts[k]?.nous || 0}`);
  }
  if (plenaDes) {
    console.log(`\nLes setmanes d'abans del ${clau(dilluns(plenaDes))} poden sortir per sota: hi ha comptes amb la llista de 30 dies plena.`);
  }

  console.log('\nSetmana d\'alta | Nous | Ja practicaven abans | Cap exercici | 1 dia | 2 dies o més | Han practicat una setmana posterior | Han reobert l\'app una setmana posterior');
  console.log('---');
  for (const k of setmanes) {
    const c = cohorts[k] || { nous: 0, abans: 0, cap: 0, unDia: 0, mesDies: 0, despres: 0, reobert: 0 };
    const posterior = v => (k === kAquesta ? '—' : v);
    console.log(`${nom(k)} | ${c.nous} | ${c.abans} | ${c.cap} | ${c.unDia} | ${c.mesDies} | ${posterior(c.despres)} | ${posterior(c.reobert)}`);
  }
  if (senseHistorial) {
    console.log(`\n⚠️ ${senseHistorial} comptes tenen lastDay però cap practiceHistory: surten com a «cap exercici».`);
  }

  console.log(`\nQui només ha practicat 1 dia (comptes creats des del ${setmanes[0]}): exercicis fets`);
  console.log('Exercicis | Comptes');
  console.log('---');
  TRAMS.forEach(([a, b], i) => console.log(`${b === Infinity ? `${a} o més` : `${a}–${b}`} | ${unDiaPerTram[i]}`));

  console.log(`\nPer nivell, el més practicat de cada compte (creats del ${setmanes[0]} a la setmana passada)`);
  console.log('Nivell | Comptes amb algun exercici | Han practicat una setmana posterior');
  console.log('---');
  for (const nv of Object.keys(perNivell).sort()) {
    console.log(`${nv} | ${perNivell[nv].comptes} | ${perNivell[nv].tornen}`);
  }
}

// Log públic: només el codi de l'error, mai el missatge (hi pot sortir la ruta users/<uid>).
run().catch(e => { console.error(`❌ run: ${e.code || e.name}`); process.exit(1); });
