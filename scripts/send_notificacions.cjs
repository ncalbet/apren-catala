'use strict';
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();
const messaging = admin.messaging();

const LEVELS = [
  { min: 0,    max: 99,       name: 'Aprenent' },
  { min: 100,  max: 249,      name: 'Estudiant' },
  { min: 250,  max: 499,      name: 'Parlant' },
  { min: 500,  max: 999,      name: 'Avançat' },
  { min: 1000, max: 1999,     name: 'Expert' },
  { min: 2000, max: Infinity, name: 'Mestre del Català' },
];

function getNextLevel(xp) {
  const idx = LEVELS.findIndex(l => xp >= l.min && xp <= l.max);
  return (idx >= 0 && idx < LEVELS.length - 1) ? LEVELS[idx + 1] : null;
}

function practicedToday(lastDay) {
  // L'app desa lastDay amb toDateString() → "Sat Jun 20 2026"
  return lastDay === new Date().toDateString();
}

function buildNotification(progress) {
  if (practicedToday(progress?.lastDay)) return null;

  const xp = progress?.xp || 0;
  const streak = progress?.streak || 0;

  if (streak >= 2) {
    return {
      title: `🔥 ${streak} dies de ratxa!`,
      body: `No deixis escapar el dia ${streak + 1}. Un exercici és suficient per mantenir-la.`
    };
  }

  const next = getNextLevel(xp);
  if (next && (next.min - xp) <= 60) {
    return {
      title: `⭐ Quasi ets ${next.name}!`,
      body: `Només et falten ${next.min - xp} XP. Practica 3 exercicis i puja de nivell!`
    };
  }

  return {
    title: '📚 Practica el català avui',
    body: "El teu repte diari t'espera. Uns minuts al dia fan la diferència!"
  };
}

async function run() {
  const snapshot = await db.collection('users')
    .where('notificacionsActives', '==', true)
    .get();

  if (snapshot.empty) {
    console.log('Cap usuari amb notificacions actives.');
    return;
  }

  let sent = 0, skipped = 0, errors = 0;
  const invalidTokens = [];

  for (const userDoc of snapshot.docs) {
    const data = userDoc.data();
    const token = data.fcmToken;
    if (!token) { skipped++; continue; }

    const notification = buildNotification(data.progress);
    if (!notification) { skipped++; continue; }

    try {
      await messaging.send({
        token,
        webpush: {
          notification: {
            title: notification.title,
            body: notification.body,
            icon: 'https://app.aprencatala.cat/icons/icon-192x192.png',
            badge: 'https://app.aprencatala.cat/icons/icon-192x192.png',
            tag: 'aprencatala-reminder',
          },
          fcmOptions: { link: 'https://app.aprencatala.cat/' }
        }
      });
      sent++;
      console.log(`✅ Enviat a ${userDoc.id}: "${notification.title}"`);
    } catch (e) {
      errors++;
      console.warn(`❌ Error ${userDoc.id}: ${e.code}`);
      if (e.code === 'messaging/registration-token-not-registered') {
        invalidTokens.push(userDoc.id);
      }
    }
  }

  for (const uid of invalidTokens) {
    await db.collection('users').doc(uid).update({
      fcmToken: admin.firestore.FieldValue.delete(),
      notificacionsActives: false
    });
    console.log(`🧹 Token invàlid eliminat: ${uid}`);
  }

  console.log(`\nResultat: ${sent} enviats, ${skipped} omesos, ${errors} errors.`);
}

run().catch(e => { console.error(e); process.exit(1); });
