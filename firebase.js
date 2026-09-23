import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,
         createUserWithEmailAndPassword, signInWithEmailAndPassword,
         deleteUser, reauthenticateWithPopup, reauthenticateWithCredential, EmailAuthProvider,
         sendPasswordResetEmail, fetchSignInMethodsForEmail, linkWithPopup, linkWithCredential }
  from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc, deleteDoc, updateDoc, deleteField, collection, getDocs,
         query, where, runTransaction, getCountFromServer }
  from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js';
import { getMessaging, getToken, onMessage }
  from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-messaging.js';

const firebaseConfig = {
  apiKey: "AIzaSyAUtluPk2OYS80QMisbYkLCMe-k3jIHUgc",
  authDomain: "apren-catala.firebaseapp.com",
  projectId: "apren-catala",
  storageBucket: "apren-catala.firebasestorage.app",
  messagingSenderId: "1017314545702",
  appId: "1:1017314545702:web:39e8e9b9e7f2581a79d6e7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// ── FCM ──
// VAPID_KEY: Firebase Console → Project settings → Cloud Messaging → Web Push certificates
const VAPID_KEY = 'BCsaPMagXIyD9H1z1cId0PgwDld_JUsMpJkrxXPUdX65OUF2dmYJluKU5fLxit4FZaRbi_yi-Voxy-L84BOMPyg';

let messaging = null;
try {
  messaging = getMessaging(app);
  onMessage(messaging, payload => {
    document.dispatchEvent(new CustomEvent('fcm-foreground-message', { detail: payload }));
  });
} catch (e) { console.warn('[FCM] No disponible en aquest navegador:', e.message); }

window.fbRequestNotifications = async () => {
  if (!messaging || !VAPID_KEY) return { ok: false, reason: 'no-vapid' };
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') return { ok: false, reason: 'denied' };
    const swReg = await navigator.serviceWorker.ready;
    const token = await getToken(messaging, { vapidKey: VAPID_KEY, serviceWorkerRegistration: swReg });
    if (!token) return { ok: false, reason: 'no-token' };
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, 'users', user.uid),
        { fcmToken: token, notificacionsActives: true },
        { merge: true }
      );
      localStorage.setItem('notif_last_token', token);
    }
    return { ok: true };
  } catch (e) {
    console.warn('[FCM] Error:', e.code || e.message);
    return { ok: false, reason: e.code || e.message };
  }
};

// Refresc silenciós del token FCM en obrir l'app. Els tokens roten (actualització
// del navegador, neteja de dades...) i un token mort fa que el backend desactivi
// l'usuari en silenci sense que ell ho sàpiga. Si té els recordatoris actius,
// re-obtenim el token i el desem SEMPRE (no només si ha canviat): el backend pot
// haver posat notificacionsActives=false sense que el token del client hagi
// canviat, i llavors l'única via de re-activació és reescriure-ho cada sessió.
let fcmRefreshed = false;
async function refreshFcmToken(user) {
  if (fcmRefreshed || !messaging || !VAPID_KEY) return;
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  if (localStorage.getItem('notif_active') !== 'true') return;
  fcmRefreshed = true;
  try {
    const swReg = await navigator.serviceWorker.ready;
    const token = await getToken(messaging, { vapidKey: VAPID_KEY, serviceWorkerRegistration: swReg });
    if (!token) return;
    await setDoc(doc(db, 'users', user.uid),
      { fcmToken: token, notificacionsActives: true },
      { merge: true }
    );
    if (token !== localStorage.getItem('notif_last_token')) console.info('[FCM] Token actualitzat');
    localStorage.setItem('notif_last_token', token);
  } catch (e) { console.warn('[FCM] Refresc de token fallit:', e.code || e.message); }
}

window.fbDisableNotifications = async () => {
  const user = auth.currentUser;
  if (!user) return;
  try {
    await setDoc(doc(db, 'users', user.uid),
      { notificacionsActives: false },
      { merge: true }
    );
  } catch (e) { console.warn('[FCM] Error desactivant:', e.code); }
};

window.fbSaveNotifPrefs = async (prefs) => {
  const user = auth.currentUser;
  if (!user) return;
  try {
    await setDoc(doc(db, 'users', user.uid), prefs, { merge: true });
  } catch (e) { console.warn('[FCM] Error desant preferències:', e.code); }
};

// ── Auth ──
window.fbSignIn        = () => signInWithPopup(auth, provider);
window.fbSignOut       = () => signOut(auth);
window.fbSignInEmail   = (email, pw) => signInWithEmailAndPassword(auth, email, pw);
window.fbRegisterEmail = (email, pw) => createUserWithEmailAndPassword(auth, email, pw);
window.fbResetPassword = (email) => sendPasswordResetEmail(auth, email);
window.fbGetSignInMethods = (email) => fetchSignInMethodsForEmail(auth, email);
window.fbLinkGoogle    = () => linkWithPopup(auth.currentUser, provider);
window.fbLinkPassword  = (pw) => linkWithCredential(auth.currentUser, EmailAuthProvider.credential(auth.currentUser.email, pw));

// ── Progrés ──
window.fbSaveProgress = async (data) => {
  const user = auth.currentUser;
  if (!user) return;
  try {
    await setDoc(doc(db, 'users', user.uid),
      { progress: data, progressAt: Date.now() },
      { merge: true }
    );
  } catch (e) { console.warn('[FB] Error desant progrés:', e.code); }
};

window.fbLoadProgress = async () => {
  const user = auth.currentUser;
  if (!user) return null;
  try {
    const snap = await getDoc(doc(db, 'users', user.uid));
    return (snap.exists() && snap.data().progress) ? snap.data().progress : null;
  } catch (e) { console.warn('[FB] Error carregant progrés:', e.code); return null; }
};

// ── Esborrar compte (requisit Google Play: eliminació de compte i dades) ──
// Esborra el document de Firestore de l'usuari i, després, el compte d'Auth.
// Si Auth demana login recent: reautentica amb Google (popup) o demana password (email).
window.fbDeleteAccount = async (password) => {
  const user = auth.currentUser;
  if (!user) return { ok: false, reason: 'no-user' };
  const ref = doc(db, 'users', user.uid);
  const providerId = user.providerData[0]?.providerId;

  const wipe = async () => {
    await esborraLliga(user);
    await deleteDoc(ref).catch(() => {}); // potser ja esborrat en un intent previ
    await deleteUser(user);
  };

  try {
    // La lliga primer: per saber què cal esborrar es llegeix el document de
    // l'usuari, i les regles demanen que el lid encara existeixi.
    await esborraLliga(user);
    await deleteDoc(ref);
    await deleteUser(user);
    return { ok: true };
  } catch (e) {
    if (e.code !== 'auth/requires-recent-login') {
      return { ok: false, reason: e.code || e.message };
    }
    // Cal reautenticar abans d'esborrar el compte
    try {
      if (providerId === 'google.com') {
        await reauthenticateWithPopup(user, provider);
        await wipe();
        return { ok: true };
      }
      if (providerId === 'password') {
        if (!password) return { ok: false, reason: 'need-password' };
        const cred = EmailAuthProvider.credential(user.email, password);
        await reauthenticateWithCredential(user, cred);
        await wipe();
        return { ok: true };
      }
      return { ok: false, reason: 'requires-recent-login' };
    } catch (e2) {
      return { ok: false, reason: e2.code || e2.message };
    }
  }
};

// ── Perfil ──
// El perfil (avui: el pseudònim) va al mateix document que el progrés, sota
// «profile». S'esborra amb el compte, perquè fbDeleteAccount esborra el
// document sencer. Qui guanya quan dos dispositius discrepen ho decideix
// index.html amb el segell «at» que hi va dins.
window.fbLoadProfile = async () => {
  const user = auth.currentUser;
  if (!user) return null;
  try {
    const snap = await getDoc(doc(db, 'users', user.uid));
    return (snap.exists() && snap.data().profile) ? snap.data().profile : null;
  } catch (e) { console.warn('[FB] Error carregant perfil:', e.code); return null; }
};

window.fbSaveProfile = async (data) => {
  const user = auth.currentUser;
  if (!user) return;
  try {
    await setDoc(doc(db, 'users', user.uid), { profile: data }, { merge: true });
  } catch (e) { console.warn('[FB] Error desant perfil:', e.code); }
};

// ── Lliga setmanal ──
// Qui fa complir les normes són les regles de Firestore (firestore.rules): el sostre
// de 150 al dia, les dates de la setmana, els pseudònims únics. Aquí només es demana.
// Ningú no hi apareix amb el seu uid: cada participant té un lid aleatori, i la relació
// lid → uid viu a /lligaIds, que no pot llegir cap client.
//
// Al document privat de l'usuari hi ha:
//   lliga: { lid, dins }   dins = si ara participa (sortir no esborra el lid)
//   pseudonimClau          la clau del pseudònim reservat, per poder-lo alliberar

function nouLid() {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from(crypto.getRandomValues(new Uint8Array(20)), b => abc[b % abc.length]).join('');
}

async function llegeixEstatLliga(user) {
  const snap = await getDoc(doc(db, 'users', user.uid));
  const d = snap.exists() ? snap.data() : {};
  return { lid: d.lliga?.lid || null, dins: !!d.lliga?.dins, clau: d.pseudonimClau || null };
}

window.fbLligaEstat = async () => {
  const user = auth.currentUser;
  if (!user) return null;
  try { return await llegeixEstatLliga(user); }
  catch (e) { console.warn('[Lliga] Error llegint l\'estat:', e.code); return null; }
};

// Reserva el pseudònim (la clau la calcula index.html amb clauPseudonim()).
// Si la reserva és d'algú altre, les regles deneguen tant la lectura com la
// creació: això vol dir «ja és d'algú altre». Allibera el pseudònim d'abans.
window.fbReservaPseudonim = async (pseudonim, clau) => {
  const user = auth.currentUser;
  if (!user) return { ok: true, local: true };
  try {
    const estat = await llegeixEstatLliga(user);
    // Sempre es comprova la reserva, fins i tot si la clau desada coincideix: pot
    // haver-se esborrat des de la consola (un pseudònim ofensiu, per exemple).
    const ref = doc(db, 'pseudonims', clau);
    try {
      const snap = await getDoc(ref);
      if (!snap.exists()) await setDoc(ref, { uid: user.uid });
    } catch (e) {
      if (e.code === 'permission-denied') return { ok: false, reason: 'agafat' };
      throw e;
    }
    if (estat.clau !== clau) {
      await setDoc(doc(db, 'users', user.uid), { pseudonimClau: clau }, { merge: true });
    }
    // Si ja és a la lliga, el perfil públic mostra el pseudònim nou.
    if (estat.dins && estat.lid) {
      await setDoc(doc(db, 'lligaPerfils', estat.lid), { pseudonim, clau }, { merge: true });
    }
    if (estat.clau && estat.clau !== clau) {
      await deleteDoc(doc(db, 'pseudonims', estat.clau)).catch(() => {});
    }
    return { ok: true };
  } catch (e) {
    console.warn('[Lliga] Error reservant el pseudònim:', e.code);
    return { ok: false, reason: e.code || e.message };
  }
};

// Entrar a la lliga. «dia» és l'enter AAAAMMDD d'avui a Madrid.
window.fbLligaEntra = async (pseudonim, clau, setmana, dia) => {
  const user = auth.currentUser;
  if (!user) return { ok: false, reason: 'no-user' };
  const r = await window.fbReservaPseudonim(pseudonim, clau);
  if (!r.ok) return r;
  try {
    let { lid } = await llegeixEstatLliga(user);
    if (!lid) {
      lid = nouLid();
      await setDoc(doc(db, 'lligaIds', lid), { uid: user.uid });
    }
    // Si ja havia participat, el perfil hi és (sense nom, amb les medalles): el recupera.
    const perfilRef = doc(db, 'lligaPerfils', lid);
    if ((await getDoc(perfilRef)).exists()) {
      await setDoc(perfilRef, { pseudonim, clau, fora: false }, { merge: true });
    } else {
      await setDoc(perfilRef, { pseudonim, clau, medalles: { or: 0, plata: 0, bronze: 0 }, fora: false });
    }
    await setDoc(doc(db, 'users', user.uid), { lliga: { lid, dins: true } }, { merge: true });
    // Surt a la classificació amb 0 punts des del primer moment. Si ja hi era
    // aquesta setmana, les regles no deixen tornar a 0 i no passa res.
    await setDoc(doc(db, 'lliga', setmana, 'participants', lid), { punts: 0, puntsDia: 0, dia }).catch(() => {});
    return { ok: true, lid };
  } catch (e) {
    console.warn('[Lliga] Error entrant:', e.code);
    return { ok: false, reason: e.code || e.message };
  }
};

// Sortir: retira el consentiment. El perfil perd el nom i queda «fora», amb les
// medalles guardades per si hi torna; els punts d'aquesta setmana s'esborren. Es
// queden el lid i la reserva del pseudònim, que també fa servir la resta de l'app.
window.fbLligaSurt = async (setmana) => {
  const user = auth.currentUser;
  if (!user) return { ok: false, reason: 'no-user' };
  try {
    const { lid } = await llegeixEstatLliga(user);
    if (lid) {
      await deleteDoc(doc(db, 'lliga', setmana, 'participants', lid)).catch(() => {});
      await updateDoc(doc(db, 'lligaPerfils', lid), { pseudonim: deleteField(), clau: deleteField(), fora: true });
    }
    await setDoc(doc(db, 'users', user.uid), { lliga: { lid, dins: false } }, { merge: true });
    return { ok: true };
  } catch (e) {
    console.warn('[Lliga] Error sortint:', e.code);
    return { ok: false, reason: e.code || e.message };
  }
};

// Suma punts de lliga, retallats al sostre del dia. Transacció: amb dos mòbils
// alhora, el segon rellegeix i no passa del sostre. Torna el que ha quedat.
window.fbLligaSuma = async (lid, setmana, dia, quant, sostre) => {
  const ref = doc(db, 'lliga', setmana, 'participants', lid);
  return runTransaction(db, async tx => {
    const s = await tx.get(ref);
    const d = s.exists() ? s.data() : null;
    const puntsDiaAvui = (d && d.dia === dia) ? d.puntsDia : 0;
    const afegits = Math.min(quant, sostre - puntsDiaAvui);
    if (afegits <= 0) return { afegits: 0, punts: d ? d.punts : 0, puntsDia: puntsDiaAvui, dia };
    const nou = { punts: (d ? d.punts : 0) + afegits, puntsDia: puntsDiaAvui + afegits, dia };
    tx.set(ref, nou);
    return { afegits, ...nou };
  });
};

// Classificació d'una setmana: perfils de tothom qui participa i punts de la setmana.
window.fbLligaClassificacio = async (setmana) => {
  const [perfils, parts, w] = await Promise.all([
    getDocs(collection(db, 'lligaPerfils')),
    getDocs(collection(db, 'lliga', setmana, 'participants')),
    getDoc(doc(db, 'lliga', setmana)),
  ]);
  const wd = w.exists() ? w.data() : null;
  return {
    setmana: wd ? {
      inici: wd.inici.toMillis(), fi: wd.fi.toMillis(),
      tancada: !!wd.tancada, prova: !!wd.prova, podi: wd.podi || null,
    } : null,
    // Els perfils «fora» (han sortit) no tenen nom: només serveixen per al rècord.
    perfils: perfils.docs.map(p => ({
      lid: p.id, pseudonim: p.data().pseudonim || '', medalles: p.data().medalles || {}, fora: !!p.data().fora,
    })),
    punts: Object.fromEntries(parts.docs.map(p => [p.id, { punts: p.data().punts || 0, puntsDia: p.data().puntsDia || 0, dia: p.data().dia || 0 }])),
  };
};

// Quanta gent hi participa ara (per a la targeta de l'Inici). Una sola lectura.
window.fbLligaCompta = async () => {
  try { return (await getCountFromServer(query(collection(db, 'lligaPerfils'), where('fora', '==', false)))).data().count; }
  catch (e) { return null; }
};

// En esborrar el compte: punts de totes les setmanes, perfil públic, identitat i
// reserva del pseudònim. Les setmanes les dona index.html (lligaTotesLesSetmanes).
// Tot es fa ABANS d'esborrar lligaIds, perquè les regles el necessiten per saber
// que el lid és teu.
async function esborraLliga(user) {
  try {
    const { lid, clau } = await llegeixEstatLliga(user);
    if (lid) {
      const setmanes = window.lligaTotesLesSetmanes?.() || [];
      await Promise.all(setmanes.map(s =>
        deleteDoc(doc(db, 'lliga', s, 'participants', lid)).catch(() => {})));
      await deleteDoc(doc(db, 'lligaPerfils', lid)).catch(() => {});
      await deleteDoc(doc(db, 'lligaIds', lid)).catch(() => {});
    }
    if (clau) await deleteDoc(doc(db, 'pseudonims', clau)).catch(() => {});
  } catch (e) { console.warn('[Lliga] Error esborrant les dades de lliga:', e.code); }
}

// ── Canvis d'autenticació → notifica l'app principal ──
onAuthStateChanged(auth, user => {
  window.fbUser = user || null;
  document.dispatchEvent(new CustomEvent('fb-auth-change', { detail: user }));
  if (user) refreshFcmToken(user);
});
