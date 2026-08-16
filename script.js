console.log("Script Karumbé Carregado e Atualizado!");

const lista = document.getElementById("lista");

/* =====================================================
   ÁUDIO
===================================================== */

function tocarAudio(caminho) {

    if (
        !caminho ||
        caminho === "" ||
        caminho === "undefined"
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
   NORMALIZAR TEXTO
===================================================== */

function normalizar(texto) {

    if (!texto) return "";

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


/* =====================================================
   LEVENSHTEIN
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

                matriz[i][j] =
                    matriz[i - 1][j - 1];

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
   BUSCA APROXIMADA
===================================================== */

function buscaAproximada(texto) {

    const textoNorm = normalizar(texto);

    if (textoNorm.length < 3) {
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
   VOLTAR AO INÍCIO
===================================================== */

function voltarAoInicio() {

    location.reload();

}


/* =====================================================
   MOSTRAR PALAVRAS
===================================================== */

function mostrarPalavras(palavras) {

    if (!lista) return;

    lista.innerHTML = "";


    /* BOTÃO VOLTAR */

    const voltar =
        document.createElement("button");

    voltar.className = "voltar";

    voltar.innerHTML =
        "⬅️ Voltar ao início";

    voltar.onclick =
        voltarAoInicio;

    lista.appendChild(voltar);


    /* NENHUM RESULTADO */

    if (
        !palavras ||
        palavras.length === 0
    ) {

        const inputBusca =
            document.getElementById("busca");

        const termoPesquisado =
            inputBusca
                ? inputBusca.value
                : "";

        const sugestoes =
            buscaAproximada(
                termoPesquisado
            );


        let html = `
            <div class="card-pronuncia">

                <h3 style="
                    font-size:22px;
                    margin-bottom:12px;
                ">
                    Nenhum resultado encontrado.
                </h3>
        `;


        if (sugestoes.length > 0) {

            html += `
                <div style="
                    margin-top:15px;
                    font-size:18px;
                ">

                    🔎 Você quis dizer:

                    <strong>
                        ${sugestoes[0].palavra}
                    </strong>

                    (${sugestoes[0].significado})

                </div>
            `;
        }


        html += "</div>";

        lista.innerHTML += html;

        return;
    }


    /* =================================================
       CADA PALAVRA
    ================================================= */

    palavras.forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            "card-pronuncia";


        /* ÁUDIO */

        const audioPath =
            item.audio ||
            (
                item.audios &&
                item.audios.nhandewa
                    ? item.audios.nhandewa
                    : ""
            );


        /* SENTIDO */

        const sentido =
            item.sentido_de ||
            item.sentido ||
            "";


        /* FALANTE */

        const falante =
            item.falante ||
            "";


        /* =================================================
           EXEMPLOS
        ================================================= */

        let blocoExemplos = "";


        if (
            item.exemplos &&
            item.exemplos.length > 0
        ) {

            blocoExemplos = `

                <div class="secao-bloco">

                    <h4 class="secao-titulo"
                        style="
                            font-size:15px;
                            opacity:0.8;
                            margin-bottom:10px;
                        ">

                        EXEMPLO(S) PRÁTICO(S)

                    </h4>


                    ${item.exemplos.map(
                        (ex, idx) => {

                            const trad =
                                (
                                    item.traducao &&
                                    item.traducao[idx]
                                )
                                ? item.traducao[idx]
                                : "";


                            return `

                                <div style="
                                    margin-bottom:10px;
                                    background:rgba(0,0,0,0.20);
                                    padding:12px;
                                    border-radius:10px;
                                ">

                                    <p style="
                                        margin:0;
                                        font-style:italic;
                                        font-size:18px;
                                        line-height:1.5;
                                    ">

                                        "${ex}"

                                    </p>


                                    ${
                                        trad
                                        ? `

                                            <p style="
                                                margin:6px 0 0 0;
                                                opacity:0.9;
                                                font-size:16px;
                                                line-height:1.4;
                                            ">

                                                👉 ${trad}

                                            </p>

                                        `
                                        : ""
                                    }

                                </div>

                            `;
                        }
                    ).join("")}

                </div>

            `;
        }


        /* =================================================
           IMAGEM
        ================================================= */

        const blocoImagem =
            item.imagem
            ? `

                <div style="
                    margin-top:15px;
                    border-radius:12px;
                    overflow:hidden;
                    max-height:280px;
                ">

                    <img
                        src="${item.imagem}"
                        alt="${item.palavra}"
                        style="
                            width:100%;
                            height:100%;
                            object-fit:cover;
                            display:block;
                        "
                    >

                </div>

            `
            : "";


        /* =================================================
           CARD COMPLETO
        ================================================= */

        card.innerHTML = `

            <!-- PALAVRA -->

            <h2
                class="palavra-titulo"
                style="
                    font-size:32px;
                    margin-bottom:6px;
                "
            >

                ${item.palavra || "-"}

            </h2>


            <!-- CATEGORIA -->

            <p style="
                font-size:15px;
                opacity:0.75;
                text-transform:capitalize;
                margin-bottom:14px;
            ">

                ${item.tipo || item.categoria || "-"}

            </p>


            <!-- SIGNIFICADO -->

            <div class="secao-bloco">

                <h4
                    class="secao-titulo"
                    style="
                        font-size:15px;
                        opacity:0.8;
                        margin-bottom:6px;
                    "
                >

                    SIGNIFICADO

                </h4>


                <p style="
                    font-size:20px;
                    line-height:1.5;
                    font-weight:600;
                ">

                    ${item.significado || "-"}

                </p>

            </div>


            <!-- SENTIDO DE -->

            ${
                sentido
                ? `

                    <div class="secao-bloco">

                        <h4
                            class="secao-titulo"
                            style="
                                font-size:15px;
                                opacity:0.8;
                                margin-bottom:6px;
                            "
                        >

                            SENTIDO DE

                        </h4>


                        <p style="
                            font-size:18px;
                            line-height:1.5;
                        ">

                            ${sentido}

                        </p>

                    </div>

                `
                : ""
            }


            <!-- USO / FALANTE -->

            ${
                falante
                ? `

                    <div class="secao-bloco">

                        <h4
                            class="secao-titulo"
                            style="
                                font-size:15px;
                                opacity:0.8;
                                margin-bottom:6px;
                            "
                        >

                            USO / FALANTE

                        </h4>


                        <p style="
                            font-size:18px;
                            line-height:1.5;
                        ">

                            ${falante}

                        </p>

                    </div>

                `
                : ""
            }


            <!-- PRONÚNCIA -->

            <div class="secao-bloco">

                <h4
                    class="secao-titulo"
                    style="
                        font-size:15px;
                        opacity:0.8;
                        margin-bottom:8px;
                    "
                >

                    PRONÚNCIA NHANDEWA

                </h4>


                <div style="
                    display:flex;
                    align-items:center;
                    gap:12px;
                    margin-top:6px;
                ">

                    <button
                        class="btn-play"
                        onclick="tocarAudio('${audioPath}')"
                    >

                        ▶

                    </button>


                    <span style="
                        font-size:16px;
                    ">

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
   BUSCA EM TEMPO REAL
===================================================== */

function executarBusca(valor) {

    const texto =
        valor.trim();


    if (texto === "") {

        location.reload();

        return;
    }


    const busca =
        normalizar(texto);


    const resultado =
        DICIONARIO.filter(item => {

            const palavra =
                normalizar(
                    item.palavra
                );


            const significado =
                normalizar(
                    item.significado
                );


            const categoria =
                normalizar(
                    item.categoria
                );


            const exemplos =
                (item.exemplos || [])
                .some(ex =>
                    normalizar(ex)
                    .includes(busca)
                );


            const trad =
                (item.traducao || [])
                .some(tr =>
                    normalizar(tr)
                    .includes(busca)
                );


            return (

                palavra.includes(busca) ||

                significado.includes(busca) ||

                categoria.includes(busca) ||

                exemplos ||

                trad

            );

        });


    mostrarPalavras(
        resultado.slice(0, 20)
    );
}


/* =====================================================
   FILTRO POR CATEGORIA
===================================================== */

function mostrarCategoria(nome) {

    const categoriaBusca =
        normalizar(nome);


    const resultado =
        DICIONARIO.filter(item => {

            if (!item.categoria) {
                return false;
            }


            return normalizar(
                item.categoria
            ).includes(
                categoriaBusca
            );

        });


    mostrarPalavras(resultado);
}


/* =====================================================
   EVENTOS GLOBAIS
===================================================== */

window.tocarAudio =
    tocarAudio;

window.mostrarCategoria =
    mostrarCategoria;

window.executarBusca =
    executarBusca;

window.voltarAoInicio =
    voltarAoInicio;