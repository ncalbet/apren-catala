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
  const actius = {}, nous = {};
  let plenaDes = null;
  for (const u of users) {
    const hist = (fsData[u.uid]?.progress?.practiceHistory || [])
      .map(s => new Date(s)).filter(d => !isNaN(d));
    for (const k of new Set(hist.map(d => clau(dilluns(d))))) actius[k] = (actius[k] || 0) + 1;
    if (hist.length >= 30) {
      const primer = new Date(Math.min(...hist));
      if (!plenaDes || primer > plenaDes) plenaDes = primer;
    }
    const k = clau(dilluns(new Date(u.metadata.creationTime)));
    nous[k] = (nous[k] || 0) + 1;
  }
  console.log('\nSetmana (dilluns) | Comptes que hi han practicat | Comptes nous');
  console.log('---');
  const aquesta = dilluns(new Date(ara));
  for (let i = SETMANES - 1; i >= 0; i--) {
    const d = new Date(aquesta);
    d.setDate(d.getDate() - 7 * i);
    const k = clau(d);
    console.log(`${k}${i === 0 ? ' (en curs)' : ''} | ${actius[k] || 0} | ${nous[k] || 0}`);
  }
  if (plenaDes) {
    console.log(`\nLes setmanes d'abans del ${clau(dilluns(plenaDes))} poden sortir per sota: hi ha comptes amb la llista de 30 dies plena.`);
  }
}

// Log públic: només el codi de l'error, mai el missatge (hi pot sortir la ruta users/<uid>).
run().catch(e => { console.error(`❌ run: ${e.code || e.name}`); process.exit(1); });
