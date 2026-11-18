self.addEventListener('fetch', evento => {
    const respuestaOffline = new Response(
        "Este sitio requiere conexión a Internet."
    );

    const respuesta = fetch(evento.request)
        .catch(() => respuestaOffline);

    evento.respondWith(respuesta);
});