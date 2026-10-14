const CACHE_NAME = "karumbe-v2"; // Incrementado para v2 para forçar a atualização da cache

const ARQUIVOS = [
    "./",
    "./index.html",
    "./alfabeto.html",
    "./historia.html",
    "./instituicao.html",
    "./religiao.html",
    "./style.css",
    "./script.js",
    "./dicionario.js",
    "./dicionario2.js",
    "./dicionario-rua.js",
    "./lingua.js",
    "./religiao.js",
    "./mapa.js",
    "./manifest.json"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ARQUIVOS))
    );

    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(chaves => {
            return Promise.all(
                chaves
                    .filter(chave => chave !== CACHE_NAME)
                    .map(chave => caches.delete(chave))
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(resposta => {
                return resposta || fetch(event.request);
            })
    );
});
