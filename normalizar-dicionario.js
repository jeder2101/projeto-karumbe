// normalizar-dicionario.js
// Colar ANTES do script.js no index.html. Roda uma vez ao carregar.

const CATEGORIAS_CANONICAS = [
  "Expressões", "Verbos", "Natureza", "Família",
  "Pós-posições", "Animais", "Corpo humano",
  "Localização", "Objetos", "Pronomes"
];

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
  "Objetos": "Objetos"
};

// Chave de comparação: palavra sem acento, minúscula, sem pontuação
function chave(p) {
  return (p || "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’´`]/g, "'")
    .replace(/^\s+|\s+$/g, "");
}

// Quanto "mais completa" a entrada é (para escolher qual manter)
function peso(e) {
  let p = 0;
  p += (e.exemplos?.length || 0) * 100;
  p += (e.traducao?.length || 0) * 100;
  if (e.nota) p += 20;
  if (e.sentido_de) p += 10;
  if (e.falante) p += 5;
  if (e.audio) p += 1;
  return p;
}

if (typeof DICIONARIO !== "undefined" && Array.isArray(DICIONARIO)) {
  // 1) normaliza categoria ANTES de deduplicar
  for (const e of DICIONARIO) {
    if (MAPA_CATEG[e.categoria]) {
      e.categoria = MAPA_CATEG[e.categoria];
    } else if (!CATEGORIAS_CANONICAS.includes(e.categoria)) {
      console.warn("[Karumbé] Categoria órfã → Expressões:", JSON.stringify(e.categoria), "(", e.palavra, ")");
      e.categoria = "Expressões";
    }
    if (e.tipo === "pronomes") e.tipo = "pronome";
    if (!e.falante) e.falante = "Uso geral";
    if (!e.sentido_de) e.sentido_de = e.significado || "";
  }

  // 2) deduplicar: mantém a mais completa
  const mapa = new Map();
  const removidas = [];
  for (const e of DICIONARIO) {
    const k = chave(e.palavra);
    const atual = mapa.get(k);
    if (!atual) { mapa.set(k, e); continue; }
    if (peso(e) > peso(atual)) {
      removidas.push(atual.palavra);
      mapa.set(k, e);
    } else {
      removidas.push(e.palavra);
    }
  }

  // 3) reconstrói DICIONARIO na mesma referência (para o script.js ver)
  DICIONARIO.length = 0;
  for (const e of mapa.values()) DICIONARIO.push(e);

  // Relatório por categoria
  const contagem = {};
  for (const e of DICIONARIO) contagem[e.categoria] = (contagem[e.categoria] || 0) + 1;
  console.log("[Karumbé] Dicionário normalizado:", DICIONARIO.length, "verbetes únicos.");
  console.table(contagem);
  if (removidas.length) console.log("[Karumbé] Duplicatas removidas:", removidas);
}
