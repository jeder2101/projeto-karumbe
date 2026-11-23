// service-worker.js
// Karumbé — cache-first com fallback de rede e cache dinâmico

const CACHE_NAME = "karumbe-v3"; // subir a cada edição de .js/.html

// Arquivos essenciais (o SW falha na instalação se faltar HTML principal).
// Os .js do dicionário entram todos aqui, inclusive os complementos futuros.
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
  "./normalizar-dicionario.js",   // ← NOVO
  "./dicionario-rua.js",
  "./lingua.js",
  "./religiao.js",
  "./mapa.js",
  "./manifest.json"
  // Quando criar os complementos, descomente e adicione:
  // "./complemento-verbos.js",
  // "./complemento-posposicoes.js",
  // "./complemento-adverbios.js",
  // "./complemento-interrogativas.js"
];

// ---------- INSTALL ----------
// allSettled para que um arquivo faltando não derrube a instalação inteira.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(
        ARQUIVOS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn("[SW] Falhou ao cachear:", url, err);
          })
        )
      )
    ).then(() => self.skipWaiting())
  );
});

// ---------- ACTIVATE ----------
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((chaves) =>
      Promise.all(
        chaves
          .filter((chave) => chave !== CACHE_NAME)
          .map((chave) => caches.delete(chave))
      )
    ).then(() => self.clients.claim())
  );
});

// ---------- FETCH ----------
// Cache-first, com cache dinâmico por baixo.
// 1. Se está no cache, devolve.
// 2. Se não está, busca da rede.
// 3. Se a rede responde OK para uma GET do mesmo domínio, guarda no cache.
// 4. Se a rede falha, tenta de novo o cache (rede caiu no meio).
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  // Não cachear requests de extensão de navegador nem chrome-extension://
  const url = new URL(event.request.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((resp) => {
          if (!resp || !resp.ok || resp.type !== "basic") return resp;
          const clone = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return resp;
        })
        .catch(() => caches.match(event.request));
    })
  );
});
