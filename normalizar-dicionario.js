// ============================================================
// normalizar-dicionario.js
// Carregar DEPOIS de dicionario.js, dicionario2.js e dicionario3.js
// e ANTES de script.js no index.html.
//
// Ordem correta no index.html:
//   <script src="js/dicionario.js"></script>
//   <script src="js/dicionario2.js"></script>
//   <script src="js/dicionario3.js"></script>
//   <script src="js/normalizar-dicionario.js"></script>
//   <script src="js/script.js"></script>
// ============================================================

(function () {
  "use strict";

  // ---------- 0. integra o DICIONARIO3, se existir ----------
  if (
    typeof DICIONARIO3 !== "undefined" &&
    Array.isArray(DICIONARIO3) &&
    typeof DICIONARIO !== "undefined" &&
    Array.isArray(DICIONARIO)
  ) {
    DICIONARIO.push(...DICIONARIO3);
    console.log(
      "[Karumbé] Dicionário 3 staged:",
      DICIONARIO3.length,
      "termos (serão deduplicados abaixo)."
    );
  }

  if (typeof DICIONARIO === "undefined" || !Array.isArray(DICIONARIO)) {
    console.warn("[Karumbé] DICIONARIO não encontrado. Nada a normalizar.");
    return;
  }

  // ============================================================
  // 1. CATEGORIAS CANÔNICAS
  // ============================================================
  const CATEGORIAS_CANONICAS = [
    "Expressões",
    "Verbos",
    "Natureza",
    "Família",
    "Pós-posições",
    "Animais",
    "Corpo humano",
    "Localização",
    "Objetos",
    "Pronomes"
  ];

  // Mapa de categoria crua → categoria canônica.
  // Inclui entradas dos três dicionários (1, 2 e 3).
  const MAPA_CATEG = {
    // --- Verbos ---
    "Verbo": "Verbos",
    "Verbos": "Verbos",
    "Verbo / Repetição": "Verbos",
    "Verbo / Ação": "Verbos",
    "Verbo / Posição": "Verbos",
    "Verbo / Sentimento": "Verbos",
    "Verbo / Sensação": "Verbos",
    "Verbo / Ação Reflexiva": "Verbos",
    "Verbo / Modo Imperativo (2ª Pessoa)": "Verbos",
    "Verbo de Ação / Modo Imperativo (2ª Pessoa)": "Verbos",
    "Verbo Recíproco / Conflito Geral": "Verbos",
    "Verbo Transitivo / Conflito Verbal": "Verbos",
    "Ações e Fogo": "Verbos",
    "Ações e Posição": "Verbos",
    "Ações e Organização": "Verbos",
    "Ações e Relações": "Verbos",
    "Ações e Postura": "Verbos",
    "Ações e Estado": "Verbos",
    "Ações e Movimento": "Verbos",
    "Ações e Esforço": "Verbos",
    "Sentimentos e Ações": "Verbos",
    "Sentidos e Percepção": "Verbos",
    "Força e Estado": "Verbos",

    // --- Corpo humano ---
    "Partes do Corpo / Membros Superiores": "Corpo humano",
    "Partes do Corpo / Revestimento e Anexos": "Corpo humano",
    "Partes do Corpo / Anatomia Interna": "Corpo humano",
    "Partes do Corpo / Morfologia": "Corpo humano",
    "Parte do corpo humano": "Corpo humano",
    "Parte do corpo": "Corpo humano",
    "Expressões / Corpo humano": "Corpo humano",

    // --- Expressões ---
    "Partícula / Interjeição de Interrupção Imediata": "Expressões",
    "Partícula de Limite / Conclusão de Ação": "Expressões",
    "Partícula de Negação / Interrupção Categórica": "Expressões",
    "Partícula de Negação": "Expressões",
    "Expressões / Tempo": "Expressões",
    "Expressões/ Tempo": "Expressões",
    "Expressões / Espiritualidade": "Expressões",
    "Expressão / Clima": "Expressões",
    "Expressão": "Expressões",
    "Expressões l.": "Expressões",
    "Numeral": "Expressões",
    "Saída e Sensações": "Expressões",
    "Tempo e Espaço": "Expressões",
    "Quantidades e Cotidiano": "Expressões",

    // --- Pronomes ---
    "Pronomes e Referência": "Pronomes",
    "Pronomes": "Pronomes",
    "pronomes": "Pronomes",
    "pronomes / advérbio": "Pronomes",
    "pronomes / quantificador": "Pronomes",

    // --- Pós-posições ---
    "Gramática / Pós-posições": "Pós-posições",
    "Posição / Pós-posição": "Pós-posições",
    "Pós-posições": "Pós-posições",

    // --- Localização ---
    "Espaço e Localização": "Localização",
    "Habitação e Espaço": "Localização",
    "Localização": "Localização",

    // --- Natureza / Animais ---
    "Alimentação e Natureza": "Natureza",
    "Natureza e Animais": "Animais",
    "Natureza": "Natureza",
    "Animais": "Animais",

    // --- Família / Objetos ---
    "Família": "Família",
    "Objetos": "Objetos",

    // --- Plantas (o d1 usa "Plantas" em mandyju) ---
    "Plantas": "Natureza"
  };

  // ============================================================
  // 2. NORMALIZAÇÃO DE TIPO
  // ============================================================
  // Consolida tipos verbais vindos do dicionario3 (verbo irregular,
  // defectivo, partícula interrogativa, nome próprio etc.) num
  // conjunto estável que o script.js consegue filtrar.
  const MAPA_TIPO = {
    "verbo irregular": "verbo",
    "verbo defectivo": "verbo",
    "verbo (imperativo)": "verbo",
    "verbo (imperativo negativo)": "verbo",
    "verbo / expressão": "verbo",
    "verbo / expressão verbal": "verbo",
    "verbo / expressão interrogativa": "verbo",
    "verbo / adjetivo": "verbo",
    "verbo / substantivo": "verbo",
    "substantivo / verbo": "substantivo",
    "verbo / substantivo": "verbo",
    "substantivo composto": "substantivo",
    "substantivo / adjetivo": "substantivo",
    "substantivo / particípio": "substantivo",
    "substantivo / animal": "substantivo",
    "substantivo / pós-posição": "substantivo",
    "substantivo / expressão": "substantivo",
    "locução verbal": "verbo",
    "adjetivo / cor": "adjetivo",
    "adjetivo / advérbio": "adjetivo",
    "adjetivo / substantivo": "adjetivo",
    "nome próprio": "substantivo",
    "partícula interrogativa": "partícula",
    "partícula": "partícula",
    "prefixo": "prefixo",
    "prefixo verbal": "prefixo",
    "prefixo de objeto": "prefixo",
    "interjeição / expressão": "interjeição",
    "interjeição / partícula": "interjeição",
    "pós-posição / conjunção": "pós-posição",
    "pós-posição / sufixo": "pós-posição",
    "sufixo": "sufixo",
    "numeral": "numeral",
    "pronomes": "pronome",
    "pronome pessoal": "pronome",
    "pronome com pós-posição": "pronome",
    "expressão": "expressão"
  };

  // ============================================================
  // 3. CHAVE DE COMPARAÇÃO
  // ============================================================
  // Remove acento, apóstrofo, hífen, barra, parênteses e colapsa
  // espaços múltiplos. Não remove o glotal interno quando é grafia
  // (djo'i, dju'i) — esses casos são tratados pelo campo "variantes".
  function chave(p) {
    return (p || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[’´`‘]/g, "'")
      .replace(/['`]/g, "")           // remove glotal da chave
      .replace(/[-–—/()]/g, " ")       // hífen/barra/parêntese → espaço
      .replace(/[.,;:!?]/g, "")        // remove pontuação
      .replace(/\s+/g, " ")
      .trim();
  }

  // Peso para escolher a entrada mais completa entre duplicatas.
  function peso(e) {
    let p = 0;
    p += (e.exemplos ? e.exemplos.length : 0) * 100;
    p += (e.traducao ? e.traducao.length : 0) * 100;
    if (e.nota) p += 20;
    if (e.sentido_de) p += 10;
    if (e.falante) p += 5;
    if (e.audio) p += 1;
    if (e.variantes && e.variantes.length) p += 2;
    return p;
  }

  // ============================================================
  // 4. NORMALIZAÇÃO DE CADA ENTRADA
  // ============================================================
  let corrigidas_categoria = 0;
  let corrigidas_tipo = 0;
  let orfas = [];

  for (const e of DICIONARIO) {
    // categoria
    if (MAPA_CATEG[e.categoria]) {
      e.categoria = MAPA_CATEG[e.categoria];
      corrigidas_categoria++;
    } else if (!CATEGORIAS_CANONICAS.includes(e.categoria)) {
      orfas.push(e.palavra + " :: " + JSON.stringify(e.categoria));
      e.categoria = "Expressões";
    }

    // tipo
    if (e.tipo && MAPA_TIPO[e.tipo]) {
      e.tipo = MAPA_TIPO[e.tipo];
      corrigidas_tipo++;
    } else if (e.tipo === "pronomes") {
      e.tipo = "pronome";
      corrigidas_tipo++;
    }

    // padrões
    if (!e.falante) e.falante = "Uso geral";
    if (!e.sentido_de) e.sentido_de = e.significado || "";

    // normaliza variantes (remove a própria palavra e duplicações internas)
    if (Array.isArray(e.variantes) && e.variantes.length) {
      const kp = chave(e.palavra);
      const vistos = new Set([kp]);
      const limpas = [];
      for (const v of e.variantes) {
        const kv = chave(v);
        if (kv && !vistos.has(kv)) {
          vistos.add(kv);
          limpas.push(v);
        }
      }
      e.variantes = limpas.length ? limpas : undefined;
    }
  }

  // ============================================================
  // 5. DEDUPLICAÇÃO
  // ============================================================
  const mapa = new Map();     // chave → entrada
  const alias = new Map();    // chave de variante → entrada
  const removidas = [];
  const conflitos = [];

  for (const e of DICIONARIO) {
    const kCanon = chave(e.palavra);
    if (!kCanon) continue;

    const atual = mapa.get(kCanon);

    if (atual) {
      // já existe: mantém a mais completa
      if (peso(e) > peso(atual)) {
        removidas.push(atual.palavra);
        mapa.set(kCanon, e);
        // reindexa as variantes da entrada nova (a antiga perde prioridade)
      } else {
        removidas.push(e.palavra);
      }
      // mescla variantes da que não sobreviveu (para não perder grafias)
      const sobrevivente = mapa.get(kCanon);
      const outra = peso(e) > peso(atual) ? atual : e;
      if (Array.isArray(outra.variantes) && outra.variantes.length) {
        const atuais = new Set((sobrevivente.variantes || []).map(chave));
        const novas = (sobrevivente.variantes || []).slice();
        for (const v of outra.variantes) {
          if (!atuais.has(chave(v))) {
            atuais.add(chave(v));
            novas.push(v);
          }
        }
        if (novas.length) sobrevivente.variantes = novas;
      }
    } else {
      mapa.set(kCanon, e);
    }
  }

  // indexa variantes → mesmo registro (busca por grafia alternativa)
  for (const e of mapa.values()) {
    if (!Array.isArray(e.variantes)) continue;
    for (const v of e.variantes) {
      const kv = chave(v);
      if (!kv) continue;
      if (kv === chave(e.palavra)) continue;    // não duplica a própria chave canônica
      if (mapa.has(kv)) {
        // já existe outro registro para essa chave — registra conflito, não sobrescreve
        conflitos.push(v + " (" + e.palavra + " já existe como verbete principal)");
        continue;
      }
      alias.set(kv, e);
    }
  }

  // ============================================================
  // 6. RECONSTRÓI DICIONARIO NA MESMA REFERÊNCIA
  // ============================================================
  DICIONARIO.length = 0;
  for (const e of mapa.values()) DICIONARIO.push(e);

  // Índice opcional de busca por variante (exposto para o script.js)
  if (typeof window !== "undefined") {
    window.INDICE_VARIANTES = alias;
  }

  // ============================================================
  // 7. RELATÓRIO
  // ============================================================
  const contagem = {};
  for (const e of DICIONARIO) {
    contagem[e.categoria] = (contagem[e.categoria] || 0) + 1;
  }

  console.log(
    "[Karumbé] Dicionário normalizado:",
    DICIONARIO.length,
    "verbetes únicos."
  );
  console.table(contagem);

  if (removidas.length) {
    console.log(
      "[Karumbé] Duplicatas removidas (" + removidas.length + "):",
      removidas
    );
  }
  if (conflitos.length) {
    console.warn("[Karumbé] Variantes em conflito com verbetes principais:", conflitos);
  }
  if (orfas.length) {
    console.warn(
      "[Karumbé] Categorias órfãs remapeadas para Expressões:",
      orfas
    );
  }
  console.log(
    "[Karumbé] Categorias corrigidas:",
    corrigidas_categoria,
    "| Tipos corrigidos:",
    corrigidas_tipo,
    "| Variantes indexadas:",
    alias.size
  );
})();
