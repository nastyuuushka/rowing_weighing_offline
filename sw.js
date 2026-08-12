const CACHE_NAME = 'rowing_weighing_offline-v1'
const urlsToCache = [
    '/rowing_weighing_offline/index.html',
    '/rowing_weighing_offline/manifest.json',
    '/rowing_weighing_offline/ROW.png'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    )
    self.skipWaiting()
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    )
})
