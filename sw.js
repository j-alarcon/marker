// Name of the current version of app
const cacheName = "reoneo_v1.0";

// All the files we want to storage in cache to work offline
const appShellFiles = [
  "./",
  "./index.html",
  "./css/fonts.css",
  "./css/main.css",
  "./css/position.css",
  "./css/reset.css",
  "./css/responsive.css",
  "./audio/alert.mp3",
  "./audio/finish.mp3",
  "./fonts/anton.ttf",
  "./img/favicon.webp",
  "./img/icons/burger.svg",
  "./img/icons/minus.svg",
  "./img/icons/play.svg",
  "./img/icons/plus.svg",
  "./img/icons/reset.svg",
  "./img/icons/stop.svg",
  "./img/logos/penguin_white.webp",
  "./img/pwa/icons/reoneo_icon_32x32.png",
  "./img/pwa/icons/reoneo_icon_48x48.png",
  "./img/pwa/icons/reoneo_icon_64x64.png",
  "./img/pwa/icons/reoneo_icon_72x72.png",
  "./img/pwa/icons/reoneo_icon_96x96.png",
  "./img/pwa/icons/reoneo_icon_128x128.png",
  "./img/pwa/icons/reoneo_icon_144x144.png",
  "./img/pwa/icons/reoneo_icon_192x192.png",
  "./img/pwa/icons/reoneo_icon_256x256.png",
  "./img/pwa/icons/reoneo_icon_384x384.png",
  "./img/pwa/icons/reoneo_icon_512x512.png",
  "./img/pwa/icons/reoneo_icon_1024x1024.png", 
  "./js/main.js",
  "./js/utility.js",
];

// Merge of images to current cache storage
const contentToCache = appShellFiles;

// Installation of service-workers
self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(contentToCache);
    })()
  );
});

// Delete old cache
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetching all data
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      if (r) return r;
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      cache.put(e.request, response.clone());
      return response;
    })()
  );
});
