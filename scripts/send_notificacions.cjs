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

// ── Cadència de recordatoris segons la freqüència que tria l'usuari a Perfil ──
// Cada opció («cada dia / cada 2 / cada 3») té la seva corba d'espaiat creixent,
// en dies sense practicar. Quan s'arriba a l'últim valor, s'atura fins que torni
// a practicar. La corba es reinicia cada cop que l'usuari practica.
const SCHEDULES = {
  1: [1, 2, 3, 5, 7, 10, 15],   // cada dia: insistent al principi, després espaia
  2: [2, 4, 6, 9, 13, 18],      // cada 2 dies: to mitjà
  3: [3, 6, 10, 15, 21],        // cada 3 dies: suau
};

function getNextLevel(xp) {
  const idx = LEVELS.findIndex(l => xp >= l.min && xp <= l.max);
  return (idx >= 0 && idx < LEVELS.length - 1) ? LEVELS[idx + 1] : null;
}

function getCurrentHourMadrid() {
  return parseInt(new Intl.DateTimeFormat('ca-ES', {
    timeZone: 'Europe/Madrid',
    hour: 'numeric',
    hour12: false
  }).format(new Date()), 10);
}

function daysSinceLastPractice(lastDay) {
  if (!lastDay) return 999;
  // lastDay és toDateString() → "Sat Jun 20 2026"
  const last = new Date(lastDay);
  const now = new Date();
  return Math.floor((now - last) / (24 * 60 * 60 * 1000));
}

// ── Selecció de variant per a les EXCEPCIONS (benvinguda / ratxa / nivell) ──
// Rota amb el comptador d'enviaments (notifSendCount): com que s'incrementa en
// cada enviament real, dos tocs CONSECUTIUS mai cauen a la mateixa variant,
// encara que un cron es perdi pel mig. El genèric NO usa això: segueix una
// seqüència fixa per posició dins la corba (vegeu GENERIC_SEQUENCE).
function pickBy(arr, n) { return arr[n % arr.length]; }

// ── Variants del PRIMER toc (pas 0 de la corba) ──
// És el missatge més repetit de tots: el despistat que practica arran del toc
// diari reinicia la corba cada dia i torna a caure al pas 0. Sense variants,
// rebria exactament el mateix text cada dia. Roten amb notifSendCount (com les
// excepcions): dos tocs consecutius mai cauen a la mateixa variant.
const STEP0_VARIANTS = [
  { title: "📚 El teu repte d'avui t'espera",
    body: "Tens el teu nou repte diari a punt." },
  { title: "✨ Tens cinc minuts per al català?",
    body: "El repte d'avui és curt: comença'l i llestos." },
  { title: "🎯 El repte diari ja és a punt",
    body: "Un parell d'exercicis i dia guanyat." },
  { title: "☕ Una pausa i una mica de català?",
    body: "Aprofita un moment tranquil: el repte t'espera." },
  { title: "🧩 Avui encara no has practicat",
    body: "Fes el repte diari i mantén el ritme." },
];

// ── Seqüència genèrica: un missatge per cada toc de la corba (crescendo) ──
// El toc a la posició `step` agafa el missatge `step`. Els missatges 5 i 6
// mostren els dies reals sense practicar via {N}. La posició 0 NO s'usa
// (el pas 0 va per STEP0_VARIANTS); es manté per no desalinear els índexs.
const GENERIC_SEQUENCE = [
  { title: "📚 El teu repte d'avui t'espera",
    body: "Tens el teu nou repte diari a punt." },
  { title: "✏️ Avui toca una mica de català!",
    body: "Un exercici i mantens el ritme." },
  { title: "👋 Fa uns dies que no t'hi poses, tornem-hi?",
    body: "Un exercici i tornes a agafar el fil." },
  { title: "🌱 Reprenem el català on el vas deixar?",
    body: "Un petit pas avui ja compta molt." },
  { title: "📖 El teu català t'espera des de fa {N} dies",
    body: "Fes un exercici i deixa que torni l'hàbit." },
  { title: "🤗 Fa {N} dies… quant de temps!",
    body: "Tornar és més fàcil del que sembla. Un sol exercici, sense pressió, per reconnectar amb el català." },
  { title: "💚 El català t'espera, et trobem a faltar!",
    body: "Quan vulguis, aquí seré. Un sol exercici per retrobar-nos." },
];

function buildNotification(progress, daysSince, step, sendCount) {
  const xp = progress?.xp || 0;
  const streak = progress?.streak || 0;

  // ⓪ Encara no ha practicat mai (lastDay buit): to de benvinguda, no d'abandó
  if (!progress?.lastDay) {
    return pickBy([
      { title: "🌱 Comencem amb el català?",
        body: "Fes el teu primer exercici, només et prendrà un minut." },
      { title: "👋 El teu primer repte t'espera",
        body: "Quan vulguis, fes la primera pràctica i arrenca l'hàbit." },
      { title: "📚 Encara no has començat… ho fem avui?",
        body: "" },
    ], sendCount);
  }

  // ① Ratxa en perill (només si fa exactament 1 dia i hi ha ratxa)
  if (streak >= 2 && daysSince === 1) {
    return pickBy([
      { title: `🔥 Portes ${streak} dies seguits!`,
        body: "Practica avui i mantén la teva ratxa viva." },
      { title: `🔥 La teva ratxa de ${streak} dies penja d'un fil`,
        body: "Encara ets a temps de salvar-la avui." },
      { title: `🔥 ${streak} dies sense fallar… continuem?`,
        body: "" },
    ], sendCount);
  }

  // ② A prop de pujar de nivell (finestra de 60 XP; mai per a Mestre)
  const next = getNextLevel(xp);
  if (next && (next.min - xp) <= 60) {
    const gap = next.min - xp;
    return pickBy([
      { title: `⭐ Et falten només ${gap} XP per a ${next.name}`,
        body: "Practica i desbloqueja'l avui mateix." },
      { title: `⭐ ${next.name} el tens aquí mateix`,
        body: `Només ${gap} XP et separen del nou nivell. Aprofita l'impuls i fes-los avui!` },
      { title: `⭐ ${gap} XP i puges de nivell`,
        body: `Ja gairebé hi ets. Una sessió avui i ${next.name} és teu.` },
    ], sendCount);
  }

  // ③ Genèric: el pas 0 rota entre variants (és el toc del dia a dia);
  // la resta segueix la seqüència fixa en crescendo (sense repetir)
  if (step === 0) return pickBy(STEP0_VARIANTS, sendCount);
  const msg = GENERIC_SEQUENCE[Math.min(step, GENERIC_SEQUENCE.length - 1)];
  return {
    title: msg.title.replace('{N}', daysSince),
    body: msg.body.replace('{N}', daysSince),
  };
}

async function run() {
  const currentHour = getCurrentHourMadrid();
  const todayStr = new Date().toDateString();
  console.log(`Hora actual a Madrid: ${currentHour}h`);

  const snapshot = await db.collection('users')
    .where('notificacionsActives', '==', true)
    .get();

  if (snapshot.empty) {
    console.log('Cap usuari amb notificacions actives.');
    return;
  }

  let sent = 0, skipped = 0, errors = 0, reset = 0, paused = 0;
  const invalidTokens = [];

  for (const userDoc of snapshot.docs) {
    const data = userDoc.data();
    const token = data.fcmToken;
    if (!token) { skipped++; continue; }

    // Filtre per hora (per defecte: 19h): enviem A PARTIR de l'hora triada, no
    // només a l'hora exacta — els crons de GitHub arrenquen amb retard (sovint
    // >1 h) o es descarten, i amb igualtat estricta el toc del dia es perdia.
    // La guarda notifLastSent d'aquí sota evita dobles a les hores següents.
    const userHour = data.notifHour ?? 19;
    if (currentHour < userHour) { skipped++; continue; }

    // Seguretat: si ja li hem enviat avui, no repetim (p. ex. Run workflow manual)
    if (data.notifLastSent === todayStr) { skipped++; continue; }

    const freq = data.notifFrequency ?? 1;
    const schedule = SCHEDULES[freq] || SCHEDULES[1];
    const lastDay = data.progress?.lastDay;
    const daysSince = daysSinceLastPractice(lastDay);
    const sendCount = data.notifSendCount ?? 0;

    // Cadència: «dueMilestone» és el dia-objectiu més alt de la corba que ja s'ha
    // assolit; «sentMilestone» és l'últim que li vam enviar. Enviem només si n'hi ha
    // un de nou. Si ha practicat des de l'últim recordatori, la corba es reinicia.
    const lastSent = data.notifLastSent;
    const practicedSince = lastSent && lastDay && new Date(lastDay) >= new Date(lastSent);
    const sentMilestone = practicedSince ? 0 : (data.notifLastMilestone ?? 0);
    const dueMilestone = [...schedule].reverse().find(d => d <= daysSince) ?? 0;
    const step = schedule.indexOf(dueMilestone);
    const willSend = dueMilestone > sentMilestone;

    if (!willSend) {
      // Si ha tornat a practicar, netegem el seguiment de la corba
      if (practicedSince && (data.notifLastMilestone ?? 0) > 0) {
        await userDoc.ref.update({
          notifLastMilestone: admin.firestore.FieldValue.delete(),
          notifLastSent: admin.firestore.FieldValue.delete()
        });
        reset++;
        console.log(`🔄 Cadència reiniciada (ha tornat a practicar): ${userDoc.id}`);
      } else if (daysSince > schedule[schedule.length - 1]) {
        paused++;   // ha superat l'últim recordatori de la corba: en pausa
      }
      skipped++;
      continue;
    }

    const notification = buildNotification(data.progress, daysSince, step, sendCount);

    const webpushNotif = {
      title: notification.title,
      icon: 'https://app.aprencatala.cat/icons/icon-192x192.png',
      badge: 'https://app.aprencatala.cat/icons/icon-192x192.png',
      tag: 'aprencatala-reminder',
    };
    if (notification.body) webpushNotif.body = notification.body;

    // Registrem l'enviament ABANS d'enviar: si l'escriptura fallés DESPRÉS d'enviar,
    // la fita mai s'avançaria i el toc es repetiria cada dia (espam). Marcant primer,
    // una escriptura fallida només fa saltar aquest toc; mai genera duplicats.
    try {
      await userDoc.ref.update({
        notifLastMilestone: dueMilestone,
        notifLastSent: todayStr,
        notifSendCount: sendCount + 1
      });
    } catch (e) {
      errors++;
      console.warn(`❌ No s'ha pogut registrar l'enviament ${userDoc.id}: ${e.code || e.message}`);
      continue;
    }

    try {
      await messaging.send({
        token,
        webpush: {
          notification: webpushNotif,
          fcmOptions: { link: 'https://app.aprencatala.cat/' }
        }
      });
      sent++;
      console.log(`✅ Enviat a ${userDoc.id}: "${notification.title}"`);
    } catch (e) {
      errors++;
      console.warn(`❌ Error enviant ${userDoc.id}: ${e.code}`);
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

  console.log(`\nResultat: ${sent} enviats, ${skipped} omesos (${paused} en pausa, ${reset} cadències reiniciades), ${errors} errors.`);
}

run().catch(e => { console.error(e); process.exit(1); });
