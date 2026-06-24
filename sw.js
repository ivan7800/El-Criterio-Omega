'use strict';
const CACHE = 'omega-protocol-v1.3.3-final-boot-fix';
const ASSETS = ['./','index.html','manifest.webmanifest','assets/cover.jpg','assets/omega-control-room.webp','icons/icon-72.png','icons/icon-96.png','icons/icon-128.png','icons/icon-144.png','icons/icon-152.png','icons/icon-192.png','icons/icon-384.png','icons/icon-512.png'];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).catch(()=>{}));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(res => {
    const copy = res.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy)).catch(()=>{});
    return res;
  }).catch(() => caches.match(event.request).then(cached => cached || caches.match('index.html'))));
});
