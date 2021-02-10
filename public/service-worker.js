/* eslint-disable no-restricted-globals */
const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = ["/", "/static/", "/images/"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // Open a cache and cache our files
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
