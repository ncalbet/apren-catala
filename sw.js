// Català Trainer — Service Worker
const CACHE_VERSION = 'catala-trainer-v174';
// Els clips d'àudio (audio/<nivell>/<id>-v<n>.mp3) tenen memòria cau pròpia, que NO
// s'esborra amb el bump: sense connexió, els que ja s'han escoltat han de continuar
// sonant. Pot ser-ho perquè el nom del fitxer porta la versió: un clip refet és un
// fitxer nou, i el vell no se serveix mai per un de nou.
const AUDIO_CACHE = 'catala-trainer-audio-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './icons/badge-96.png',
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
          .filter(key => key !== CACHE_VERSION && key !== AUDIO_CACHE)
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
  if (path.includes('/audio/')) { event.respondWith(respostaAudio(event.request)); return; }

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

// ── ÀUDIO: cache-first, i per sempre ──
// L'element <audio> demana el clip a trossos (capçalera Range). Es baixa sencer un sol
// cop (una resposta 206 no es pot desar) i es tallen els trossos de la còpia. Si no hi
// ha còpia ni xarxa, un 503: l'element dispara «error» i l'app ho diu.
async function respostaAudio(request) {
  const url = request.url.split('#')[0];
  const cache = await caches.open(AUDIO_CACHE);
  let sencer = await cache.match(url);
  if (!sencer) {
    let resposta;
    try { resposta = await fetch(url); } catch { return new Response('', { status: 503 }); }
    if (!resposta || resposta.status !== 200) return resposta || new Response('', { status: 503 });
    await cache.put(url, resposta.clone());
    sencer = resposta;
  }
  const range = request.headers.get('range');
  if (!range) return sencer;
  const dades = await sencer.arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(range);
  const inici = m && m[1] ? parseInt(m[1], 10) : 0;
  const fi = m && m[2] ? Math.min(parseInt(m[2], 10), dades.byteLength - 1) : dades.byteLength - 1;
  if (inici > fi) return new Response('', { status: 416, headers: { 'Content-Range': `bytes */${dades.byteLength}` } });
  return new Response(dades.slice(inici, fi + 1), {
    status: 206,
    headers: {
      'Content-Type': 'audio/mpeg',
      'Content-Range': `bytes ${inici}-${fi}/${dades.byteLength}`,
      'Content-Length': String(fi - inici + 1),
      'Accept-Ranges': 'bytes'
    }
  });
}

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
    // Si l'app és oberta i visible, no mostrem el recordatori: l'usuari ja hi és
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      if (list.some(c => c.visibilityState === 'visible')) return;
      return self.registration.showNotification(notif.title || 'AprènCatalà', {
        body: notif.body || '',
        icon: '/icons/icon-192x192.png',
        // Monocroma (silueta blanca + alfa): Android la pinta a la barra d'estat.
        // Amb la de color hi sortia un quadrat blanc.
        badge: '/icons/badge-96.png',
        tag: 'aprencatala-reminder',
        data: { url: '/' }
      });
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
