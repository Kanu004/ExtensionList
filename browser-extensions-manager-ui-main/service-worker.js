self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("static-cache").then((cache) => {
        return cache.addAll([
          "./",
          "./index.html",
          "./style.css",
          "./script.js",
          "./assets/images/android-icon-192x192.png",
          "./assets/images/apple-icon-152x152.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
  