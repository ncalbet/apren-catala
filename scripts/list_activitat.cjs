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
  for (const [nom, dies] of finestres) {
    const sessio = users.filter(u => dins(u.metadata.lastRefreshTime, dies)).length;
    const exercici = users.filter(u => dins(fsData[u.uid]?.progress?.lastDay, dies)).length;
    console.log(`${nom} | ${sessio} | ${exercici}`);
  }
  const notifs = users.filter(u => fsData[u.uid]?.notificacionsActives === true).length;
  console.log(`\nTotal: ${users.length} usuaris, ${notifs} amb les notificacions actives.`);
}

// Log públic: només el codi de l'error, mai el missatge (hi pot sortir la ruta users/<uid>).
run().catch(e => { console.error(`❌ run: ${e.code || e.name}`); process.exit(1); });
