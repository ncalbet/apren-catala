import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,
         createUserWithEmailAndPassword, signInWithEmailAndPassword }
  from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc }
  from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js';

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
