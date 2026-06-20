import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,
         createUserWithEmailAndPassword, signInWithEmailAndPassword }
  from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc }
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
    }
    return { ok: true };
  } catch (e) {
    console.warn('[FCM] Error:', e.code || e.message);
    return { ok: false, reason: e.code || e.message };
  }
};

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

// ── Perfil ──
window.fbSaveProfile = async (data) => {
  const user = auth.currentUser;
  if (!user) return;
  try {
    await setDoc(doc(db, 'users', user.uid), { profile: data }, { merge: true });
  } catch (e) { console.warn('[FB] Error desant perfil:', e.code); }
};

// ── Canvis d'autenticació → notifica l'app principal ──
onAuthStateChanged(auth, user => {
  window.fbUser = user || null;
  document.dispatchEvent(new CustomEvent('fb-auth-change', { detail: user }));
});
