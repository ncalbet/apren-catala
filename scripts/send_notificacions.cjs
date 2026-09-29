'use strict';
// ⚠️ El repo és PÚBLIC i el log de les Actions també: qualsevol el pot llegir.
// Cap línia de log pot dur res que identifiqui un usuari (ni uid, ni correu, ni token).
//
// Firebase només s'engega si s'executa com a script. Així les proves de Catala/
// (tests_notificacions.cjs) poden carregar els textos sense credencials.
let admin, db, messaging;
if (require.main === module) {
  admin = require('firebase-admin');
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  db = admin.firestore();
  messaging = admin.messaging();
}
const { partsMadrid, setmanaDe, sumaDies } = require('./lliga_setmanal.cjs');

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

// Cada notificació surt amb el seu «tipus», que és el que va al log. El títol NO hi
// va mai: pot dur dades de la persona (els dies sense practicar, la ratxa) i el log
// és públic. Vegeu l'avís de la capçalera.
const ambTipus = (tipus, msg) => ({ ...msg, tipus });

// ── El pseudònim ──
// Només en porten els missatges que tenen «titleNom» (i, si cal reformular-lo,
// «bodyNom»): els més personals. Si sortís a tots, al cap d'una setmana ja no es
// veuria. Els de nivell no en porten perquè ja són llargs i Android talla el títol.
// Qui no té pseudònim rep el text de sempre.
const PSEUDO_MAX = 15;   // el mateix límit que index.html i firestore.rules
function nomDe(profile) {
  const p = String(profile?.pseudo || '').trim();
  return (p.length >= 3 && p.length <= PSEUDO_MAX) ? p : '';
}
function ambNom(msg, nom) {
  if (!nom || !msg.titleNom) return { title: msg.title, body: msg.body };
  return { title: msg.titleNom.replace('{NOM}', nom), body: msg.bodyNom ?? msg.body };
}

// ── Variants del PRIMER toc (pas 0 de la corba) ──
// És el missatge més repetit de tots: el despistat que practica arran del toc
// diari reinicia la corba cada dia i torna a caure al pas 0. Sense variants,
// rebria exactament el mateix text cada dia. Roten amb notifSendCount (com les
// excepcions): dos tocs consecutius mai cauen a la mateixa variant.
const STEP0_VARIANTS = [
  { title: "📚 El teu repte d'avui t'espera",
    body: "Tens el teu nou repte diari a punt." },
  { title: "✨ Tens cinc minuts per al català?",
    titleNom: "✨ {NOM}, tens cinc minuts per al català?",
    body: "El repte d'avui és curt: comença'l i llestos." },
  { title: "🎯 El repte diari ja és a punt",
    body: "Un parell d'exercicis i dia guanyat." },
  { title: "☕ Una pausa i una mica de català?",
    titleNom: "☕ {NOM}, una pausa i una mica de català?",
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
    titleNom: "✏️ {NOM}, avui toca una mica de català!",
    body: "Un exercici i mantens el ritme." },
  { title: "👋 Fa uns dies que no t'hi poses, tornem-hi?",
    titleNom: "👋 {NOM}, tornem-hi?",
    bodyNom: "Fa uns dies que no t'hi poses. Un exercici i tornes a agafar el fil.",
    body: "Un exercici i tornes a agafar el fil." },
  { title: "🌱 Reprenem el català on el vas deixar?",
    body: "Un petit pas avui ja compta molt." },
  { title: "📖 El teu català t'espera des de fa {N} dies",
    body: "Fes un exercici i deixa que torni l'hàbit." },
  { title: "🤗 Fa {N} dies… quant de temps!",
    titleNom: "🤗 {NOM}, fa {N} dies… quant de temps!",
    body: "Tornar és més fàcil del que sembla. Un sol exercici, sense pressió, per reconnectar amb el català." },
  { title: "💚 El català t'espera, et trobem a faltar!",
    titleNom: "💚 {NOM}, et trobem a faltar!",
    bodyNom: "El català t'espera. Quan vulguis, un sol exercici per retrobar-nos.",
    body: "Quan vulguis, aquí seré. Un sol exercici per retrobar-nos." },
];

// ── La lliga ──
// Qui és a la lliga i avui li toca recordatori rep la seva posició en lloc del text de
// sempre. Del dimarts al diumenge, la d'aquesta setmana; el dilluns, com va quedar la
// setmana passada, perquè la nova encara és a 0 per a tothom. Sense punts no hi ha
// posició, i surt el recordatori de sempre. L'hora i la freqüència són les del Perfil:
// la lliga no envia res de més, només canvia el text.

// Quina setmana es compta a aquest instant, i si és la passada (el dilluns).
function setmanaDeLaLliga(ms) {
  const setmana = setmanaDe(ms);
  const p = partsMadrid(ms);
  const avui = `${p.y}-${String(p.m).padStart(2, '0')}-${String(p.d).padStart(2, '0')}`;
  return avui === setmana ? { setmana: sumaDies(setmana, -7), passada: true } : { setmana, passada: false };
}

// Posició de cada participant amb punts, pel lid. Mateix criteri que lligaFiles()
// d'index.html: els perfils «fora» no hi surten, i els empats comparteixen posició
// (1, 1, 3…). «amunt» és la posició de just a sobre i «falten», els punts per
// arribar-hi; qui és primer no en té.
function posicionsLliga(perfils, punts) {
  const files = perfils.filter(p => !p.fora)
    .map(p => ({ lid: p.lid, nom: p.pseudonim || '', punts: punts[p.lid] || 0 }))
    .filter(f => f.punts > 0)
    .sort((a, b) => b.punts - a.punts);
  const res = new Map();
  files.forEach((f, i) => {
    const posicio = (i > 0 && f.punts === files[i - 1].punts) ? res.get(files[i - 1].lid).posicio : i + 1;
    const davant = files.filter(g => g.punts > f.punts);
    const proper = davant[davant.length - 1];
    res.set(f.lid, {
      posicio, nom: f.nom,
      empat: files.some(g => g !== f && g.punts === f.punts),
      amunt: proper ? res.get(proper.lid).posicio : null,
      falten: proper ? proper.punts - f.punts : 0,
    });
  });
  return res;
}

// «Posició» és femení i la persona no té gènere: 1a, 2a, 3a… i mai «vas tercer».
// Si també hi ha ratxa en perill, la lliga mana i la ratxa passa al text de sota
// (decisió de l'usuari, 29/09). El dilluns: al primer lloc, felicitació; a la resta,
// la posició i ànims per quedar més amunt.
const ord = n => `${n}a`;
const majuscula = s => s[0].toUpperCase() + s.slice(1);
function missatgeLliga(l, nom, ratxa) {
  const amb = que => nom ? `${nom}, ${que}` : majuscula(que);
  let title, body, tancament;
  if (l.passada && l.posicio === 1) {
    const que = l.empat ? 'Primer lloc compartit a la lliga' : 'Vas guanyar la lliga';
    title = nom ? `🥇 Felicitats, ${nom}! ${que}` : `🥇 Felicitats! ${que}`;
    body = 'Continua així amb el català!';
    tancament = 'La lliga nova ja ha començat.';
  } else if (l.passada) {
    const medalla = ['🥈', '🥉'][l.posicio - 2] || '🏆';
    title = `${medalla} ${amb(l.empat ? `vas compartir la ${ord(l.posicio)} posició a la lliga`
                                      : `vas quedar en ${ord(l.posicio)} posició a la lliga`)}`;
    body = 'Aquesta setmana pots quedar més amunt.';
    tancament = 'La lliga nova ja ha començat!';
  } else {
    title = `🏆 ${amb(l.empat ? `comparteixes la ${ord(l.posicio)} posició a la lliga`
                             : `vas en ${ord(l.posicio)} posició a la lliga`)}${l.posicio === 1 ? '!' : ''}`;
    body = l.posicio > 1 ? `Amb ${l.falten} ${l.falten === 1 ? 'punt' : 'punts'} més arribes a la ${ord(l.amunt)}.`
         : l.empat ? 'Amb un sol punt més passes al davant.'
         : 'Defensa el primer lloc.';
    tancament = "No t'oblidis de practicar!";
  }
  return { title, body: `${body} ${ratxa ? `I no perdis la ratxa de ${ratxa} dies!` : tancament}` };
}

function buildNotification(progress, daysSince, step, sendCount, nom, lliga = null) {
  const xp = progress?.xp || 0;
  const streak = progress?.streak || 0;
  const surt = (tipus, msg) => ambTipus(tipus, ambNom(msg, nom));

  // ⓪ Encara no ha practicat mai (lastDay buit): to de benvinguda, no d'abandó
  if (!progress?.lastDay) {
    return surt('benvinguda', pickBy([
      { title: "🌱 Comencem amb el català?",
        body: "Fes el teu primer exercici, només et prendrà un minut." },
      { title: "👋 El teu primer repte t'espera",
        body: "Quan vulguis, fes la primera pràctica i arrenca l'hàbit." },
      { title: "📚 Encara no has començat… ho fem avui?",
        body: "" },
    ], sendCount));
  }

  // La lliga, per davant de la ratxa i del nivell. El nom és el de la classificació.
  if (lliga) {
    const ratxa = (streak >= 2 && daysSince === 1) ? streak : 0;
    return ambTipus(lliga.passada ? 'lliga, setmana passada' : 'lliga',
      missatgeLliga(lliga, nomDe({ pseudo: lliga.nom }) || nom, ratxa));
  }

  // ① Ratxa en perill (només si fa exactament 1 dia i hi ha ratxa)
  if (streak >= 2 && daysSince === 1) {
    return surt('ratxa', pickBy([
      { title: `🔥 Portes ${streak} dies seguits!`,
        titleNom: `🔥 {NOM}, portes ${streak} dies seguits!`,
        body: "Practica avui i mantén la teva ratxa viva." },
      { title: `🔥 La teva ratxa de ${streak} dies penja d'un fil`,
        body: "Encara ets a temps de salvar-la avui." },
      { title: `🔥 ${streak} dies sense fallar… continuem?`,
        titleNom: `🔥 {NOM}, ${streak} dies sense fallar… continuem?`,
        body: "" },
    ], sendCount));
  }

  // ② A prop de pujar de nivell (finestra de 60 XP; mai per a Mestre)
  const next = getNextLevel(xp);
  if (next && (next.min - xp) <= 60) {
    const gap = next.min - xp;
    return surt('nivell', pickBy([
      { title: `⭐ Et falten només ${gap} XP per a ${next.name}`,
        body: "Practica i desbloqueja'l avui mateix." },
      { title: `⭐ ${next.name} el tens aquí mateix`,
        body: `Només ${gap} XP et separen del nou nivell. Aprofita l'impuls i fes-los avui!` },
      { title: `⭐ ${gap} XP i puges de nivell`,
        body: `Ja gairebé hi ets. Una sessió avui i ${next.name} és teu.` },
    ], sendCount));
  }

  // ③ Genèric: el pas 0 rota entre variants (és el toc del dia a dia);
  // la resta segueix la seqüència fixa en crescendo (sense repetir)
  if (step === 0) return surt('pas 0', pickBy(STEP0_VARIANTS, sendCount));
  const msg = ambNom(GENERIC_SEQUENCE[Math.min(step, GENERIC_SEQUENCE.length - 1)], nom);
  return ambTipus(`pas ${step}`, {
    title: msg.title.replace('{N}', daysSince),
    body: msg.body.replace('{N}', daysSince),
  });
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

  let sent = 0, skipped = 0, errors = 0, reset = 0, paused = 0, delaLliga = 0;

  // La classificació es llegeix una sola vegada, i només si algú de la lliga ha de rebre
  // un recordatori. Si no es pot llegir, el recordatori surt amb el text de sempre.
  const quinaLliga = setmanaDeLaLliga(Date.now());
  let posicions;   // undefined = encara no llegida; null = no s'ha pogut llegir
  async function posicioALaLliga(ll) {
    if (!ll?.dins || !ll.lid) return null;
    if (posicions === undefined) {
      try {
        const [perfils, parts] = await Promise.all([
          db.collection('lligaPerfils').get(),
          db.collection('lliga').doc(quinaLliga.setmana).collection('participants').get(),
        ]);
        posicions = posicionsLliga(
          perfils.docs.map(p => ({ lid: p.id, pseudonim: p.data().pseudonim || '', fora: !!p.data().fora })),
          Object.fromEntries(parts.docs.map(p => [p.id, p.data().punts || 0])));
      } catch (e) {
        posicions = null;
        console.warn(`❌ No s'ha pogut llegir la lliga: ${e.code || e.name}`);
      }
    }
    const p = posicions?.get(ll.lid);
    return p ? { ...p, passada: quinaLliga.passada } : null;
  }

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
        console.log('🔄 Cadència reiniciada (ha tornat a practicar)');
      } else if (daysSince > schedule[schedule.length - 1]) {
        paused++;   // ha superat l'últim recordatori de la corba: en pausa
      }
      skipped++;
      continue;
    }

    const lliga = await posicioALaLliga(data.lliga);
    const notification = buildNotification(data.progress, daysSince, step, sendCount, nomDe(data.profile), lliga);

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
      console.warn(`❌ No s'ha pogut registrar un enviament: ${e.code || e.name}`);
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
      if (lliga) delaLliga++;
      console.log(`✅ Enviat: ${notification.tipus}`);
    } catch (e) {
      errors++;
      console.warn(`❌ Error enviant: ${e.code}`);
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
    console.log('🧹 Token invàlid eliminat');
  }

  console.log(`\nResultat: ${sent} enviats (${delaLliga} de la lliga), ${skipped} omesos (${paused} en pausa, ${reset} cadències reiniciades), ${errors} errors.`);
}

// Del missatge d'un error de Firestore en surt la ruta del document (users/<uid>), i el
// log és públic: només el codi, que és fix. L'error sencer, executant-lo en local.
if (require.main === module) {
  run().catch(e => { console.error(`❌ run: ${e.code || e.name}`); process.exit(1); });
}

module.exports = { buildNotification, nomDe, getNextLevel, SCHEDULES, setmanaDeLaLliga, posicionsLliga };
