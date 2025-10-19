// This is the service worker. Future enhancements for offline capabilities can be implemented here.
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
});