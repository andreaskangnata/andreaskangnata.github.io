self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/src/css/app.css',
          '/src/js/app.js',
          '/images/icons/icon-72x72.png',
          '/images/icons/icon-96x96.png',
          '/images/icons/icon-128x128.png',
          '/images/icons/icon-144x144.png',
          '/images/icons/icon-152x152.png',
          '/images/icons/icon-192x192.png',
          '/images/icons/icon-384x384.png',
          '/images/icons/icon-512x512.png',
        ])
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});
