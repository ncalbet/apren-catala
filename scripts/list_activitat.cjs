'use strict';
// Diagnòstic: llista l'activitat recent de tots els usuaris (només logs, no modifica res).
// - lastRefreshTime (Auth): última sessió activa de l'app (refresc del token d'identitat)
// - progress.lastDay (Firestore): últim dia amb un exercici completat
//
// ⚠️ El repo és PÚBLIC i el log de les Actions també: qualsevol el pot llegir.
// Aquí no hi pot sortir res que identifiqui ningú — ni correu ni uid. Cada fila
// porta només un número d'ordre. Per saber qui és qui, la consola de Firebase
// (Authentication) ensenya el correu i la darrera connexió.
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();

function fmt(d) {
  if (!d) return '—';
  return new Intl.DateTimeFormat('ca-ES', {
    timeZone: 'Europe/Madrid', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
  }).format(new Date(d));
}

// lastDay és un toDateString() sense hora → només dia/mes
function fmtDay(d) {
  if (!d) return '—';
  return new Intl.DateTimeFormat('ca-ES', { day: '2-digit', month: '2-digit' }).format(new Date(d));
}

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

  users.sort((a, b) =>
    new Date(b.metadata.lastRefreshTime || 0) - new Date(a.metadata.lastRefreshTime || 0));

  console.log('# | Última sessió (refresh) | Últim exercici (lastDay) | XP | Notifs actives');
  console.log('---');
  users.forEach((u, i) => {
    const fs = fsData[u.uid] || {};
    const lastDay = fmtDay(fs.progress?.lastDay);
    const xp = fs.progress?.xp ?? '—';
    const notifs = fs.notificacionsActives === true ? 'sí' : (fs.notificacionsActives === false ? 'no' : '—');
    console.log(`${i + 1} | ${fmt(u.metadata.lastRefreshTime)} | ${lastDay} | ${xp} | ${notifs}`);
  });
  console.log(`\nTotal: ${users.length} usuaris.`);
}

run().catch(e => { console.error(e); process.exit(1); });
