
/*
========================================================
PROJETO KARUMBÉ
NOSSAS HISTÓRIAS E TRANSFORMAÇÕES DA LÍNGUA
Guarani Nhandewa
========================================================

Orientação:
- "documentado": baseado em registro ou fonte identificada.
- "hipótese": interpretação que precisa de investigação.
- "em estudo": informação ainda não concluída.
========================================================
*/

const HISTORIAS_LINGUA = [


{
    id: 1,
    categoria: "Apresentação",
    periodo: "Introdução",
    titulo: "A língua é memória, identidade e transformação",

    resumo:
        "A língua Nhandewa é memória, identidade, conhecimento e continuidade. Sua história pode ser estudada por meio da oralidade, dos registros escritos e das pesquisas linguísticas.",

    conteudo: `
A língua Nhandewa-Guarani não é apenas um conjunto de palavras.
Ela carrega conhecimentos, histórias, relações familiares,
espiritualidade, modos de viver e formas de compreender o mundo.

A língua é transmitida entre gerações e pode apresentar
variações de pronúncia, grafia, estrutura e significado.

Os registros históricos e os estudos linguísticos ajudam
a compreender aspectos da língua, mas devem ser analisados
considerando a comunidade, o período e o contexto em que
foram produzidos.

O trabalho de Consuelo de Paiva Godinho Costa contribui
para o estudo da fonologia do Nhandewa-Guarani, incluindo
a análise dos sons e de fenômenos relacionados à nasalidade.

O Projeto Karumbé reúne materiais, referências e reflexões
com o objetivo de apoiar a pesquisa, o ensino e a continuidade
da língua Guarani Nhandewa.

A língua permanece viva por meio dos seus falantes,
dos conhecimentos dos mais velhos, dos professores,
das crianças e das novas gerações.
`,

    tipo: "documentado",
    fonte: "Projeto Karumbé e estudos linguísticos do Nhandewa-Guarani",

    links: [
        {
            titulo: "Nhandewa Aywu – Museu Nacional dos Povos Indígenas",
            url: "https://pesquisa.museudoindio.gov.br/index.php/nhandewa-aywu-fonologia-do-nhandewa-guarani"
        },
        {
            titulo: "Fonologia do Nhandewa-Guarani – Revista LIAMES/Unicamp",
            url: "https://periodicos.sbu.unicamp.br/ojs/index.php/liames/article/view/1414"
        }
    ]
},

  {
    id: 2,
    categoria: "História",
    periodo: "Registros históricos",
    titulo: "Do Guarani Antigo ao Nhandewa contemporâneo",

    resumo:
      "A comparação entre documentos antigos, registros Apapocuva e a língua contemporânea permite investigar continuidades e transformações.",

    conteudo: `
      Os registros históricos apresentam formas linguísticas
      que podem ser comparadas com o Apapocuva e com o Nhandewa
      falado atualmente.

      Essa comparação não representa necessariamente uma
      evolução linear ou uniforme. Diferentes comunidades,
      contatos, deslocamentos e trajetórias históricas podem
      contribuir para a diversidade linguística.

      Cada comparação deve indicar a fonte, a data e o contexto
      em que a forma foi registrada.
    `,

    tipo: "em estudo",
    fonte: "Documentos históricos e estudos linguísticos"
  },

  {
    id: 3,
    categoria: "Sons",
    periodo: "Transformações fonológicas",
    titulo: "Mudanças nos sons da língua",

    resumo:
      "Os registros permitem investigar alterações na pronúncia e na representação escrita de determinados sons.",

    conteudo: `
      Entre os fenômenos que precisam ser comparados estão:

      - Mudanças ou variações entre /e/ e [i].
      - Mudanças ou variações entre /o/ e [u].
      - Registros de /s/ e africadas.
      - Ausência ou presença de /h/.
      - Variações relacionadas à nasalidade.
      - Diferenças entre grafia e pronúncia.

      A grafia utilizada em materiais pedagógicos não deve ser
      confundida automaticamente com a pronúncia de todos os falantes.
    `,

    tipo: "em estudo",
    fonte: "Estudos linguísticos e registros de falantes"
  },

  {
    id: 4,
    categoria: "Comparação",
    periodo: "Mudanças de posposição",
    titulo: "De pe, be e bo para py e wy",

    resumo:
      "Registros históricos apresentam formas de posposição que podem ser comparadas com formas registradas no Nhandewa contemporâneo.",

    conteudo: `
      Exemplos de comparação:

      Guarani Antigo:
      tatápe — ao fogo
      chebe — para mim
      ohubo — vindo ou para vir

      Apapocuva:
      tatápy
      chéwy
      oúwy

      No Nhandewa contemporâneo, formas como -py e -wy
      aparecem em diferentes construções.

      A análise deve considerar a tonicidade, a grafia,
      a pronúncia e o contexto da construção.
    `,

    tipo: "em estudo",
    fonte: "Comparação de registros históricos e gramática pedagógica"
  },

  {
    id: 5,
    categoria: "Comparação",
    periodo: "Causatividade",
    titulo: "Mõ, mü e mu",

    resumo:
      "Os registros apresentam formas relacionadas à construção causativa, cuja análise precisa considerar cada contexto.",

    conteudo: `
      Exemplo registrado:

      mohendy — atiçar ou fazer arder o fogo
      muendy — forma encontrada em registro Apapocuva

      No Nhandewa contemporâneo, também aparecem construções
      causativas com mbo-, mo- e outras formações.

      Não devemos considerar todas essas formas como uma única
      regra sem analisar suas estruturas e suas fontes.
    `,

    tipo: "em estudo",
    fonte: "Registros históricos e Lições de Gramática Nhandewa-Guarani"
  },

  {
    id: 6,
    categoria: "Comparação",
    periodo: "Nasalidade",
    titulo: "A relação entre r e n em ambiente nasal",

    resumo:
      "Alguns registros apresentam formas com n onde outros registros apresentam r, levantando questões sobre nasalização e percepção dos sons.",

    conteudo: `
      Exemplos de comparação:

      porã — bom ou bonito
      ponã — forma registrada em determinado contexto

      A interpretação de que o som seria um r nasalizado
      deve ser tratada como hipótese, e não como conclusão
      definitiva para todas as ocorrências.

      É importante comparar a pronúncia de diferentes falantes,
      a posição do som na palavra e o contexto fonológico.
    `,

    tipo: "hipótese",
    fonte: "Análise comparativa de registros linguísticos"
  },

  {
    id: 7,
    categoria: "Comparação",
    periodo: "Morfologia",
    titulo: "Desaparecimento ou redução de morfemas",

    resumo:
      "Alguns registros apresentam diferenças na presença de morfemas finais ou internos.",

    conteudo: `
      Exemplos que merecem investigação:

      eyma / yma — formas relacionadas à negação
      ey — forma registrada em comparação

      cherembireco e formas reduzidas
      cheremymba e formas reduzidas

      A redução de uma forma em determinado registro não prova
      que o morfema tenha desaparecido de toda a língua.

      É necessário consultar outros falantes, textos e contextos.
    `,

    tipo: "em estudo",
    fonte: "Registros históricos e documentação contemporânea"
  },

  {
    id: 8,
    categoria: "Gramática",
    periodo: "Partículas",
    titulo: "As partículas ma e pa",

    resumo:
      "Partículas afirmativas e interrogativas aparecem em registros históricos e em materiais contemporâneos.",

    conteudo: `
      A partícula ma aparece em construções afirmativas
      e pode ocorrer mais de uma vez em uma mesma sentença.

      A partícula pa é associada a construções interrogativas.

      O uso das partículas deve ser estudado em frases completas,
      considerando a posição, o contexto e a função discursiva.
    `,

    tipo: "documentado",
    fonte: "Registros linguísticos e material gramatical"
  },

  {
    id: 9,
    categoria: "Gramática",
    periodo: "Construções verbais",
    titulo: "O uso do supino vy",

    resumo:
      "A forma vy aparece em construções relacionadas aos verbos de movimento e deve ser analisada junto com o verbo.",

    conteudo: `
      Exemplos de construções registradas:

      Ojapó ma oóvy
      — enquanto ele ia e a fazia

      oaçá oóvy
      — quando ela atravessou

      oguejy oúvy
      — quando ele vinha descendo

      O elemento vy não deve ser traduzido isoladamente
      sem considerar a construção verbal completa.
    `,

    tipo: "documentado",
    fonte: "Registros narrativos e análise gramatical"
  },

  {
    id: 10,
    categoria: "Vocabulário",
    periodo: "Significado e uso",
    titulo: "As palavras podem adquirir novos significados",

    resumo:
      "Uma palavra pode manter sua forma e desenvolver novos usos ou sentidos em diferentes contextos.",

    conteudo: `
      As mudanças linguísticas podem ocorrer na pronúncia,
      na grafia, na estrutura e também no significado.

      Uma palavra pode:
      - ampliar seu significado;
      - adquirir um uso mais específico;
      - apresentar sentidos diferentes em contextos distintos;
      - permanecer na oralidade mesmo sem aparecer em um livro;
      - ser substituída por outra forma em determinado grupo.

      O registro de variantes é importante para compreender
      a diversidade e a continuidade da língua.
    `,

    tipo: "em estudo",
    fonte: "Reflexão linguística do Projeto Karumbé"
  },

  {
    id: 11,
    categoria: "Futuro",
    periodo: "Projeto Karumbé",
    titulo: "A revitalização e a continuidade da língua",

    resumo:
      "O registro digital pode ajudar a conectar materiais históricos, conhecimentos atuais e práticas de ensino.",

    conteudo: `
      O Projeto Karumbé pretende reunir referências,
      palavras, exemplos, histórias e análises linguísticas.

      A documentação deve respeitar os conhecimentos da comunidade,
      a autoria dos materiais e a participação dos falantes.

      O objetivo não é congelar a língua, mas contribuir para
      sua transmissão, valorização, estudo e continuidade.
    `,

    tipo: "projeto",
    fonte: "Projeto Karumbé"
  }

];


/*
========================================================
FUNÇÕES DA SEÇÃO HISTÓRIA
========================================================
*/

function escaparHTML(texto) {
  return String(texto ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function formatarConteudo(texto) {
  return escaparHTML(texto)
    .trim()
    .split(/\n{2,}/)
    .map(paragrafo => {
      return `<p>${paragrafo.replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}


function classeTipo(tipo) {
  const classes = {
    "documentado": "historia-documentado",
    "hipótese": "historia-hipotese",
    "em estudo": "historia-estudo",
    "projeto": "historia-projeto"
  };

  return classes[tipo] || "historia-estudo";
}
function mostrarHistorias(lista = HISTORIAS_LINGUA) {

const HISTORIAS_LINGUA = [

  {
    id: 1,
    categoria: "Apresentação",
    periodo: "Introdução",
    tipo: "Língua e identidade",

    titulo: "A língua é memória, identidade e transformação",

    resumo:
      "A língua Nhandewa é memória, identidade, conhecimento e continuidade. Sua história pode ser estudada por meio da oralidade, dos registros escritos e das pesquisas linguísticas.",

    conteudo: `
A língua Nhandewa é parte fundamental da memória, da identidade e da continuidade do povo.

Por meio da língua são transmitidos conhecimentos, histórias, ensinamentos, nomes, relações com a natureza e formas próprias de compreender o mundo.

A língua não é apenas um conjunto de palavras. Ela carrega conhecimentos transmitidos entre gerações e permite que os ensinamentos dos mais velhos continuem presentes na vida das comunidades.

O estudo da língua Nhandewa pode reunir a oralidade, os registros escritos e as pesquisas linguísticas, valorizando os conhecimentos produzidos e transmitidos pelo próprio povo.

Preservar e fortalecer a língua significa também fortalecer a memória, a identidade e a continuidade cultural.
`,

    fonte:
      "Registros linguísticos, conhecimentos da comunidade e materiais de estudo da língua Nhandewa.",

    links: []
  }

];


function escaparHTML(texto = "") {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function classeTipo(tipo = "") {
  return String(tipo)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}


function formatarConteudo(texto = "") {
  return escaparHTML(texto)
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n{2,}/)
    .filter(paragrafo => paragrafo.trim())
    .map(paragrafo => `
      <p>${paragrafo.replace(/\n/g, "<br>")}</p>
    `)
    .join("");
}


function mostrarHistorias(lista = HISTORIAS_LINGUA) {
  const container = document.getElementById("lista-historias");

  if (!container) {
    console.warn("Elemento #lista-historias não encontrado.");
    return;
  }

  if (!lista.length) {
    container.innerHTML = `
      <div class="historia-vazia">
        Nenhum conteúdo encontrado.
      </div>
    `;
    return;
  }

  container.innerHTML = lista.map(item => `
    <article class="card-historia ${classeTipo(item.tipo)}">
      <span class="historia-categoria">
        ${escaparHTML(item.categoria)}
      </span>

      <h3>${escaparHTML(item.titulo)}</h3>

      <p class="historia-resumo">
        ${escaparHTML(item.resumo)}
      </p>

      <div class="historia-meta">
        <span>${escaparHTML(item.periodo)}</span>
        <span>${escaparHTML(item.tipo)}</span>
      </div>

      <button
        class="botao-historia"
        type="button"
        onclick="abrirHistoria(${item.id})">
        Ler conteúdo
      </button>
    </article>
  `).join("");
}


function abrirHistoria(id) {
  const item = HISTORIAS_LINGUA.find(historia => historia.id === id);

  if (!item) return;

  const modal = document.getElementById("modal-historia");
  const conteudo = document.getElementById("conteudo-historia");

  if (!modal || !conteudo) {
    console.warn("Modal da história não encontrado.");
    return;
  }

  conteudo.innerHTML = `
    <span class="historia-categoria">
      ${escaparHTML(item.categoria)}
    </span>

    <h2>${escaparHTML(item.titulo)}</h2>

    <p class="historia-periodo">
      ${escaparHTML(item.periodo)}
    </p>

    <div class="texto-historia">
  ${formatarConteudo(item.conteudo)}
</div>

  <div class="historia-fonte ${classeTipo(item.tipo)}">
  <strong>Classificação:</strong>
  ${escaparHTML(item.tipo)}
  <br>
  <strong>Fonte:</strong>
  ${escaparHTML(item.fonte)}

  ${
    item.links && item.links.length
      ? `
        <div class="historia-links">
          <strong>Fontes e leituras:</strong>
          ${item.links.map(link => `
            <a
              href="${link.url}"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 ${escaparHTML(link.titulo)}
            </a>
          `).join("")}
        </div>
      `
      : ""
  }
</div>
  `;

  modal.classList.add("ativo");
  modal.setAttribute("aria-hidden", "false");
}


function fecharHistoria() {
  const modal = document.getElementById("modal-historia");

  if (!modal) return;

  modal.classList.remove("ativo");
  modal.setAttribute("aria-hidden", "true");
}


function filtrarHistorias(termo = "") {
  const pesquisa = termo.trim().toLocaleLowerCase("pt-BR");

  const resultados = HISTORIAS_LINGUA.filter(item => {
    const texto = [
      item.titulo,
      item.resumo,
      item.conteudo,
      item.categoria,
      item.periodo
    ].join(" ").toLocaleLowerCase("pt-BR");

    return texto.includes(pesquisa);
  });

  mostrarHistorias(resultados);
}


function filtrarCategoriaHistoria(categoria) {
  if (!categoria || categoria === "todas") {
    mostrarHistorias();
    return;
  }

  const resultados = HISTORIAS_LINGUA.filter(
    item => item.categoria === categoria
  );

  mostrarHistorias(resultados);
}


/*
========================================================
INICIALIZAÇÃO
========================================================
*/

document.addEventListener("DOMContentLoaded", () => {
  mostrarHistorias();

  const campoPesquisa = document.getElementById("pesquisa-historias");

  if (campoPesquisa) {
    campoPesquisa.addEventListener("input", event => {
      filtrarHistorias(event.target.value);
    });
  }

  const botaoFechar = document.getElementById("fechar-modal-historia");

  if (botaoFechar) {
    botaoFechar.addEventListener("click", fecharHistoria);
  }

  const modal = document.getElementById("modal-historia");

  if (modal) {
    modal.addEventListener("click", event => {
      if (event.target === modal) {
        fecharHistoria();
      }
    });
  }
});
