console.log("Script Karumbé Carregado e Atualizado!");

const lista = document.getElementById("lista");

/* =====================================================
   1. ÁUDIO
===================================================== */

/**
 * Reproduz o áudio do termo em Nhandewa
 * @param {string} caminho - Caminho relativo/absoluto para o arquivo de áudio
 */
function tocarAudio(caminho) {
    if (
        !caminho ||
        caminho === "" ||
        caminho === "undefined" ||
        caminho === "null"
    ) {
        alert("Gravação em Nhandewa indisponível no momento.");
        return;
    }

    const audio = new Audio(caminho);

    audio.play().catch(err => {
        console.warn("Erro ao tocar áudio:", err);
        alert("Não foi possível reproduzir o áudio.");
    });
}


/* =====================================================
   2. NORMALIZAR TEXTO (Remoção de acentos e diacríticos)
===================================================== */

/**
 * Normaliza o texto removendo acentos e convertendo para caixa baixa
 * @param {string} texto 
 * @returns {string} Texto limpo
 */
function normalizar(texto) {
    if (!texto) return "";

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


/* =====================================================
   3. DISTÂNCIA DE LEVENSHTEIN (Busca Aproximada)
===================================================== */

/**
 * Calcula a distância de edição entre duas strings
 */
function distancia(a, b) {
    const matriz = [];

    for (let i = 0; i <= b.length; i++) {
        matriz[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matriz[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b[i - 1] === a[j - 1]) {
                matriz[i][j] = matriz[i - 1][j - 1];
            } else {
                matriz[i][j] = Math.min(
                    matriz[i - 1][j - 1] + 1, // substituição
                    matriz[i][j - 1] + 1,     // inserção
                    matriz[i - 1][j] + 1      // remoção
                );
            }
        }
    }

    return matriz[b.length][a.length];
}


/* =====================================================
   4. BUSCA APROXIMADA / SUGESTÕES
===================================================== */

/**
 * Encontra termos semelhantes caso a busca exata falhe
 * @param {string} texto - Termo digitado pelo usuário
 * @returns {Array} Lista de itens sugeridos
 */
function buscaAproximada(texto) {
    const textoNorm = normalizar(texto);

    if (textoNorm.length < 3 || typeof DICIONARIO === "undefined") {
        return [];
    }

    return DICIONARIO.filter(item => {
        const campos = [
            item.palavra,
            item.significado,
            item.categoria,
            ...(item.exemplos || []),
            ...(item.traducao || [])
        ];

        return campos.some(valor =>
            valor &&
            distancia(
                textoNorm,
                normalizar(valor)
            ) <= 1
        );
    });
}


/* =====================================================
   5. VOLTAR AO INÍCIO
===================================================== */

function voltarAoInicio() {
    location.reload();
}


/* =====================================================
   6. RENDERIZAÇÃO / MOSTRAR PALAVRAS
===================================================== */

/**
 * Renderiza os cards de palavras na tela
 * @param {Array} palavras - Subconjunto de itens do dicionário
 */
function mostrarPalavras(palavras) {
    if (!lista) return;

    lista.innerHTML = "";

    /* BOTÃO VOLTAR */
    const voltar = document.createElement("button");
    voltar.className = "voltar";
    voltar.innerHTML = "⬅️ Voltar ao início";
    voltar.onclick = voltarAoInicio;
    lista.appendChild(voltar);

    /* CASO NENHUM RESULTADO SEJA ENCONTRADO */
    if (!palavras || palavras.length === 0) {
        const inputBusca = document.getElementById("busca");
        const termoPesquisado = inputBusca ? inputBusca.value : "";
        const sugestoes = buscaAproximada(termoPesquisado);

        let html = `
            <div class="card-pronuncia">
                <h3 style="font-size:22px; margin-bottom:12px;">
                    Nenhum resultado encontrado.
                </h3>
        `;

        if (sugestoes.length > 0) {
            html += `
                <div style="margin-top:15px; font-size:18px;">
                    🔎 Você quis dizer:
                    <strong>${sugestoes[0].palavra}</strong> 
                    (${sugestoes[0].significado})
                </div>
            `;
        }

        html += "</div>";
        lista.innerHTML += html;
        return;
    }

    /* CONSTRUÇÃO DOS CARDS DE CADA PALAVRA */
    palavras.forEach(item => {
        const card = document.createElement("div");
        card.className = "card-pronuncia";

        /* Áudio Path */
        const audioPath = item.audio || (item.audios && item.audios.nhandewa ? item.audios.nhandewa : "");

        /* Sentido e Falante */
        const sentido = item.sentido_de || item.sentido || "";
        const falante = item.falante || "";

        /* BLOCO DE EXEMPLOS PRÁTICOS */
        let blocoExemplos = "";
        if (item.exemplos && item.exemplos.length > 0) {
            blocoExemplos = `
                <div class="secao-bloco">
                    <h4 class="secao-titulo" style="font-size:15px; opacity:0.8; margin-bottom:10px;">
                        EXEMPLO(S) PRÁTICO(S)
                    </h4>
                    ${item.exemplos.map((ex, idx) => {
                        const trad = (item.traducao && item.traducao[idx]) ? item.traducao[idx] : "";
                        return `
                            <div style="margin-bottom:10px; background:rgba(0,0,0,0.20); padding:12px; border-radius:10px;">
                                <p style="margin:0; font-size:20px; line-height:1.5; color:#e67e22;">
                                    ${ex}
                                </p>
                                ${trad ? `
                                    <p style="margin:6px 0 0 0; opacity:0.9; font-size:16px; line-height:1.4;">
                                        👉 ${trad}
                                    </p>
                                ` : ""}
                            </div>
                        `;
                    }).join("")}
                </div>
            `;
        }

        /* BLOCO DE IMAGEM */
        const blocoImagem = item.imagem ? `
            <div class="card-foto" style="margin-top: 15px;">
                <img src="${item.imagem}" alt="${item.palavra}" class="foto-acao">
                ${item.legenda ? `<p>${item.legenda}</p>` : ""}
            </div>
        ` : "";

        /* CORPO INTEGRAL DO CARD */
        card.innerHTML = `
            <!-- PALAVRA -->
            <h2 class="palavra-titulo" style="font-size:32px; margin-bottom:6px;">
                ${item.palavra || "-"}
            </h2>

            <!-- CATEGORIA / TIPO -->
            <p style="font-size:15px; opacity:0.75; text-transform:capitalize; margin-bottom:14px;">
                ${item.tipo || item.categoria || "-"}
            </p>

            <!-- SIGNIFICADO -->
            <div class="secao-bloco">
                <h4 class="secao-titulo" style="font-size:15px; opacity:0.8; margin-bottom:6px;">
                    SIGNIFICADO
                </h4>
                <p style="font-size:20px; line-height:1.5; font-weight:600;">
                    ${item.significado || "-"}
                </p>
            </div>

            <!-- SENTIDO DE -->
            ${sentido ? `
                <div class="secao-bloco">
                    <h4 class="secao-titulo" style="font-size:15px; opacity:0.8; margin-bottom:6px;">
                        SENTIDO DE
                    </h4>
                    <p style="font-size:18px; line-height:1.5;">
                        ${sentido}
                    </p>
                </div>
            ` : ""}

            <!-- USO / FALANTE -->
            ${falante ? `
                <div class="secao-bloco">
                    <h4 class="secao-titulo" style="font-size:15px; opacity:0.8; margin-bottom:6px;">
                        USO / FALANTE
                    </h4>
                    <p style="font-size:18px; line-height:1.5;">
                        ${falante}
                    </p>
                </div>
            ` : ""}

            <!-- PRONÚNCIA NHANDEWA -->
            <div class="secao-bloco">
                <h4 class="secao-titulo" style="font-size:15px; opacity:0.8; margin-bottom:8px;">
                    PRONÚNCIA NHANDEWA
                </h4>
                <div style="display:flex; align-items:center; gap:12px; margin-top:6px;">
                    <button class="btn-play" onclick="tocarAudio('${audioPath}')">
                        ▶
                    </button>
                    <span style="font-size:16px;">
                        Ouvir áudio nativo
                    </span>
                </div>
            </div>

            <!-- EXEMPLOS -->
            ${blocoExemplos}

            <!-- IMAGEM -->
            ${blocoImagem}
        `;

        lista.appendChild(card);
    });
}


/* =====================================================
   7. BUSCA EM TEMPO REAL
===================================================== */

/**
 * Filtra as palavras do dicionário com base na consulta digitada
 * @param {string} valor 
 */
function executarBusca(valor) {
    const texto = valor.trim();

    if (texto === "") {
        location.reload();
        return;
    }

    if (typeof DICIONARIO === "undefined") {
        console.error("Variável DICIONARIO não encontrada.");
        return;
    }

    const busca = normalizar(texto);

    const resultado = DICIONARIO.filter(item => {
        const palavra = normalizar(item.palavra);
        const significado = normalizar(item.significado);
        const categoria = normalizar(item.categoria);

        const exemplos = (item.exemplos || []).some(ex =>
            normalizar(ex).includes(busca)
        );

        const trad = (item.traducao || []).some(tr =>
            normalizar(tr).includes(busca)
        );

        return (
            palavra.includes(busca) ||
            significado.includes(busca) ||
            categoria.includes(busca) ||
            exemplos ||
            trad
        );
    });

    mostrarPalavras(resultado.slice(0, 20));
}


/* =====================================================
   8. FILTRO POR CATEGORIA
===================================================== */

/**
 * Filtra e exibe o conjunto de palavras de uma determinada categoria
 * @param {string} nome - Nome da categoria
 */
function mostrarCategoria(nome) {
    if (typeof DICIONARIO === "undefined") {
        console.error("Variável DICIONARIO não encontrada.");
        return;
    }

    const categoriaBusca = normalizar(nome);

    const resultado = DICIONARIO.filter(item => {
        if (!item.categoria) return false;
        return normalizar(item.categoria).includes(categoriaBusca);
    });

    mostrarPalavras(resultado);
}


/* =====================================================
   9. MODAL DE ACESSO RESTRITO (GERAÇÃO E VALIDAÇÃO DE SENHA)
===================================================== */

/**
 * Gera a senha do dia automaticamente com base no calendário (Ex: KRM-2708)
 * Muda diariamente à meia-noite sem precisar alterar código.
 */
function obterSenhaDoDia() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    
    return `KRM-${dia}${mes}`;
}

function solicitarAcessoTabu() {
    const modal = document.getElementById("modal-senha");
    const input = document.getElementById("senha-input");

    if (!modal) {
        alert("Erro: O elemento #modal-senha não foi encontrado no HTML.");
        return;
    }

    modal.style.setProperty("display", "flex", "important");

    if (input) {
        input.value = "";
        setTimeout(() => input.focus(), 100);
    }
}

function fecharModal() {
    const modal = document.getElementById("modal-senha");
    if (modal) {
        modal.style.setProperty("display", "none", "important");
    }
}

function validarSenha() {
    const input = document.getElementById("senha-input");
    const senhaDigitada = input ? input.value.trim().toUpperCase() : "";
    
    // Obtém a senha gerada dinamicamente para o dia de hoje
    const senhaCorreta = obterSenhaDoDia();

    if (senhaDigitada === senhaCorreta) {
        fecharModal();
        mostrarCategoria("Linguagem de rua");
    } else {
        alert("Senha incorreta! Acesso restrito.");
        if (input) {
            input.value = "";
            input.focus();
        }
    }
}

/**
 * Abre o cliente de e-mail pré-preenchendo o pedido de acesso para o administrador
 */
function solicitarSenhaEmail() {
    const emailAdmin = "contato@projetokarumbe.org";
    const assunto = encodeURIComponent("Solicitação de Acesso - Linguagem de Rua (Projeto Karumbé)");
    const corpo = encodeURIComponent(
        "Olá,\n\nGostaria de solicitar a senha de acesso para a seção de pesquisa linguística 'Linguagem de Rua / Tabu Verbal' do Projeto Karumbé.\n\nMotivo/Instituição:\n\nAtenciosamente,"
    );

    window.location.href = `mailto:${emailAdmin}?subject=${assunto}&body=${corpo}`;
}

// Suporte para acionar o botão de confirmar apertando Enter no campo de senha
document.addEventListener("DOMContentLoaded", () => {
    const inputSenha = document.getElementById("senha-input");
    if (inputSenha) {
        inputSenha.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                validarSenha();
            }
        });
    }
});


/* =====================================================
   10. EVENTOS GLOBAIS (Exposição para o Escopo da Window)
===================================================== */

window.tocarAudio = tocarAudio;
window.mostrarCategoria = mostrarCategoria;
window.executarBusca = executarBusca;
window.voltarAoInicio = voltarAoInicio;
window.solicitarAcessoTabu = solicitarAcessoTabu;
window.fecharModal = fecharModal;
window.validarSenha = validarSenha;
window.solicitarSenhaEmail = solicitarSenhaEmail;
window.obterSenhaDoDia = obterSenhaDoDia;
