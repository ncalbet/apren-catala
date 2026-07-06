// Català Trainer — Service Worker
const CACHE_VERSION = 'catala-trainer-v99';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './data.js',
  './firebase.js'
];

// ── INSTAL·LACIÓ ──
self.addEventListener('install', event => {
  console.log('[SW] Instal·lant...');
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      console.log('[SW] Guardant fitxers en caché');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVACIÓ ──
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
  if (!event.request.url.startsWith(self.location.origin)) return;

  const path = new URL(event.request.url).pathname;
  const isContent = event.request.mode === 'navigate'
    || path === '/' || path.endsWith('/')
    || path.endsWith('/index.html') || path.endsWith('/data.js');

  if (isContent) {
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

// ── MISSATGES ──
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// ── PUSH NOTIFICATIONS ──
self.addEventListener('push', event => {
  if (!event.data) return;
  let payload;
  try { payload = event.data.json(); } catch { return; }
  const notif = payload.notification || {};
  event.waitUntil(
    self.registration.showNotification(notif.title || 'AprènCatalà', {
      body: notif.body || '',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-192x192.png',
      tag: 'aprencatala-reminder',
      data: { url: '/' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const c of list) {
        if (c.url.includes(self.location.origin)) return c.focus();
      }
      return clients.openWindow('/');
    })
  );
});
