self.addEventListener('install', event => {
  console.log('[Service Worker] installing...');
  // Add a call to skipWaiting here
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] activating...');
});

// Add handler for MyOffersPage data fetch requests

self.addEventListener('fetch', (event) => {
    /*if (event.request.url.indexOf('/hello') > 0) {
        console.log('DEBUG: Inside the /hello handler.');
        event.respondWith(new Response('Fetch handler for /hello'));
      }*/
      console.log('[Service Worker] Fetch: ', event);

      event.respondWith(new Response('Hello'));
});
