console.log("Script Karumbé Carregado e Atualizado!");

const lista = document.getElementById("lista");

/* =====================================================
1. ÁUDIO
===================================================== */
function tocarAudio(caminho, botaoElemento = null) {
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

    // Se o botão foi passado, tenta ativar a animação da onda sonora correspondente
    let ondaSonora = null;
    if (botaoElemento) {
        const blocoPai = botaoElemento.closest('.secao-bloco');
        if (blocoPai) {
            ondaSonora = blocoPai.querySelector('.container-onda-sonora');
            if (ondaSonora) ondaSonora.classList.add('ativo');
        }
    }

    audio.play().then(() => {
        audio.onended = function() {
            if (ondaSonora) ondaSonora.classList.remove('ativo');
        };
    }).catch(err => {
        console.warn("Erro ao tocar áudio:", err);
        alert("Não foi possível reproduzir o áudio.");
        if (ondaSonora) ondaSonora.classList.remove('ativo');
    });
}


/* =====================================================
2. NORMALIZAR TEXTO
===================================================== */
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
                    matriz[i - 1][j - 1] + 1,
                    matriz[i][j - 1] + 1,
                    matriz[i - 1][j] + 1
                );
            }
        }
    }

    return matriz[b.length][a.length];
}


/* =====================================================
4. BUSCA APROXIMADA / SUGESTÕES
===================================================== */
function buscaAproximada(texto) {
    const textoNorm = normalizar(texto);

    if (textoNorm.length < 3 || typeof DICIONARIO === "undefined") {
        return [];
    }

    return DICIONARIO.filter(item => {
        if (item.categoria && normalizar(item.categoria) === "linguagem de rua") {
            return false;
        }

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
function mostrarPalavras(palavras, ehRua = false) {
    const containerResultado = document.getElementById("resultado-busca");
    const avisoRua = document.getElementById("aviso-rua");
    const gridCategorias = document.querySelector(".lista-vertical");

    // Esconde a grade de categorias da home
    if (gridCategorias) gridCategorias.style.display = "none";

    if (containerResultado) containerResultado.style.display = "none";

    if (lista) {
        lista.style.display = "flex";
        lista.innerHTML = "";

        const voltar = document.createElement("button");
        voltar.className = "voltar";
        voltar.innerHTML = "⬅️ Voltar ao início";
        voltar.onclick = voltarAoInicio;
        lista.appendChild(voltar);

        // Se for linguagem de rua, insere o aviso logo abaixo do botão voltar
        if (ehRua && avisoRua) {
            avisoRua.style.display = "block";
            lista.appendChild(avisoRua);
        } else if (avisoRua) {
            avisoRua.style.display = "none";
        }

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

        renderizarCardsNoAlvo(palavras, lista);
    }
}


/**
* Função auxiliar para injetar os cards de termos
*/
function renderizarCardsNoAlvo(palavras, elementoAlvo) {
    palavras.forEach(item => {
        const card = document.createElement("div");
        card.className = "card-pronuncia";

        const audioPath = item.audio || (item.audios && item.audios.nhandewa ? item.audios.nhandewa : "");
        const sentido = item.sentido_de || item.sentido || "";
        const falante = item.falante || "";

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

        const blocoImagem = item.imagem ? `
            <div class="card-foto" style="margin-top: 15px;">
                <img src="${item.imagem}" alt="${item.palavra}" class="foto-acao">
                ${item.legenda ? `<p>${item.legenda}</p>` : ""}
            </div>
        ` : "";

        card.innerHTML = `
            <h2 class="palavra-titulo" style="font-size:32px; margin-bottom:6px;">
                ${item.palavra || "-"}
            </h2>

            <p style="font-size:15px; opacity:0.75; text-transform:capitalize; margin-bottom:14px;">
                ${item.tipo || item.categoria || "-"}
            </p>

            <div class="secao-bloco">
                <h4 class="secao-titulo" style="font-size:15px; opacity:0.8; margin-bottom:6px;">
                    SIGNIFICADO
                </h4>
                <p style="font-size:20px; line-height:1.5; font-weight:600;">
                    ${item.significado || "-"}
                </p>
            </div>

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

            <div class="secao-bloco">
                <h4 class="secao-titulo" style="font-size:15px; opacity:0.8; margin-bottom:8px;">
                    PRONÚNCIA NHANDEWA
                </h4>
                <div style="display:flex; align-items:center; gap:12px; margin-top:6px;">
                    <button class="btn-play" onclick="tocarAudio('${audioPath}', this)">
                        ▶
                    </button>
                    <span style="font-size:16px;">
                        Ouvir áudio nativo
                    </span>
                </div>
            </div>

            ${blocoExemplos}

            ${blocoImagem}
        `;

        elementoAlvo.appendChild(card);
    });
}


/* =====================================================
7. BUSCA EM TEMPO REAL
===================================================== */
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
        if (item.categoria && normalizar(item.categoria) === "linguagem de rua") {
            return false;
        }

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

    mostrarPalavras(resultado.slice(0, 20), false);
}


/* =====================================================
8. FILTRO POR CATEGORIA
===================================================== */
function mostrarCategoria(nome) {
    let baseDados = DICIONARIO;
    let ehRua = false;
    
    if (normalizar(nome).includes("rua") && typeof DICIONARIO_RUA !== "undefined") {
        baseDados = DICIONARIO_RUA.map(item => {
            const copia = { ...item };
            delete copia.audio; 
            return copia;
        });
        ehRua = true;
    }

    if (typeof baseDados === "undefined") {
        console.error("Nenhuma base de dicionário encontrada.");
        return;
    }

    if (ehRua) {
        mostrarPalavras(baseDados, true);
        return;
    }

    const categoriaBusca = normalizar(nome);
    const resultado = baseDados.filter(item => {
        if (!item.categoria) return false;
        return normalizar(item.categoria).includes(categoriaBusca);
    });

    mostrarPalavras(resultado, false);
}


/* =====================================================
9. MODAL DE ACESSO RESTRITO
===================================================== */
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

function solicitarSenhaEmail() {
    const emailAdmin = "projeto.karumbe.org@gmail.com";
    const assunto = encodeURIComponent("Solicitação de Acesso - Linguagem de Rua (Projeto Karumbé)");
    const corpo = encodeURIComponent(
        "Olá,\n\nGostaria de solicitar a senha de acesso para a seção de pesquisa linguística 'Linguagem de Rua / Tabu Verbal' do Projeto Karumbé.\n\nMotivo/Instituição:\n\nAtenciosamente,"
    );

    window.location.href = `mailto:${emailAdmin}?subject=${assunto}&body=${corpo}`;
}

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
10. EVENTOS GLOBAIS
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
