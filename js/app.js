// Registra el service worker usando una ruta compatible con GitHub Pages
// (repositorio) y con un servidor local.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = new URL('./sw.js', document.baseURI);
    navigator.serviceWorker.register(swUrl.href)
      .then(registration => console.log('Service Worker registrado:', registration.scope))
      .catch(error => console.error('Error al registrar el Service Worker:', error));
  });
}
