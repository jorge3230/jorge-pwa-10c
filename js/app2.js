
if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/sw.js");
}

if (window.caches) {
    caches.open("practica").then(cache => {

        caches.keys().then(console.log);

        cache.add("/main2");

        cache.addAll([
            "/index.html",
            "/sw.js"
        ]).then(() => {
            cache.delete("/main2.jpg");

            cache.put(
                "/sw.js",
                new Response("Jorge Luis Venegas Garcia , Salvador Cruz Torres")
            );
        });

        cache.match("/sw.js")
            .then(respuesta => {
                if (respuesta) {
                    respuesta.text().then(console.log);
                }
            });
    });

    caches.keys().then(console.log);
}
