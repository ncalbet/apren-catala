// Català Trainer — Service Worker
// Versió de la caché — canvia aquest número per forçar actualització
const CACHE_VERSION = 'catala-trainer-v53';

// Fitxers a guardar en caché per funcionar offline
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './data.js'
];

// ── INSTAL·LACIÓ: guardem els assets en caché ──
self.addEventListener('install', event => {
  console.log('[SW] Instal·lant...');
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      console.log('[SW] Guardant fitxers en caché');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVACIÓ: eliminem cachés velles ──
self.addEventListener('activate', event => {
  console.log('[SW] Activant...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_VERSION)
          .map(key => {
            console.log('[SW] Eliminant caché antiga:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH ──
// index.html i data.js: NETWORK-FIRST (els testers reben sempre l'última versió si tenen xarxa).
// Resta d'assets (icones, manifest): cache-first amb actualització en segon pla.
self.addEventListener('fetch', event => {
  // Deixem passar les peticions externes (Google Fonts, APIs)
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const path = new URL(event.request.url).pathname;
  const isContent = event.request.mode === 'navigate'
    || path === '/' || path.endsWith('/')
    || path.endsWith('/index.html') || path.endsWith('/data.js');

  if (isContent) {
    // NETWORK-FIRST: provem la xarxa; si falla, servim la caché.
    event.respondWith(
      fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, responseClone));
        }
        return networkResponse;
      }).catch(() =>
        caches.match(event.request).then(cached => cached || caches.match('./index.html'))
      )
    );
    return;
  }

  // CACHE-FIRST (stale-while-revalidate) per a assets estàtics
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, responseClone));
        }
        return networkResponse;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});

// ── MISSATGES: permet forçar actualització ──
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
