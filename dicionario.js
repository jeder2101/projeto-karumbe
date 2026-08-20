const DICIONARIO = [
    {
        palavra: "ko'ẽ porã",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Bom dia; amanhecer bonito.",
        audio: "assets/audios/koe_pora.mp3",
        imagem:"assets/svg/bom dia.jpg",
        sentido_de: "Saudação matinal ou amanhecer agradável",
        falante: "Uso geral",
        exemplos: [
            "Ko´ẽ porã! nderá eweri?",
            "Aiko porã! A'e ndee?",
            "Aiko pkrã awei!"
        ],
        traducao: [
            "Bom dia! Como você está?",
            "Estou bem! E você?",
            "Estou bem, também!"
        ]
    },
    {
        palavra: "Ka'aru porã",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Boa tarde.",
        audio: "assets/audios/kaaru_pora.mp3",
        imagem:"assets/svg/boa tarde.jpg",
        sentido_de: "Saudação para o período da tarde",
        falante: "Uso geral",
        exemplos: [
            "Ka'aru porã!",
            "Ka'aru porã! Nderá eweri?",
            "Aiko porã! A'e ndee?",
            "Aiko porã! Awei."
        ],
        traducao: [
            "Boa tarde!",
            "Boa tarde! Como você está?",
            "Estou bem! E você?",
            "Estou bem! Eu também."
        ]
    },
    {
        palavra: "Pỹtũ porã",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Boa noite.",
        audio: "assets/audios/pytu_pora.mp3",
        imagem:"assets/svg/boa noite.jpg",
        sentido_de: "Saudação para o período da noite",
        falante: "Uso geral",
        exemplos: [
            "Pỹtũ porã!",
            "Pỹtũ porã! Maraĩ pereiko?",
            "Roiko porã! Ha peẽ ",
            "Roiko porã Awei!."
        ],
        traducao: [
            "Boa noite!",
            "Boa noite!vocês estão bem?",
            "Estamos bem! E vocês?",
            "Estamos bem também!"
        ]
    },
    {
        palavra: "Ã / E'ã",
        tipo: "substantivo",
        categoria: "Natureza",
        significado: "Sombra.",
        audio: "assets/audios/a_ea.mp3",
        imagem:"assets/svg/sombra.jpg",
        sentido_de: "Sombra projetada por árvores, objetos ou corpo",
        falante: "Uso geral",
        exemplos: [
            "Aetxa ywyra ã.",
            "E'ã oĩ tape rupi.",
            "Ã tuwitxa.",
            "Ã oĩ y-py."
        ],
        traducao: [
            "Vejo a sombra da árvore.",
            "A sombra está no caminho.",
            "A sombra é grande.",
            "A sombra está na água."
        ]
    },
    {
        palavra: "A'agá",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Experimentar.",
        audio: "assets/audios/aaga.mp3",
        imagem: "assets/svg/experimentar.jpg",
        sentido_de: "Provar alimento, testar ou experimentar algo",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Aatá a'agá tembi'u.",
            "A'agá kowa.",
            "Rea'agá tembi'u?",
            "A'agá porã."
        ],
        traducao: [
            "Eu vou experimentar a comida.",
            "Experimente isto.",
            "Você experimentou a comida?",
            "Experimente bem."
        ]
    },
    {
        palavra: "A'e",
        tipo: "pronome",
        categoria: "Pronomes",
        significado: "Ele; ela.",
        audio: "assets/audios/ae.mp3",
        imagem: "assets/svg/ele.jpg",
        sentido_de: "Pronome demonstrativo/pessoal de 3ª pessoa",
        falante: "Uso geral",
        exemplos: [
            "A'e oiko apy.",
            "A'e ou.",
            "A'e ogwatá.",
            "A'e ombo'e."
        ],
        traducao: [
            "Ele/ela está aqui.",
            "Ele/ela comeu.",
            "Ele/ela caminha.",
            "Ele/ela ensina."
        ]
    },
    {
        palavra: "Aagwé",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Onde fui.",
        audio: "assets/audios/aagwe.mp3",
        imagem: "assets/svg/onde fui.jpg",
        sentido_de: "Ação de deslocamento no passado / local visitado",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Mamõ aagwé?",
            "Aagwé tekoa-py.",
            "Aagwé txeróga-py.",
            "Aagwé nhandé-rewé."
        ],
        traducao: [
            "Onde fui?",
            "Fui para a aldeia.",
            "Fui para minha casa.",
            "Fui com nós."
        ]
    },
    {
        palavra: "Áama",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Já fui; já estou indo.",
        audio: "assets/audios/aama.mp3",
        imagem:"assets/svg/ja fui.jpg",
        sentido_de: "Despedida rápida ou aviso de saída imediata",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Áama.",
            "Áama tekoa-py.",
            "Áama txeróga-py.",
            "Áama nde-rewé."
        ],
        traducao: [
            "Já fui.",
            "Já estou indo para a aldeia.",
            "Já estou indo para minha casa.",
            "Já estou indo com você."
        ]
    },
    {
        palavra: "Adiwyma",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Vou embora,tchau.",
        audio: "assets/audios/adiwyma.mp3",
        imagem:"assets/svg/tchau.jpg",
        sentido_de: "Aviso de partida ou retorno para casa",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Adiwyma.",
            "Adiwyma tekoa-py.",
            "Adiwyma txeróga-py.",
            "Adiwyma. Pỹtũ porã!"
        ],
        traducao: [
            "Vou embora.",
            "Vou embora para a aldeia.",
            "Vou embora para minha casa.",
            "Vou embora. Boa noite!"
        ]
    },
    {
        palavra: "Adjaiá",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Cortar.",
        audio: "assets/audios/adjaia.mp3",
        imagem:"assets/svg/cortar.jpg",
        sentido_de: "Ação de cortar madeira, carne ou objetos",
        falante: "Uso geral",
        exemplos: [
            "Adjaiá djape'a.",
            "Txe adjaiá o'okwe'.",
            "Aatá adjaiá ywyra.",
            "Ndereo adjaiá ywyra?"
        ],
        traducao: [
            "Cortar lenha.",
            "Eu corto a carne.",
            "Eu vou cortar a árvore.",
            "Você vai cortar a árvore?"
        ]
    },
    {
        palavra: "Adjapo",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu faço / eu realizo / eu construo.",
        audio: "assets/audios/adjapo.mp3",
        imagem:"assets/svg/eu faco.jpg",
        sentido_de: "Ação concluída de fazer, construir ou criar algo",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Adjapo.",
            "Adjapo kwatia.",
            "Adjapo oga.",
            "Adjapo porã."
        ],
        traducao: [
            "Eu faço.",
            "Eu faço a escrita (ou o documento).",
            "Eu faço a casa.",
            "Eu faço bem."
        ]
    },
    {
        palavra: "Adjapomá",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Já fiz ; já realizei; já construí.",
        audio: "assets/audios/adjapoma.mp3",
        imagem:"assets/svg/terminei.jpg",
        sentido_de: "Trabalho ou tarefa recém-concluída",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Adjapomá.",
            "Adjapomá kwatia.",
            "Adjapomá oga.",
            "Adjapomá mbawyky."
        ],
        traducao: [
            "Já terminei.",
            "Já terminei a escrita (ou o documento).",
            "Já acabei de fazer a casa.",
            "Já terminei de fazer o trabalho."
        ]
    },
    {
        palavra: "Adjú",
        tipo: "verbo",
        categoria:"Verbos",
        significado:"Eu venho ; estou vindo ; vim.",
        audio: "assets/audios/adju.mp3",
        imagem:"assets/svg/eu venho.jpg",
        sentido_de: "Chegada de um local até onde se fala",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Txe adjú.",
            "Txe adjú tekoa karugwá-gwi.",
            "Txe adjú nde-rewé.",
            "Txe adjú apy."
        ],
        traducao: [
            "Eu venho.",
            "Estou vindo da aldeia karugwá.",
            "Eu vim com você.",
            "Eu vim aqui."
        ]
    },
    {
        palavra: "Adju'i",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Vontade.",
        audio: "assets/audios/adjui.mp3",
        sentido_de: "Desejo de comer, falar, caminhar ou realizar algo",
        falante: "Uso geral",
        exemplos: [
            "Txe areko adju'i.",
            "Ndereko adju'i karu.",
            "Areko adju'i aiywú.",
            "Areko adju'i agwatá."
        ],
        traducao: [
            "Eu tenho vontade.",
            "Você tem vontade de comer.",
            "Tenho vontade de falar.",
            "Tenho vontade de caminhar."
        ]
    },
    {
        palavra: "Adjuka",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu mato.",
        audio: "assets/audios/adjuka.mp3",
        sentido_de: "Ação de matar peixe, cobra ou animais",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Adjuka pira.",
            "Adjuka mboi.",
            "Adjuka angudjá.",
            "Adjuka anhã."
        ],
        traducao: [
            "Eu mato o peixe.",
            "Eu mato a cobra.",
            "Eu mato o rato.",
            "Eu mato o diabo."
        ]
    },
 
        {
        palavra: "Nembawa'ekwe",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Lembrança; recordação; passado.",
        audio: "assets/audios/nembawaekwe.mp3",
        sentido_de: "Recordação de tempos passados ou tradições",
        falante: "Uso geral",
        exemplos: [
            "Areko nembawa'ekwe porã.",
            "Nembawa'ekwe oĩ txe-korantsu-pe.",
            "Ndaipotari kowá nembawa'ekwe."
        ],
        traducao: [
            "Tenho uma boa lembrança.",
            "A recordação está no meu coração/mente.",
            "Não quero esta lembrança."
        ]
    },
        {
        palavra: "Adjuma",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Já vim.",
        audio: "assets/audios/adjuma.mp3",
        sentido_de: "Ação de chegar ou retornar recém-concluída",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Adjuma.",
            "Adjuma tekoa-gwi.",
            "Adjuma nde-rewé.",
            "Adjuma apy."
        ],
        traducao: [
            "Já vim.",
            "Já vim da aldeia.",
            "Já vim com você.",
            "Já vim aqui."
        ]
    },
    {
        palavra: "Aẽri",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "É igual.",
        audio: "assets/audios/aeri.mp3",
        sentido_de: "Comparação de semelhança entre coisas ou objetos",
        falante: "Uso geral",
        exemplos: [
            "Aẽri.",
            "Kowa aẽri.",
            "Aẽri kowa.",
            "Aẽri nde mbo'y'."
        ],
        traducao: [
            "É igual.",
            "Isto é igual.",
            "É igual a isto.",
            "É igual o seu colar."
        ]
    },
    {
        palavra: "Aetxa",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu vejo.",
        audio: "assets/audios/aetxa.mp3",
        sentido_de: "Ação de enxergar ou observar algo/alguém",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Aetxa nde.",
            "Aetxa ywyra.",
            "Aetxa txesy.",
            "Aetxa ã."
        ],
        traducao: [
            "Eu vejo você.",
            "Eu vejo a árvore.",
            "Eu vejo minha mãe.",
            "Eu vejo a sombra."
        ]
    },
    {
        palavra: "Aéwa",
        tipo: "pronome",
        categoria: "Pronomes",
        significado: "Aquilo.",
        audio: "assets/audios/aewa.mp3",
        sentido_de: "Pronome demonstrativo para objetos distantes",
        falante: "Uso geral",
        exemplos: [
            "Aéwa peteĩ ywyra.",
            "Aéwa kowá óga-py.",
            "Aéwa peteĩ ã porã."
        ],
        traducao: [
            "Aquilo é uma árvore.",
            "Aquilo está na casa.",
            "Aquilo é uma sombra boa."
        ]
    },
    {
        palavra: "Akoiwa",
        tipo: "pronome",
        categoria: "Pronomes",
        significado: "Aquele / Aquela.",
        audio: "assets/audios/akoiwa.mp3",
        sentido_de: "Pronome demonstrativo para pessoas, animais ou coisas afastadas",
        falante: "Uso geral",
        exemplos: [
            "Akoiwa awa.",
            "Akoiwa kawaru.",
            "Akoiwa txesy."
        ],
        traducao: [
            "Aquele é uma pessoa.",
            "Aquele é um cavalo.",
            "Aquela é minha mãe."
        ]
    },
    {
        palavra: "Aewe",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Assim seja. / Amém. / Está certo.",
        audio: "assets/audios/aewe.mp3",
        sentido_de: "Afirmação, concordância ou encerramento espiritual/religioso",
        falante: "Uso geral",
        exemplos: [
            "Aewe.",
            "Aewe Nhanderu.",
            "Aewe tikorantsu.",
            "Aewe nde aiywú."
        ],
        traducao: [
            "Assim seja. / Amém.",
            "Amém, Deus.",
            "Assim seja no meu coração.",
            "Está certo sua palavra."
        ]
    },
    {
        palavra: "Angudjá",
        tipo: "substantivo",
        categoria: "Animais",
        significado: "Rato.",
        audio: "assets/audios/angudja.mp3",
        sentido_de: "Nome do animal (roedor)",
        falante: "Uso geral",
        exemplos: [
            "Angudjá oiko óga-py.",
            "Aetxa angudjá.",
            "Akoiwa angudjá."
        ],
        traducao: [
            "O rato vive na casa.",
            "Eu vejo o rato.",
            "Aquele é o rato."
        ]
    },
    {
        palavra: "Gwará",
        tipo: "substantivo",
        categoria: "Animais",
        significado: "Lobo.",
        audio: "assets/audios/gwara.mp3",
        sentido_de: "Nome do animal silvestre",
        falante: "Uso geral",
        exemplos: [
            "Gwará oiko ka'agwy-py.",
            "Aetxa gwará.",
            "Akoiwa gwará."
        ],
        traducao: [
            "O lobo vive na mata.",
            "Eu vejo o lobo.",
            "Aquele é o lobo."
        ]
    },
    {
        palavra: "Agwata",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu ando; eu caminho.",
        audio: "assets/audios/agwata.mp3",
        sentido_de: "Ação de locomover-se a pé",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Agwata tape-py.",
            "Agwata tekoa-py.",
            "Agwata ka'agwy-rupi.",
            "Agwata nde-rewé."
        ],
        traducao: [
            "Eu caminho no caminho.",
            "Eu ando na aldeia.",
            "Eu caminho pela mata.",
            "Eu caminho com você."
        ]
    },
    {
        palavra: "Agwé",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Onde fui.",
        audio: "assets/audios/agwe.mp3",
        sentido_de: "Indicação de local visitado ou deslocamento no passado",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Mamõ agwé?",
            "Agwé tekoa-py.",
            "Agwé txeróga-py.",
            "Agwé nde-rewé."
        ],
        traducao: [
            "Onde fui?",
            "Fui para a aldeia.",
            "Fui para minha casa.",
            "Fui com você."
        ]
    },
    {
        palavra: "Ai",
        tipo: "adjetivo",
        categoria: "Expressões",
        significado: "Azedo.",
        audio: "assets/audios/ai.mp3",
        sentido_de: "Qualidade do sabor de frutas ou alimentos",
        falante: "Uso geral",
        exemplos: [
            "Ai ywyra'á'.",
            "Ko narã ai.",
            "Aetxa ywyra'á'ai.",
            "Ywyra´a ndaekoi ai."
        ],
        traducao: [
            "A fruta é azeda.",
            "Esta fruta é azeda.",
            "Eu vejo a fruta azeda.",
            "A fruta não está azeda."
        ]
    },
    {
        palavra: "Raĩ",
        tipo: "substantivo",
        categoria: "Corpo humano",
        significado: "Dente.",
        audio: "assets/audios/rai.mp3",
        sentido_de: "Parte da anatomia bucal",
        falante: "Uso geral",
        exemplos: [
            "Areko raĩ.",
            "Aetxa txeraĩ.",
            "txeru reko raĩ.",
            "Raĩ iporã."
        ],
        traducao: [
            "Eu tenho dente.",
            "Eu vejo meu dente.",
            "Meu pai tem dente.",
            "O dente é bonito."
        ]
    },
    {
        palavra: "Aiko",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu vivo; eu estou.",
        audio: "assets/audios/aiko.mp3",
        sentido_de: "Estado de estar, residir ou viver em algum lugar",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Aiko tekoa-py.",
            "Aiko txeróga-py.",
            "Aiko porã.",
            "Aiko apy."
        ],
        traducao: [
            "Eu vivo na aldeia.",
            "Eu estou na minha casa.",
            "Eu estou bem.",
            "Eu estou aqui."
        ]
    },
    {
        palavra: "Aikwaa",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu sei.",
        audio: "assets/audios/aikwaa.mp3",
        sentido_de: "Possuir conhecimento, saber fazer ou conhecer algo/alguém",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Aikwaa nde.",
            "Aikwaa aiywú.",
            "Aikwaa tape.",
            "Aikwaa porã."
        ],
        traducao: [
            "Eu conheço você.",
            "Eu sei falar.",
            "Eu conheço o caminho.",
            "Eu sei bem."
        ]
    },
    {
        palavra: "Aipota",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu quero; eu desejo.",
        audio: "assets/audios/aipota.mp3",
        sentido_de: "Desejo, vontade ou intenção de obter algo",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Aipota tembi'u.",
            "Aipota y.",
            "Aipota agwata.",
            "Aipota nde-rewé."
        ],
        traducao: [
            "Eu quero comida.",
            "Eu quero água.",
            "Eu quero caminhar.",
            "Eu quero ir com você."
        ]
    },
    {
        palavra: "Awy'a",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu gosto; eu me alegro; eu estou feliz.",
        audio: "assets/audios/awya.mp3",
        sentido_de: "Sentimento de felicidade, alegria ou satisfação",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Awy'a nde-rewé.",
            "Awy'a agwata.",
            "Awy'a tekoa-py.",
            "Awy'a porã-ete."
        ],
        traducao: [
            "Eu gosto de estar com você.",
            "Eu gosto de caminhar.",
            "Eu me alegro na aldeia.",
            "Eu estou muito feliz."
        ]
    },
    {
        palavra: "Aiywú",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu falo.",
        audio: "assets/audios/aiywu.mp3",
        sentido_de: "Ação de se comunicar verbalmente ou expressar fala",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Aiywú Nhandewa.",
            "Aiywú nde-rewé.",
            "Aiywú porã.",
            "Aiywú a'e ndive."
        ],
        traducao: [
            "Eu falo Nhandewa.",
            "Eu falo com você.",
            "Eu falo bem.",
            "Eu falo com ele/ela."
        ]
    },
    {
        palavra: "Ãkã",
        tipo: "substantivo",
        categoria: "Corpo humano",
        significado: "Cabeça.",
        audio: "assets/audios/aka.mp3",
        sentido_de: "Parte superior da anatomia do corpo humano",
        falante: "Uso geral",
        exemplos: [
            "Txeãkã.",
            "Aetxa neãkã.",
            "Ãkã tuwitxa.",
            "Txeãkã naporãi."
        ],
        traducao: [
            "Minha cabeça.",
            "Eu vejo sua cabeça.",
            "Cabeça grande.",
            "Minha cabeça não está bem."
        ]
    },
    {
        palavra: "Aka'ẽ",
        tipo: "substantivo",
        categoria: "Animais",
        significado: "Gralha.",
        audio: "assets/audios/akae.mp3",
        sentido_de: "Nome da ave",
        falante: "Uso geral",
        exemplos: [
            "Aka'ẽ owewé.",
            "Aetxa aka'ẽ.",
            "Aka'ẽ oiko ka'agwy-py.",
            "Akoiwa aka'ẽ."
        ],
        traducao: [
            "A gralha voa.",
            "Eu vejo a gralha.",
            "A gralha vive na mata.",
            "Aquela é uma gralha."
        ]
    },
    {
        palavra: "Akara",
        tipo: "substantivo",
        categoria: "Animais",
        significado: "Peixe (de água doce).",
        audio: "assets/audios/akara.mp3",
        sentido_de: "Nome de peixe dulcícola (cará)",
        falante: "Uso geral",
        exemplos: [
            "Akara oiko y-py.",
            "Aetxa akara.",
            "Adjuka akara.",
            "Akoiwa akara."
        ],
        traducao: [
            "O peixe vive na água.",
            "Eu vejo o peixe.",
            "Eu mato o peixe.",
            "Aquele é um peixe."
        ]
    },
    {
        palavra: "Akaru",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu como.",
        audio: "assets/audios/akaru.mp3",
        sentido_de: "Ação de se alimentar",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Akaru tembi'u.",
            "Akaru akara.",
            "Akaru awati.",
            "Akaru porã."
        ],
        traducao: [
            "Eu como comida.",
            "Eu como peixe.",
            "Eu como milho.",
            "Eu como bem."
        ]
    },
    {
        palavra: "Akaruma",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Já comi.",
        audio: "assets/audios/akaruma.mp3",
        sentido_de: "Ação de refeição concluída",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Akaruma.",
            "Akaruma tembi'u.",
            "Akaruma akara.",
            "Akaruma awati."
        ],
        traducao: [
            "Já comi.",
            "Já comi a comida.",
            "Já comi peixe.",
            "Já comi milho."
        ]
    },
    {
        palavra: "Aku",
        tipo: "adjetivo",
        categoria: "Expressões",
        significado: "Quente",
        audio: "assets/audios/aku.mp3",
        sentido_de: "Temperatura elevada de alimentos, água, fogo ou clima",
        falante: "Uso geral",
        exemplos: [
            "Y ko aku.",
            "Tata ko aku.",
            "Tembi'u ko aku.",
            "Arý aku oĩ."
        ],
        traducao: [
            "Esta água está quente.",
            "O fogo está quente.",
            "Esta comida está quente.",
            "O dia está quente."
        ]
    },
    {
        palavra: "Akuti",
        tipo: "substantivo",
        categoria: "Animais",
        significado: "Cutia.",
        audio: "assets/audios/akuti.mp3",
        sentido_de: "Nome de pequeno roedor silvestre",
        falante: "Uso geral",
        exemplos: [
            "Akuti oiko ka'agwy-py.",
            "Aetxa akuti.",
            "Akoiwa akuti.",
            "Adjuka akuti."
        ],
        traducao: [
            "A cutia vive na mata.",
            "Eu vejo a cutia.",
            "Aquela é uma cutia.",
            "Eu mato a cutia."
        ]
    },
    {
        palavra: "Akudje",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu tenho medo.",
        audio: "assets/audios/akudje.mp3",
        sentido_de: "Sentimento de temor, receio ou susto",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Akudje ka'agwy-py.",
            "Akudje pytũ-py.",
            "Marũ pytũ, akudje.",
            "Marũ aiko anhõ, akudje."
        ],
        traducao: [
            "Eu tenho medo na mata.",
            "Eu tenho medo à noite.",
            "Quando é noite, eu tenho medo.",
            "Quando estou sozinho, eu tenho medo."
        ]
    },
    {
        palavra: "Amaẽ",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu chego.",
        audio: "assets/audios/amae.mp3",
        sentido_de: "Ação de atingir um destino ou lugar",
        falante: "1ª pessoa (Eu)",
        exemplos: [
            "Amaẽ tekoa-pe.",
            "Amaẽ óga-pe.",
            "Amaẽ apy.",
            "Amaẽ ka'agwy-pe."
        ],
        traducao: [
            "Eu chego à aldeia.",
            "Eu chego à casa.",
            "Eu chego aqui.",
            "Eu chego à mata."
        ]
    },
    {
        palavra: "Amboe",
        tipo: "pronome",
        categoria: "Pronomes",
        significado: "Outro; outra.",
        audio: "assets/audios/amboe.mp3",
        sentido_de: "Referência a elemento diferente ou adicional",
        falante: "Uso geral",
        exemplos: [
            "Amboe óga.",
            "Amboe tekoa-pe agwata.",
            "Aipota amboe tembi'u.",
            "Aetxa amboe akara."
        ],
        traducao: [
            "Outra casa.",
            "Eu caminho para outra aldeia.",
            "Eu quero outra comida.",
            "Eu vejo outro peixe."
        ]
    },
    {
        palavra: "Ambota",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu prego; eu fixo.",
        audio: "assets/audios/ambota.mp3",
        sentido_de: "Ação de fixar, pregar ou pregar algo em uma superfície",
        falante: "Uso geral (1ª pessoa)",
        exemplos: [
            "Ambota óga-py.",
            "Ambota ywyra-re.",
            "Ambota õké-re.",
            "Adjapo rire, ambota."
        ],
        traducao: [
            "Eu prego na casa.",
            "Eu prego na madeira.",
            "Eu prego na porta.",
            "Depois de fazer, eu prego."
        ]
    },
    {
        palavra: "Ambowera",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu dou brilho; eu lustro.",
        audio: "assets/audios/ambowera.mp3",
        sentido_de: "Ação de polir, lustrar ou fazer algo brilhar",
        falante: "Uso geral (1ª pessoa)",
        exemplos: [
            "Ambowera adjaka.",
            "Ambowera okẽ.",
            "Ambowera óga-py mba'e.",
            "Ambowera porã."
        ],
        traducao: [
            "Eu lustro o cesto.",
            "Eu dou brilho à porta.",
            "Eu lustro um objeto na casa.",
            "Eu lustro bem."
        ]
    },
    {
        palavra: "Anyiry",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Não.",
        audio: "assets/audios/anyiry.mp3",
        sentido_de: "Partícula de negação direta",
        falante: "Uso geral",
        exemplos: [
            "Anyiry, aipota.",
            "Anyiry, agwata.",
            "Anyiry, akaru.",
            "Anyiry, amaẽ."
        ],
        traducao: [
            "Não, eu quero.",
            "Não, eu caminho.",
            "Não, eu como.",
            "Não, eu chego."
        ]
    },
    {
        palavra: "Angapy yiry",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Preocupar-se; ficar preocupado.",
        audio: "assets/audios/angapy_yiry.mp3",
        sentido_de: "Estado ou sentimento de apreensão/preocupação",
        falante: "Uso geral",
        exemplos: [
            "Txesy angapy'yiry.",
            "Gwa'y kowá angapy'yiry.",
            "Marũ ndipoiry tembi'u, angapy'yiry.",
            "Angapy'yiry óga-py."
        ],
        traducao: [
            "Minha mãe está preocupada.",
            "O filho está preocupado.",
            "Quando não há comida, fico preocupado.",
            "Fico preocupado em casa."
        ]
    },
    {
        palavra: "Anhã",
        tipo: "substantivo",
        categoria: "Expressões",
        significado: "Diabo.",
        audio: "assets/audios/anha.mp3",
        sentido_de: "Entidade ou figura espiritual maligna",
        falante: "Uso geral",
        exemplos: [
            "Akudje anhã.",
            "Anhã ndaekoi óga-py.",
            "Ndaetxa anhã.",
            "Ndapotairy etxa anhã."
        ],
        traducao: [
            "Eu tenho medo do diabo.",
            "O diabo não está na casa.",
            "Eu não vejo o diabo.",
            "Eu não quero ver o diabo."
        ]
    },
    {
        palavra: "Anhõ",
        tipo: "advérbio",
        categoria: "Expressões",
        significado: "Sozinho; só.",
        audio: "assets/audios/anho.mp3",
        sentido_de: "Estado de estar a sós ou isolado",
        falante: "Uso geral",
        exemplos: [
            "Txe aiko anhõ.",
            "Aiko anhõ óga-py.",
            "Agwata anhõ.",
            "Aiko anhõ."
        ],
        traducao: [
            "Eu estou sozinho.",
            "Eu vivo sozinho na casa.",
            "Eu caminho sozinho.",
            "Estou sozinho."
        ]
    },
    {
        palavra: "Animbo'é",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu aprendo.",
        audio: "assets/audios/animboe.mp3",
        sentido_de: "Processo de aprendizado ou estudo",
        falante: "Uso geral (1ª pessoa)",
        exemplos: [
            "Animbo'é Nhandewa nhe'ẽ.",
            "Animbo'é txesy-rewé.",
            "Animbo'é nimboe'aty-py.",
            "Animbo'é txerenda-py."
        ],
        traducao: [
            "Eu aprendo a língua Nhandewa.",
            "Eu aprendo com minha mãe.",
            "Eu aprendo na escola.",
            "Eu aprendo na minha casa."
        ]
    },
    {
        palavra: "Pẽkũ",
        tipo: "substantivo",
        categoria: "Corpo humano",
        significado: "Língua.",
        audio: "assets/audios/peku.mp3",
        sentido_de: "Órgão anatômico da boca ou idioma/fala",
        falante: "Uso geral",
        exemplos: [
            "Pekũ oĩ txedjuru-py.",
            "Animbo'é Nhandewa pẽkũ.",
            "Aiywú djuru-re, pẽkũ-rewé awei..",
            "Pẽkũ porã."
        ],
        traducao: [
            "Minha língua está na minha boca.",
            "Eu aprendo a língua Nhandewa.",
            "Eu falo pela boca, com a língua também.",
            "Língua bonita."
        ]
    },
    {
        palavra: "Apitxa",
        tipo: "substantivo",
        categoria: "Expressões",
        significado: "Amigo; companheiro.",
        audio: "assets/audios/apitxa.mp3",
        sentido_de: "Relação de amizade ou companheirismo",
        falante: "Uso geral",
        exemplos: [
            "Apitxa!",
            "Aetxa txe apitxa.",
            "Agwata txe apitxa-rewé.",
            "Txe apitxa oiko apy."
        ],
        traducao: [
            "Amigo!",
            "Eu vejo meu amigo.",
            "Eu caminho com meu amigo.",
            "Meu amigo está aqui."
        ]
    },
    {
        palavra: "Irũ",
        tipo: "substantivo",
        categoria: "Expressões",
        significado: "Amigo; companheiro; acompanhante.",
        audio: "assets/audios/iru.mp3",
        sentido_de: "Aquele que acompanha ou companheiro habitual",
        falante: "Uso geral",
        exemplos: [
            "Txe irũ.",
            "Agwata txe irũ-ndive.",
            "Aetxa txe irũ.",
            "Aiko txe irũ-rewé."
        ],
        traducao: [
            "Meu amigo.",
            "Eu caminho com meu amigo.",
            "Eu vejo meu amigo.",
            "Eu estou com meu amigo."
        ]
    },
    {
        palavra: "Apy",
        tipo: "advérbio",
        categoria: "Localização",
        significado: "Aqui / neste lugar (indica localização espacial estática ou próxima ao falante).",
        audio: "assets/audios/apy.mp3",
        sentido_de: "Indicação de localização espacial estática e próxima ao falante",
        falante: "Uso geral",
        exemplos: [
            "Aiko apy.",
            "A'e oiko apy.",
            "Amaẽ apy.",
            "Txe adjú apy."
        ],
        traducao: [
            "Eu estou aqui.",
            "Ele/ela está aqui.",
            "Eu chego aqui.",
            "Eu vim aqui."
        ]
    },
    {
        palavra: "Apykatsu",
        tipo: "substantivo",
        categoria: "Animais",
        significado: "Pombo.",
        audio: "assets/audios/apykatsu.mp3",
        sentido_de: "Referência à ave (pombo)",
        falante: "Uso geral",
        exemplos: [
            "Apykatsu owewé.",
            "Aetxa apykatsu.",
            "Apykatsu oiko ywyra-re.",
            "Akoiwa apykatsu."
        ],
        traducao: [
            "O pombo voa.",
            "Eu vejo o pombo.",
            "O pombo está na árvore.",
            "Aquele é um pombo."
        ]
    },
    {
        palavra: "Apyré",
        tipo: "substantivo",
        categoria: "Expressões",
        significado: "Fim; final.",
        audio: "assets/audios/apyre.mp3",
        sentido_de: "Término, extremidade ou término de algo",
        falante: "Uso geral",
        exemplos: [
            "Tape apyré.",
            "Aetxa apyré.",
            "Kowá apyré.",
            "Apyré-pe amaẽ."
        ],
        traducao: [
            "Fim do caminho.",
            "Eu vejo o final.",
            "Este é o fim.",
            "Cheguei ao fim."
        ]
    },
    {
        palavra: "Gweraá",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Leva; levar.",
        audio: "assets/audios/gweraa.mp3",
        sentido_de: "Ação de transportar ou levar algo/alguém a um lugar",
        falante: "Uso geral",
        exemplos: [
            "Agweraá tembi'u.",
            "A'e ogweraá adjaka.",
            "Agweraá nde-rewé.",
            "Agweraá óga-pe."
        ],
        traducao: [
            "Eu levo a comida.",
            "Ele/ela leva o cesto.",
            "Eu levo você.",
            "Eu levo para casa."
        ]
    },
    {
        palavra: "Aragwydje",
        tipo: "substantivo",
        categoria: "Expressões",
        significado: "Ano.",
        audio: "assets/audios/aragwydje.mp3",
        sentido_de: "Medida de tempo anual ou ciclo temporal",
        falante: "Uso geral",
        exemplos: [
            "Peteĩ aragwydje.",
            "Kowá aragwydje-py.",
            "Aragwydje pyahu.",
            "Amboe aragwydje-pe."
        ],
        traducao: [
            "Um ano.",
            "Neste ano.",
            "Ano novo.",
            "No outro ano."
        ]
    },
    {
        palavra: "Arai",
        tipo: "substantivo",
        categoria: "Natureza",
        significado: "Nuvem.",
        audio: "assets/audios/arai.mp3",
        sentido_de: "Elemento da natureza / meteorológico",
        falante: "Uso geral",
        exemplos: [
            "Aetxa arai.",
            "Arai oĩ aryrei-pe.",
            "Arai tuwitxa.",
            "Arai ũ´ũ."
        ],
        traducao: [
            "Eu vejo a nuvem.",
            "A nuvem está no céu.",
            "A nuvem é grande.",
            "Nuvem escura (preta)."
        ]
    },
    {
        palavra: "Arãi",
        tipo: "advérbio",
        categoria: "Expressões",
        significado: "Assim; desse jeito.",
        audio: "assets/audios/arai_adv.mp3",
        sentido_de: "Modo ou maneira como algo é feito",
        falante: "Uso geral",
        exemplos: [
            "Arãi adjapo.",
            "Arãi oĩ.",
            "Arãi aiywú.",
            "Arãi porã."
        ],
        traducao: [
            "Assim eu fiz.",
            "É assim.",
            "Assim eu falo.",
            "Assim é bom."
        ]
    },
    {
        palavra: "Õkõre",
        tipo: "advérbio",
        categoria: "Expressões",
        significado: "Assim mesmo; desse jeito mesmo.",
        audio: "assets/audios/okore.mp3",
        sentido_de: "Confirmação enfática de modo/maneira",
        falante: "Uso geral",
        exemplos: [
            "Õkõre adjapo.",
            "Õkõre oĩ.",
            "Õkõre aiywú.",
            "Õkõre porã."
        ],
        traducao: [
            "Assim mesmo eu fiz.",
            "É assim mesmo.",
            "Assim mesmo eu falo.",
            "Assim mesmo está bom."
        ]
    },
    {
        palavra: "Araĩ ete",
        tipo: "expressão",
        categoria: "Expressões",
        significao: "Assim mesmo; exatamente assim.",
        audio: "assets/audios/arai_ete.mp3",
        sentido_de: "Confirmação e afirmação exata ou precisa",
        falante: "Uso geral",
        exemplos: [
            "Araĩ ete adjapo.",
            "Araĩ ete oĩ.",
            "Araĩ ete nde aiywú.",
            "Araĩ ete porã."
        ],
        traducao: [
            "Assim mesmo eu fiz.",
            "É exatamente assim.",
            "Exatamente assim você fala.",
            "Assim mesmo está bom."
        ]
    },
    
    {
        palavra: "Arãigwé",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Podia; poderia.",
        audio: "assets/audios/araigwe.mp3",
        sentido_de: "Expressa possibilidade ou capacidade no passado/condicional",
        falante: "Uso geral",
        exemplos: [
            "Txe arãigwé agwata.",
            "Arãigwé adjapo.",
            "Arãigwé amaẽ.",
            "Arãigwé akaru."
        ],
        traducao: [
            "Eu podia caminhar.",
            "Eu podia fazer.",
            "Eu podia chegar.",
            "Eu podia comer."
        ]
    },
    {
        palavra: "Arakaáwaẽ",
        tipo: "substantivo",
        categoria: "Expressões",
        significado: "Objetivo; meta; propósito.",
        audio: "assets/audios/arakaawae.mp3",
        sentido_de: "Alvo, finalidade ou meta a ser alcançada",
        falante: "Uso geral",
        exemplos: [
            "Txe arakaáwaẽ.",
            "Areko arakaáwaẽ.",
            "Arakaáwaẽ porã.",
            "Adjapo txe arakaáwaẽ."
        ],
        traducao: [
            "Meu objetivo.",
            "Eu tenho um objetivo.",
            "Bom objetivo.",
            "Eu faço meu objetivo."
        ]
    },
    {
        palavra: "Aata",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu vou, irei (ação futura de ir).",
        audio: "assets/audios/aata.mp3",
        sentido_de: "Ação de deslocamento para o futuro (1ª pessoa)",
        falante: "Uso geral (1ª pessoa)",
        exemplos: [
            "Aata ka'agwy-pe.",
            "Aata txe-róga-pe.",
            "Aata opygwatsu-pe."
        ],
        traducao: [
            "Eu vou para a mata.",
            "Eu vou para a minha casa.",
            "Eu vou para a casa de reza (opy)."
        ]
    },
    {
        palavra: "Tsaraku",
        tipo: "substantivo",
        categoria: "Animais",
        significado: "Saracura.",
        audio: "assets/audios/tsaraku.mp3",
        sentido_de: "Referência à ave saracura",
        falante: "Uso geral",
        exemplos: [
            "Tsaraku oiko y-py.",
            "Aetxa tsaraku.",
            "Akoiwa tsaraku.",
            "Tsaraku oiko ka'agwy-py."
        ],
        traducao: [
            "A saracura vive na água.",
            "Eu vejo a saracura.",
            "Aquela é uma saracura.",
            "A saracura vive na mata."
        ]
    },
    {
        palavra: "Arakwaá",
        tipo: "substantivo",
        categoria: "Expressões",
        significado: "Memória; sabedoria; conhecimento.",
        audio: "assets/audios/arakwaa.mp3",
        sentido_de: "Capacidade mental de lembrar, inteligência ou sabedoria ancestral",
        falante: "Uso geral",
        exemplos: [
            "Areko arakwaá.",
            "Arakwaá porã.",
            "Aetxa txe arakwaá-py.",
            "Txe arakwaá ndaopa'iry."
        ],
        traducao: [
            "Eu tenho memória (sabedoria).",
            "Boa memória.",
            "Eu vejo na minha memória.",
            "Minha memória não acaba."
        ]
    },
    {
        palavra: "Are'i",
        tipo: "advérbio",
        categoria: "Expressões",
        significado: "Demora de pouco tempo; um tempinho; logo.",
        audio: "assets/audios/arei.mp3",
        sentido_de: "Duração temporal curta ou de breve espera",
        falante: "Uso geral",
        exemplos: [
            "Are'i e'ỹ-py.",
            "Are'i rã txe adjú.",
            "Are'i rã mbawuku.",
            "Are'i-nte aiko."
        ],
        traducao: [
            "Sem demora (em pouco tempo).",
            "Em pouco tempo eu venho / logo venho.",
            "Em pouco tempo eu trabalho / logo trabalho.",
            "Só um tempinho eu fico."
        ]
    },
    {
        palavra: "Are'wé",
        tipo: "advérbio",
        categoria: "Expressões",
        significado: "Demora de muito tempo; há muito tempo; demorado.",
        audio: "assets/audios/arewe.mp3",
        sentido_de: "Longo período de tempo decorrido ou espera demorada",
        falante: "Uso geral",
        exemplos: [
            "Are'wé-py aiko apy.",
            "Are'wé a'e oĩ.",
            "Are'wé-ma ndaetxay.",
            "Are'wé e'ỹ-py."
        ],
        traducao: [
            "Faz muito tempo que estou aqui.",
            "Faz muito tempo que ele/ela está.",
            "Faz muito tempo que não (o/a) vejo.",
            "Sem demorar muito tempo."
        ]
    },
    {
        palavra: "Areko",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Tenho; possuo.",
        audio: "assets/audios/areko.mp3",
        sentido_de: "Posse ou relação de pertencimento (1ª pessoa)",
        falante: "Uso geral (1ª pessoa)",
        exemplos: [
            "Areko óga.",
            "Arekokowá mborai.",
            "Areko tembi'u.",
            "Areko arakwaá."
        ],
        traducao: [
            "Eu tenho casa.",
            "Eu tenho esta música.",
            "Eu tenho comida.",
            "Eu tenho sabedoria/memória."
        ]
    },
    {
        palavra: "Maniã",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Esperar; aguardar.",
        audio: "assets/audios/mania.mp3",
        sentido_de: "Ação de aguardar por algo ou alguém",
        falante: "Uso geral",
        exemplos: [
            "Amaniã nde-rewé.",
            "Amaniã apy.",
            "Emaniã ko´apy.",
            "Omaniã oky."
        ],
        traducao: [
            "Eu espero por você.",
            "Eu espero aqui.",
            "Espere aqui.",
            "Ele/ela espera a chuva."
        ]
    },
    {
        palavra: "Aroi",
        tipo: "substantivo",
        categoria: "Natureza",
        significado: "Arroz.",
        audio: "assets/audios/aroi.mp3",
        sentido_de: "Alimento / grão (arroz)",
        falante: "Uso geral",
        exemplos: [
            "Akaru aroi.",
            "Txe djaty aroi koy-py.",
            "Areko aroi.",
            "Aroi porã."
        ],
        traducao: [
            "Eu como arroz.",
            "Eu planto arroz na roça.",
            "Eu tenho arroz.",
            "Arroz bom."
        ]
    },
    {
        palavra: "Arú",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Trouxe; trazer.",
        audio: "assets/audios/aru.mp3",
        sentido_de: "Ação de trazer algo para junto de si",
        falante: "Uso geral",
        exemplos: [
            "Arú tembi'u.",
            "Arú aroi nde-we.",
            "Arú kwatia.",
            "Mba'e nde´erú?"
        ],
        traducao: [
            "Eu trouxe comida.",
            "Eu trouxe arroz para você.",
            "Eu trouxe o livro/caderno.",
            "O que você trouxe?"
        ]
    },
    {
        palavra: "Arumá",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Já trouxe.",
        audio: "assets/audios/aruma.mp3",
        sentido_de: "Ação já concluída de trazer algo",
        falante: "Uso geral (1ª pessoa)",
        exemplos: [
            "Arumá tembi'u.",
            "Arumá aroi nde-we.",
            "Arumá kwatia.",
            "Mba'e erumá?"
        ],
        traducao: [
            "Já trouxe a comida.",
            "Já trouxe o arroz para você.",
            "Já trouxe o livro/caderno.",
            "O que você já trouxe?"
        ]
    },
    {
        palavra: "Aruwia",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Eu acredito.",
        audio: "assets/audios/aruwia.mp3",
        sentido_de: "Crença, fé ou confiança (1ª pessoa)",
        falante: "Uso geral (1ª pessoa)",
        exemplos: [
            "Aruwia Nhanderu-pe.",
            "Aruwia txeru-pe.",
            "Aruwia nhanderekó-re.",
            "Aruwia Nhandewa nhe'ẽ-re."
        ],
        traducao: [
            "Eu acredito em Nhanderu.",
            "Eu acredito em meu pai.",
            "Eu acredito no nosso modo de vida.",
            "Eu acredito na língua Nhandewa."
        ]
    },
    {
        palavra: "-py",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "Em; dentro de; localização em um lugar.",
        audio: "assets/audios/py_sufixo.mp3",
        sentido_de: "Pós-posição de localização estática/interna",
        falante: "Uso geral",
        exemplos: [
            "Aiko óga-py.",
            "Animbo'é nimboe'aty-py.",
            "Angudjá oiko óga-py.",
            "Aiko tekoa-py."
        ],
        traducao: [
            "Eu vivo em casa.",
            "Eu aprendo na escola.",
            "O rato vive na casa.",
            "Eu vivo na aldeia."
        ]
    },
    {
        palavra: "-rupi",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "Por; através de.",
        audio: "assets/audios/rupi_sufixo.mp3",
        sentido_de: "Pós-posição que indica percurso ou meio",
        falante: "Uso geral",
        exemplos: [
            "Agwata tape-rupi.",
            "Agwata ka'agwy-rupi.",
            "Agwata ywy-rupi.",
            "Aiywú djuru-rupi."
        ],
        traducao: [
            "Eu caminho pelo caminho.",
            "Eu caminho pela mata.",
            "Eu caminho pela terra.",
            "Eu falo pela boca."
        ]
    },
    {
        palavra: "-arõ / ári dependendo da aldeia.",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "Em cima; sobre.",
        audio: "assets/audios/aro_sufixo.mp3",
        imagem: "assets/svg/em cima.jpg",
        sentido_de: "Pós-posição de posição",
        falante: "Uso geral",
        exemplos: [
            "Adjaka oĩ ita-arõ.",
            "Óga oĩ ywy-arõ.",
            "Ã oĩ ywy-arõ.",
            "Angudjá oĩ óga-arõ."
        ],
        traducao: [
            "O cesto está sobre a pedra.",
            "A casa está sobre a terra.",
            "A sombra está sobre a terra.",
            "O rato está em cima da casa."
        ]
    },
    {
        palavra: "-gwypy",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "Embaixo; debaixo.",
        audio: "assets/audios/gwypy_sufixo.mp3",
        sentido_de: "Pós-posição de posição inferior",
        falante: "Uso geral",
        exemplos: [
            "Agwata ywyra-gwypy.",
            "Adjaka oĩ óga-gwypy.",
            "Ambere oiko ywyra-gwypy.",
            "Akuti ogwata ywyra-gwypy."
        ],
        traducao: [
            "Eu caminho debaixo da árvore.",
            "O cesto está embaixo da casa.",
            "A lagartixa vive debaixo da árvore.",
            "A cutia anda debaixo da árvore."
        ]
    },
    {
        palavra: "-mbyté-py",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "Entre; no meio.",
        audio: "assets/audios/mbyte_py_sufixo.mp3",
        sentido_de: "Pós-posição de posição central ou intermediária",
        falante: "Uso geral",
        exemplos: [
            "Agwata óga mbyté-py.",
            "Ambere oiko ywyra mbyté-py.",
            "Akuti oiko tekoa mbyté-py.",
            "Akoiwa kawaru oĩ ywyra mbyté-py."
        ],
        traducao: [
            "Eu caminho no meio da casa.",
            "A lagartixa vive no meio das árvores.",
            "A cutia vive no meio da aldeia.",
            "Aquele cavalo está entre as árvores."
        ]
    },
    {
        palavra: "-rewé",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "Com; junto com (companhia).",
        audio: "assets/audios/rewe_sufixo.mp3",
        sentido_de: "Pós-posição de companhia pessoal",
        falante: "Uso geral",
        exemplos: [
            "Animbo'é txesy-rewé.",
            "Aiywú txeru-rewé.",
            "Agwata nderewé.",
            "Adjú Nhanderu-rewé."
        ],
        traducao: [
            "Eu aprendo com minha mãe.",
            "Eu falo com meu pai.",
            "Eu caminho com você.",
            "Eu vim com Nhanderu."
        ]
    },
    {
        palavra: "-re",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "Com; por meio de; usando.",
        audio: "assets/audios/re_sufixo.mp3",
        sentido_de: "Pós-posição de instrumento, meio ou causa",
        falante: "Uso geral",
        exemplos: [
            "Aiywú djuru-re.",
            "Adjapo kwatia-re.",
            "Ambota ywyra-re.",
            "Animbo'é nhe'ẽ-re."
        ],
        traducao: [
            "Eu falo com a boca.",
            "Eu faço por meio da escrita.",
            "Eu prego usando madeira.",
            "Eu aprendo por meio da palavra."
        ]
    },
    {
        palavra: "-pygwá",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "De; origem ou nascimento.",
        audio: "assets/audios/pygwa_sufixo.mp3",
        sentido_de: "Indicação de origem, proveniência nativa ou nascimento",
        falante: "Uso geral",
        exemplos: [
            "Awá narã'i-pygwá.",
            "Txeema Nhandewa-pygwá.",
            "Txeru tekoa-pygwá.",
            "Akoiwa awá Brasil-pygwá."
        ],
        traducao: [
            "A pessoa é de Laranjinha; nasceu em Laranjinha.",
            "Eu sou de origem Nhandewa.",
            "Meu pai é da aldeia; nasceu na aldeia.",
            "Aquele é um homem do Brasil."
        ]
    },
    {
        palavra: "-gwi",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "De; vindo de; procedência imediata; longe de; por causa de; a partir de.",
        audio: "assets/audios/gwi_sufixo.mp3",
        sentido_de: "Pós-posição de procedência, origem ou afastamento",
        falante: "Uso geral",
        exemplos: [
            "Adjú tekoa-gwi.",
            "Adjú óga-gwi.",
            "Áama ka'agwy-gwi.",
            "Adjú Nhanderu-gwi."
        ],
        traducao: [
            "Eu vim da aldeia.",
            "Eu vim de casa.",
            "Já vim da mata.",
            "Eu vim de Nhanderu."
        ]
    },
    {
        palavra: "-reé",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "Até; até junto de; por amor a; em honra a.",
        audio: "assets/audios/ree_sufixo.mp3",
        sentido_de: "Pós-posição de limite de movimento ou afeição",
        falante: "Uso geral",
        exemplos: [
            "Agwata tekoa-reé.",
            "Agwata tape-reé.",
            "Amaẽ óga-reé.",
            "Adjú nde-reé."
        ],
        traducao: [
            "Eu caminho até a aldeia.",
            "Eu caminho até o caminho.",
            "Eu chego até a casa.",
            "Eu vim até você / por amor a você."
        ]
    },
    {
        palavra: "-wy",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "Com; junto com; para.",
        audio: "assets/audios/wy_sufixo.mp3",
        sentido_de: "Pós-posição pronominal de companhia ou destinatário",
        falante: "Uso geral",
        exemplos: [
            "Txewy.",
            "Ndewy.",
            "Nhandewy.",
            "Orewy."
        ],
        traducao: [
            "Comigo / para mim.",
            "Com você / para você.",
            "Conosco (incluindo você).",
            "Conosco (sem incluir você)."
        ]
    },
    {
        palavra: "-ndive",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "Com; junto com.",
        audio: "assets/audios/ndive_sufixo.mp3",
        sentido_de: "Pós-posição de companhia",
        falante: "Uso geral",
        exemplos: [
            "Animbo'é txesy ndive.",
            "Agwata txeru ndive.",
            "Aiko xe sy ndive.",
            "Agwata nde ndive."
        ],
        traducao: [
            "Eu aprendo com minha mãe.",
            "Eu caminho com meu pai.",
            "Eu vivo com minha mãe.",
            "Eu caminho com você."
        ]
    },
    {
        palavra: "-pe",
        tipo: "sufixo",
        categoria: "Pós-posições",
        significado: "Para; a.",
        audio: "assets/audios/pe_sufixo.mp3",
        sentido_de: "Pós-posição de direção ou movimento para um local",
        falante: "Uso geral",
        exemplos: [
            "Amaẽ tekoa-pe.",
            "Agwata nimboe'aty-pe.",
            "Aruwia Nhanderuete-pe.",
            "Ataá óga-pe."
        ],
        traducao: [
            "Eu chego à aldeia.",
            "Eu caminho para a escola.",
            "Eu acredito em Deus.",
            "Eu vou para casa."
        ]
    },
    {
        palavra: "porã",
        tipo: "adjetivo",
        categoria: "Expressões",
        significado: "Bom; bonito; belo; agradável.",
        audio: "assets/audios/pora.mp3",
        sentido_de: "Qualidade positiva, beleza ou bondade",
        falante: "Uso geral",
        exemplos: [
            "ko tekoa i-porã.",
            "Aruwia Nhanderuete porã-re.",
            "Anhẽ'ẽ awa porã-ndive.",
            "Oĩ ywy porã."
        ],
        traducao: [
            "Esta aldeia é bonita.",
            "Eu acredito no Deus bom.",
            "Eu falo com o homem bom.",
            "Existe uma terra boa."
        ]
    },
    {
        palavra: "katu",
        tipo: "advérbio",
        categoria: "Expressões",
        significado: "Muito; bem; realmente; verdadeiro; bom.",
        audio: "assets/audios/katu.mp3",
        sentido_de: "Partícula de intensidade, confirmação ou ênfase",
        falante: "Uso geral",
        exemplos: [
            "ko kunhã i-porã katu.",
            "Aiko porã katu óga-pe.",
            "Ha'e katu oñe'ẽ nhandewá-pe.",
            "Awy'a katu nendive."
        ],
        traducao: [
            "Esta mulher é muito bonita.",
            "Eu vivo realmente bem em casa.",
            "Ele fala bem em nhandewá.",
            "Estou muito feliz contigo."
        ]
    },
    {
        palavra: "wai",
        tipo: "adjetivo",
        categoria: "Expressões",
        significado: "Ruim; mau; feio.",
        audio: "assets/audios/wai.mp3",
        sentido_de: "Qualidade negativa, maldade ou feiura",
        falante: "Uso geral",
        exemplos: [
            "I-wai ko tape.",
            "Oiko awa wai tekoa-pe.",
            "Anhendu nhẽ'ẽ wai.",
            "Oky wai ko'aỹ."
        ],
        traducao: [
            "Este caminho é ruim.",
            "Vive um homem mau na aldeia.",
            "Eu ouço palavras ruins.",
            "Chove mal/forte agora."
        ]
    },
    {
        palavra: "-rã",
        tipo: "sufixo",
        categoria: "Verbos",
        significado: "Futuro; que há de ser; para; a fim de.",
        audio: "assets/audios/ra_sufixo.mp3",
        sentido_de: "Sufixo nominal/verbal que indica estado futuro ou finalidade",
        falante: "Uso geral",
        exemplos: [
            "Adjapóta óga-rã.",
            "Tembi'u-rã.",
            "Adju nendive-rã.",
            "Anhẽmbotsarái karu-rã."
        ],
        traducao: [
            "Eu farei a futura casa.",
            "O que vai ser comida.",
            "Eu vim para ficar contigo.",
            "Eu brinco antes de comer."
        ]
    },
    {
        palavra: "-ramo,rõ",
        tipo: "sufixo",
        categoria: "Verbos",
        significado: "Quando; ao; no momento em que; se.",
        audio: "assets/audios/ramo_ro_sufixo.mp3",
        sentido_de: "Conjunção subordinativa temporal ou condicional",
        falante: "Uso geral",
        exemplos: [
            "Ka'aru-ramo adju.",
            "Oky-ramo apyta txeróga.",
            "Karu-ramo anhẽ'ẽ oporãete.",
            "Pyhareramo ake."
        ],
        traducao: [
            "À tarde eu venho.",
            "Quando chove eu fico na minha casa.",
            "Ao comer, eu digo obrigado.",
            "Quando está de noite eu durmo."
        ]
    },
    {
        palavra: "ko'aỹ",
        tipo: "advérbio",
        categoria: "Expressões",
        significado: "Agora; hoje.",
        audio: "assets/audios/koay.mp3",
        sentido_de: "Marcação de tempo presente imediato",
        falante: "Uso geral",
        exemplos: [
            "Adju ko'aỹ tekoa-pe.",
            "Ko'aỹ oky katu.",
            "Akaru ko'aỹ.",
            "Ko'aỹ aiko porã."
        ],
        traducao: [
            "Eu venho agora para a aldeia.",
            "Hoje chove bastante.",
            "Eu como agora.",
            "Hoje eu vivo bem."
        ]
    },
    {
        palavra: "-ta",
        tipo: "sufixo",
        categoria: "Verbos",
        significado: "Futuro próximo; ir a; vai; logo.",
        audio: "assets/audios/ta_sufixo.mp3",
        sentido_de: "Sufixo verbal de aspecto futuro iminente",
        falante: "Uso geral",
        exemplos: [
            "Adjuta nendive.",
            "Akaruta óga-pe.",
            "Okyta ko'aỹ.",
            "Añe'ẽta ndewy."
        ],
        traducao: [
            "Eu vou vir contigo.",
            "Eu vou comer em casa.",
            "Vai chover hoje.",
            "Eu vou falar contigo."
        ]
    },
    {
        palavra: "ra'e",
        tipo: "partícula",
        categoria: "Verbos",
        significado: "Recém; afinal (passado recente ou constatação).",
        audio: "assets/audios/rae.mp3",
        sentido_de: "Partícula que indica passado recente ou constatação súbita",
        falante: "Uso geral",
        exemplos: [
            "Ou ra'e che-ru.",
            "Oky ra'e pyhare.",
            "Anhẽ'ẽ ra'e nendive.",
            "Okanhỹ ra'e ko awa."
        ],
        traducao: [
            "Meu pai acabou de chegar.",
            "Choveu recém de noite.",
            "Afinal eu falei contigo.",
            "Este homem acabou de sumir."
        ]
    },
    {
        palavra: "yma",
        tipo: "advérbio",
        categoria: "Expressões",
        significado: "Antigamente; há muito tempo; antigo.",
        audio: "assets/audios/yma.mp3",
        sentido_de: "Marcação temporal de passado distante ou tradição",
        falante: "Uso geral",
        exemplos: [
            "Yma oiko ava porã.",
            "Yma gweywé aiko ápe.",
            "Nhandewá onhẽ'ẽ yma.",
            "Yma reko i-porã."
        ],
        traducao: [
            "Antigamente viviam homens bons.",
            "Faz muito tempo que eu vivo aqui.",
            "O nhandewá é falado há muito tempo.",
            "O modo de vida antigo era bom."
        ]
    },
    {
        palavra: "-eta",
        tipo: "sufixo",
        categoria: "Expressões",
        significado: "Muito; muitos; bastante; plural de abundância.",
        audio: "assets/audios/eta_sufixo.mp3",
        sentido_de: "Sufixo de pluralidade ou quantidade abundante",
        falante: "Uso geral",
        exemplos: [
            "Awa-eta oñembosarái.",
            "Adjapo tembi'u-eta.",
            "Oĩ jagwa-eta tekoa-pe.",
            "Nhandé-eta odju ko'aỹ."
        ],
        traducao: [
            "Muitos homens estão brincando.",
            "Eu faço muita comida.",
            "Há muitos cachorros na aldeia.",
            "Nós todos viemos agora!"
        ]
    },
    {
    palavra: "Ymã",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Antigamente; há muito tempo (passado remoto / tempo dos ancestrais).",
    audio: "assets/audios/yma_nasal.mp3",
    sentido_de: "Marcação temporal de passado distante, ancestral ou tempo antigo",
    falante: "Uso geral",
    exemplos: [
        "Ymã oiko tekoa apy.",
        "Nhande ramói oñe'ẽ ymã.",
        "Ymã aiko ka'agwy-py.",
        "Ymã reko porã."
    ],
    traducao: [
        "Antigamente existia uma aldeia aqui.",
        "Nossos avós falavam antigamente.",
        "Antigamente eu vivia na mata.",
        "O modo de viver antigo era bom."
    ]
},
    {
        palavra: "Mbowy",
        tipo: "pronomes / advérbio",
        categoria: "Expressões",
        significado: "Pouco; poucos; quantos?",
        audio: "assets/audios/mbowy.mp3",
        sentido_de: "Indicação de pequena quantidade ou questionamento quantitativo",
        falante: "Uso geral",
        exemplos: [
            "Mbowy oĩ óga-pe?",
            "Areko tembi'u mbowy.",
            "Mbowy awa odju?",
            "Mbowy gweywé reiko apy?"
        ],
        traducao: [
            "Quantos estão em casa?",
            "Tenho pouca comida.",
            "Quantos homens vêm?",
            "Há quanto tempo você mora aqui?"
        ]
    },
    {
        palavra: "Pamẽ",
        tipo: "pronomes / quantificador",
        categoria: "Expressões",
        significado: "Todos; tudo; inteiramente.",
        audio: "assets/audios/pame.mp3",
        sentido_de: "Totalidade ou abrangência completa",
        falante: "Uso geral",
        exemplos: [
            "Okaru pamẽ tekoa-pe.",
            "Adjapo-pamẽ mbawuku.",
            "Pamẽ oñe'ẽ porã.",
            "Okanhỹ-pa tembi'u."
        ],
        traducao: [
            "Todos comem na aldeia.",
            "Eu fiz todo o meu trabalho.",
            "Todos falam bem.",
            "Sumiu toda a comida."
        ]
    },
    {
        palavra: "-e'ỹ",
        tipo: "sufixo",
        categoria: "Expressões",
        significado: "Sem; ausência de; não.",
        audio: "assets/audios/ey_sufixo.mp3",
        sentido_de: "Sufixo de negação ou privação de algo",
        falante: "Uso geral",
        exemplos: [
            "Y-e'ỹ apyta.",
            "Tembi'u-e'ỹ aiko.",
            "Akyje-e'ỹ añe'ẽ.",
            "Oky-e'ỹ ko'aỹ."
        ],
        traducao: [
            "Estou sem água.",
            "Eu vivo sem comida.",
            "Eu falo sem medo.",
            "Não chove hoje (está sem chuva hoje)."
        ]
    },
    {
        palavra: "Arý",
        tipo: "substantivo",
        categoria: "Expressões",
        significado: "Dia/ tempo.",
        audio: "assets/audios/ary.mp3",
        sentido_de: "Período diurno ou divisão de tempo",
        falante: "Uso geral",
        exemplos: [
            "Kowá arý-py.",
            "Arý porã.",
            "Oatsa arý.",
            "Apyta nimboe´aty peteĩ arý."
        ],
        traducao: [
            "Neste dia.",
            "Dia bonito.",
            "O dia passou.",
            "Fico um dia na escola."
        ]
    },
    {
        palavra: "Aryrei",
        tipo: "substantivo",
        categoria: "Natureza",
        significado: "Céu.",
        audio: "assets/audios/aryrei.mp3",
        sentido_de: "Elemento natural / abóbada celeste",
        falante: "Uso geral",
        exemplos: [
            "Aetxa aryrei.",
            "Aryrei iporã.",
            "Arai oĩ aryrei-pe.",
            "Aryrei owy."
        ],
        traducao: [
            "Eu vejo o céu.",
            "O céu é bonito.",
            "A nuvem está no céu.",
            "O céu é azul."
        ]
    },
    {
        palavra: "Até",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Demora; demorar.",
        audio: "assets/audios/ate.mp3",
        sentido_de: "Ação ou estado de tardar/demorar",
        falante: "Uso geral",
        exemplos: [
            "Até oky-rã.",
            "Ma´e rã reiko até?",
            "Edju e'ỹ até.",
            "Até amaẽ óga-pe."
        ],
        traducao: [
            "Demora para chover (vai demorar a chover).",
            "Por que você demora?",
            "Vem sem demorar. / Não demore para vir.",
            "Demorou para chegar em casa."
        ]
    },
    {
        palavra: "Ati'y",
        tipo: "substantivo",
        categoria: "Corpo humano",
        significado: "Ombro.",
        audio: "assets/audios/atiy.mp3",
        sentido_de: "Parte anatômica do corpo humano",
        falante: "Uso geral",
        exemplos: [
            "Txeati'y.",
            "Aetxa neatĩ'y.",
            "Ati'y iporã.",
            "Txeati'y naporãi."
        ],
        traducao: [
            "Meu ombro.",
            "Eu vejo o seu ombro.",
            "Ombro bonito.",
            "Meu ombro não está bem (está doendo/ruim)."
        ]
    },
    {
        palavra: "Aupí / Awý",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Levanta; levantar.",
        audio: "assets/audios/aupi_awy.mp3",
        sentido_de: "Ação de erguer-se ou levantar algo",
        falante: "Uso geral",
        exemplos: [
            "Aupí ko'aỹ.",
            "Ewý ko'apy.",
            "Aupí ywyra.",
            "Ewý woi mbawuku-py."
        ],
        traducao: [
            "Levanto agora.",
            "Levante-se aqui.",
            "Eu levanto a madeira.",
            "Levante rápido para o trabalho."
        ]
    },
    {
        palavra: "Aupima / Awýma",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Já levantei; levanta (chamado/ação).",
        audio: "assets/audios/aupima_awyma.mp3",
        sentido_de: "Ação concluída de levantar ou ordem/chamado para erguer-se",
        falante: "Uso geral",
        exemplos: [
            "Aupima ko'aỹ.",
            "Awýma woi mbawuku-py.",
            "Aupima txeray.",
            "Awýma ywyra."
        ],
        traducao: [
            "Já levantei agora.",
            "Já levantou rápido para o trabalho.",
            "Levanta, meu filho.",
            "Já levantou a madeira."
        ]
    },
    {
        palavra: "Awa",
        tipo: "substantivo",
        categoria: "Expressões",
        significado: "Homem.",
        audio: "assets/audios/awa.mp3",
        sentido_de: "Pessoa do sexo masculino ou ser humano",
        falante: "Uso geral",
        exemplos: [
            "Aetxa awa.",
            "Awa mbawuku-py.",
            "Awa iporã.",
            "Awa odjapo óga."
        ],
        traducao: [
            "Eu vejo o homem.",
            "O homem está no trabalho.",
            "Homem bonito.",
            "O homem faz a casa."
        ]
    },
    {
        palavra: "Awakwe'i",
        tipo: "substantivo",
        categoria: "Expressões",
        significado: "Meninos; rapazes.",
        audio: "assets/audios/awakwei.mp3",
        sentido_de: "Grupo de jovens ou meninos (plural de rapaz/menino)",
        falante: "Uso geral",
        exemplos: [
            "Aetxa awakwe'i.",
            "Awakwe'i mbawuku-py.",
            "Awakwe'i owy'a.",
            "O´oma awakwe'i."
        ],
        traducao: [
            "Eu vejo os meninos.",
            "Os meninos estão no trabalho.",
            "Os meninos estão alegres.",
            "Os meninos foram."
        ]
    },
    {
        palavra: "Djiruwia",
        tipo: "verbo / adjetivo",
        categoria: "Expressões",
        significado: "Alegre; alegria; estar alegre.",
        audio: "assets/audios/djiruwia.mp3",
        sentido_de: "Estado emocional de felicidade ou contentamento",
        falante: "Uso geral",
        exemplos: [
            "Adjiruwia ko'aỹ.",
            "Awakwe'i odjiruwia.",
            "Awa odjiruwia mbawuku-py.",
            "Txe-djiruwia."
        ],
        traducao: [
            "Estou alegre agora.",
            "Os meninos estão alegres.",
            "O homem está alegre no trabalho.",
            "Minha alegria."
        ]
    },
    {
        palavra: "Mba'apo",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Fazer com as mãos; trabalho manual.",
        audio: "assets/audios/mbaapo.mp3",
        sentido_de: "Ação de realizar trabalho físico, artesanal ou manual",
        falante: "Uso geral",
        exemplos: [
            "Amba'apo ko'aỹ.",
            "Awa omba'apo.",
            "Emba'apo woi.",
            "Amba'apo ywyra-py."
        ],
        traducao: [
            "Trabalho com as mãos agora.",
            "O homem faz trabalho manual.",
            "Trabalhe rápido com as mãos.",
            "Trabalho a madeira com as mãos."
        ]
    },
    {
        palavra: "Awãra",
        tipo: "pronomes",
        categoria: "Pronomes",
        significado: "Alguém.",
        audio: "assets/audios/awara.mp3",
        sentido_de: "Pronome indefinido para se referir a uma pessoa indeterminada",
        falante: "Uso geral",
        exemplos: [
            "Awãra ou.",
            "Aetxa awãra.",
            "Awãra mba'apo-py.",
            "Awãra oĩ óga-py."
        ],
        traducao: [
            "Alguém vem.",
            "Eu vejo alguém.",
            "Alguém no trabalho.",
            "Alguém está em casa."
        ]
    },
    {
        palavra: "Awati",
        tipo: "substantivo",
        categoria: "Natureza",
        significado: "Milho.",
        audio: "assets/audios/awati.mp3",
        sentido_de: "Grão / alimento (milho)",
        falante: "Uso geral",
        exemplos: [
            "Adjaty awati.",
            "Awati iporã.",
            "A'u awati.",
            "Adjaty awati mbawuku-py."
        ],
        traducao: [
            "Eu planto milho.",
            "Milho bonito / bom.",
            "Como milho.",
            "Eu planto milho no trabalho."
        ]
    },
    {
        palavra: "Awati pororó",
        tipo: "substantivo",
        categoria: "Natureza",
        significado: "Pipoca (literalmente: milho estourando).",
        audio: "assets/audios/awati_pororo.mp3",
        sentido_de: "Alimento preparado com milho estourado",
        falante: "Uso geral",
        exemplos: [
            "A'u awati pororó.",
            "Odjapo awati pororó.",
            "Awati pororó iporã.",
            "Awakwe'i o'u awati pororó."
        ],
        traducao: [
            "Como pipoca.",
            "Faz pipoca.",
            "Pipoca gostosa / boa.",
            "Os meninos comem pipoca."
        ]
    },
    {
        palavra: "Awé porã",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Que bom! / Que ótimo!",
        audio: "assets/audios/awe_pora.mp3",
        sentido_de: "Exclamação de satisfação ou aprovação",
        falante: "Uso geral",
        exemplos: [
            "Awé porã!",
            "Awé porã, adjiruwia.",
            "Awé porã, o'oma awakwe'i.",
            "Awé porã ko'aỹ."
        ],
        traducao: [
            "Que bom!",
            "Que bom, estou alegre.",
            "Que bom, os meninos já foram.",
            "Que bom agora."
        ]
    },
    {
        palavra: "Awei / Awií",
        tipo: "advérbio",
        categoria: "Expressões",
        significado: "Também.",
        audio: "assets/audios/awei_awii.mp3",
        sentido_de: "Adição ou inclusão de elemento",
        falante: "Uso geral",
        exemplos: [
            "Awakwe'i o'o awei.",
            "Txe awei.",
            "Adjiruwia awií.",
            "Amba'apo awei."
        ],
        traducao: [
            "Os meninos também foram.",
            "Eu também.",
            "Também estou alegre.",
            "Eu também trabalho com as mãos."
        ]
    },
    {
        palavra: "Aweté",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Verdade; é verdade; com certeza.",
        audio: "assets/audios/awete.mp3",
        sentido_de: "Confirmação enfática, certeza ou assentimento",
        falante: "Uso geral",
        exemplos: [
            "Aweté!",
            "Aweté, awakwe'i o'o awei.",
            "Aweté porã.",
            "Aweté, adjiruwia."
        ],
        traducao: [
            "Verdade!",
            "É verdade, os meninos também foram.",
            "Verdade mesmo / Muito verdadeiro.",
            "É verdade, estou alegre."
        ]
    },
    {
        palavra: "Awiá",
        tipo: "substantivo",
        categoria: "Animais",
        significado: "Sabiá (pássaro).",
        audio: "assets/audios/awia.mp3",
        sentido_de: "Referência à ave sabiá",
        falante: "Uso geral",
        exemplos: [
            "Awiá oporahéi ywyra-py.",
            "Aetxa awiá oveve.",
            "Awiá ho'u yva.",
            "Oĩ awiá raity-py."
        ],
        traducao: [
            "O sabiá canta na árvore.",
            "Eu vejo o sabiá voar.",
            "O sabiá come fruta.",
            "O sabiá está no seu ninho."
        ]
    },
    {
        palavra: "Awinó",
        tipo: "adjetivo",
        categoria: "Expressões",
        significado: "Estragado; podre; deteriorado.",
        audio: "assets/audios/awino.mp3",
        sentido_de: "Condição de algo impróprio para consumo ou estragado",
        falante: "Uso geral",
        exemplos: [
            "Inhãwinó awati.",
            "Aity awinó.",
            "Nda'ui ywara´a awinó.",
            "Kowa'e pira awinó."
        ],
        traducao: [
            "O milho está estragado.",
            "Joguei fora o que estava estragado.",
            "Não como fruta estragada.",
            "Este peixe está estragado."
        ]
    },
    {
        palavra: "Awý'á",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Gostar; estar contente; sentir prazer em algo.",
        audio: "assets/audios/awya.mp3",
        sentido_de: "Sentimento de afeição, apreço ou bem-estar",
        falante: "Uso geral",
        exemplos: [
            "Awý'á kowa'e renda-py.",
            "Awý'á karu-py.",
            "Awý'á oporai ramo.",
            "Txe awý'á nderewé."
        ],
        traducao: [
            "Gosto/sinto-me bem nesta casa.",
            "Gosto de comer.",
            "Gosto quando há cantoria.",
            "Eu gosto de você / me sinto bem com você."
        ]
    },
    {
        palavra: "Aipota",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Querer; desejar.",
        audio: "assets/audios/aipota.mp3",
        sentido_de: "Desejo ou intenção de ter/fazer algo (1ª pessoa)",
        falante: "Uso geral (1ª pessoa)",
        exemplos: [
            "Aipota ywyra'a porã.",
            "Ndaipotai yy ro'ytsa.",
            "Mba'e tepa erepota?",
            "Aipota mbawyky."
        ],
        traducao: [
            "Quero uma fruta boa.",
            "Não quero água gelada.",
            "O que você quer?",
            "Quero trabalhar."
        ]
    },
    {
        palavra: "Awy'aa/ Wy'aa",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Acostumar-se; adaptar-se; alegrar-se; hábito / bem-estar.",
        audio: "assets/audios/awyaa.mp3",
        sentido_de: "Processo de adaptação, costume ou habituação a um lugar/situação",
        falante: "Uso geral",
        exemplos: [
            "Awy´aa ko´apy .",
            "Awy´aa kowa renda",
            "Owy'áama nhanderewe.",
            "Awý'á waipa ko'ápy."
        ],
        traducao: [
            "Acostumei-me / sinto-me bem aqui.",
            "Acostumei-me nesta casa.",
            "Já se acostumou conosco.",
            "Estou muito bem-adaptado / acostumado aqui."
        ]
    },
    {
        palavra: "Awýma",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Já me levantei; levantar-se.",
        audio: "assets/audios/awyma.mp3",
        sentido_de: "Ação já realizada de levantar-se da cama ou assento",
        falante: "Uso geral (1ª pessoa)",
        exemplos: [
            "Awýma.",
            "Awýma mbawyky awã.",
            "Awýma adjiruwia."
        ],
        traducao: [
            "Já me levantei.",
            "Já me levantei para trabalhar.",
            "Já me levantei alegre / confiante."
        ]
    },
    {
        palavra: "até",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Demora, demorado (uso do português integrado na fala cotidiana).",
        audio: "assets/audios/ate_port.mp3",
        sentido_de: "Empréstimo linguístico para expressar demoradamente um processo",
        falante: "Uso cotidiano",
        exemplos: [
            "Ma'erã ndee até?",
            "Oĩ até ápe."
        ],
        traducao: [
            "Por que você demora tanto?",
            "Está uma demora aqui."
        ]
    },
    {
        palavra: "are",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Demorar, tardar (foco no tempo que passa).",
        audio: "assets/audios/are.mp3",
        sentido_de: "Decurso demorado do tempo",
        falante: "Uso geral",
        exemplos: [
            "Ma'erã re'are?",
            "Nda'oarei oyepota."
        ],
        traducao: [
            "Por que você demora?",
            "Não demora a aparecer/chegar."
        ]
    },
    {
        palavra: "puku",
        tipo: "adjetivo / advérbio",
        categoria: "Expressões",
        significado: "Comprido, longo, alto (Usado na duração/comprimento do tempo).",
        audio: "assets/audios/puku.mp3",
        imagem:"assets/svg/puku.jpg",
        sentido_de: "Longo, comprido alto(a)",
        falante: "Uso geral",
        exemplos: [
            "Tape puku.",
            "Ywyra puku.",
            "Awa puku."
        ],
        traducao: [
            "Estrada longa.",
            "Árvore grande.",
            "Homem alto ."
        ]
    },
    {
        palavra: "maẽ / gwaẽ",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Chegar, alcançar o destino.",
        audio: "assets/audios/mae_gwae.mp3",
        sentido_de: "Ação de atingir o local de destino",
        falante: "Uso geral",
        exemplos: [
            "Amaẽ tekoa-pe.",
            "Omaẽ-peve opuku.",
            "Mba'e ára-pe remaẽta?"
        ],
        traducao: [
            "Cheguei na aldeia.",
            "Demora até chegar (é longo até chegar).",
            "Que dia você vai chegar?"
        ]
    },
    {
        palavra: "Yepota / oyepota",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Chegar, aparecer, fazer-se presente (visto por quem espera).",
        audio: "assets/audios/yepota.mp3",
        sentido_de: "Aparecimento ou chegada presenciada por quem aguarda",
        falante: "Uso geral",
        exemplos: [
            "Nda'ipukui oyepota.",
            "Oyepotama ava-eta."
        ],
        traducao: [
            "Não demora a aparecer/chegar.",
            "As pessoas já estão chegando/aparecendo."
        ]
    },
    {
        palavra: "etxauka",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Mostrar, fazer ver, apresentar algo a alguém.",
        audio: "assets/audios/etxauka.mp3",
        sentido_de: "Exibir ou apresentar algo visualmente",
        falante: "Uso geral",
        exemplos: [
            "Oetxauka iñemby'y.",
            "Aetxaukase ndéve."
        ],
        traducao: [
            "Ele(a) mostra a comida dele(a).",
            "Quero mostrar a você."
        ]
    },
    {
        palavra: "dja'u",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Vamos comer, vamos tomar/beber.",
        audio: "assets/audios/djau.mp3",
        sentido_de: "Convite no imperativo inclusivo para refeição ou bebida",
        falante: "Uso geral (1ª pessoa do plural inclusiva)",
        exemplos: [
            "Dja'u tembi'u.",
            "Dja'u irói."
        ],
        traducao: [
            "Vamos comer comida.",
            "Vamos tomar café."
        ]
    },
    {
        palavra: "ysyry",
        tipo: "substantivo",
        categoria: "Natureza",
        significado: "Rio, riacho, água corrente (literalmente: água que flui).",
        audio: "assets/audios/ysyry.mp3",
        sentido_de: "Curso natural de água fluente",
        falante: "Uso geral",
        exemplos: [
            "Adjau ysyry-pe.",
            "Ysyry iporã etei.",
            "Oĩ pira ysyry-pe."
        ],
        traducao: [
            "Tomo banho no rio.",
            "O rio é muito bonito.",
            "Tem peixe no rio."
        ]
    },
       {
        palavra: "Edjau",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Tome banho!; Lave-se!",
        audio: "assets/audios/edjau.mp3",
        sentido_de: "Ordem ou instrução imperativa para banhar-se",
        falante: "Uso geral",
        exemplos: [
            "Edjau.",
            "Edjau ko'aỹ.",
            "Edjau y-py.",
            "Edjau oo mboywe."
        ],
        traducao: [
            "Tome banho!",
            "Tome banho agora.",
            "Tome banho na água.",
            "Tome banho antes de ir."
        ]
    },
    {
        palavra: "dja'a",
        tipo: "verbo",
        categoria: "Verbos",
        significado: "Vamos, vamos embora (chamada para ir a algum lugar).",
        audio: "assets/audios/djaa.mp3",
        sentido_de: "Incentivo ou convite para partida/deslocamento",
        falante: "Uso geral (1ª pessoa do plural inclusiva)",
        exemplos: [
            "Dja'a tekoa-pe!",
            "Dja'a djahu ysyry-pe.",
            "Dja'a oká-pe."
        ],
        traducao: [
            "Vamos para a aldeia!",
            "Vamos tomar banho no rio.",
            "Vamos lá fora."
        ]
    },
    {
        palavra: "djae'o emẽ.",
        tipo: "expressão",
        categoria: "Expressões",
        significado: "Não chore!",
        audio: "assets/audios/djaeo_eme.mp3",
        sentido_de: "Expressão proibitiva/consoladora para cessar o choro",
        falante: "Uso geral",
        exemplos: [
            "Aní rejae'o, txe ra'y!",
            "Djae'o emẽ, epy'agwapy."
        ],
        traducao: [
            "Não chore, meu filho!",
            "Não chore, fique calmo."
        ]
    },
    {
        palavra: "Py'a",
        tipo: "substantivo",
        categoria: "Corpo humano",
        significado: "Fígado (órgão); centro das emoções, coração, alma, sentimento, coragem.",
        audio: "assets/audios/pya.mp3",
        sentido_de: "Órgão físico e centro simbólico das emoções/sentimentos",
        falante: "Uso geral",
        exemplos: [
            "Txe py'a porã nderehe.",
            "Ha'e awa ipy'agwasu.",
            "Txe py'a rasy."
        ],
        traducao: [
            "Tenho um bom sentimento por você / Gosto de você.",
            "Aquele homem é muito corajoso.",
            "Estou com dor no peito / triste (ou com azia)."
        ]
    },
    {
        palavra: "Djae'o",
        tipo: "verbo / substantivo",
        categoria: "Verbos",
        significado: "Choro, pranto; chorar.",
        audio: "assets/audios/djaeo.mp3",
        sentido_de: "Ação de derramar lágrimas ou manifestação de tristeza",
        falante: "Uso geral",
        exemplos: [
            "Mitã odjae'o.",
            "Mba'erã redjae'o?",
            "Aní redjae'o!"
        ],
        traducao: [
            "A criança está chorando.",
            "Por que você está chorando?",
            "Não chore!"
        ]
    },
      {
    palavra: "djaetxa",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vamos ver, vamos olhar.",
    audio: "assets/audios/djaetxa.mp3",
    sentido_de: "Ação coletiva de visualizar ou observar algo (1ª pessoa plural inclusiva)",
    falante: "Uso geral",
    exemplos: [
      "Djaetxa mba'e pa oĩ.",
      "Djaetxa ko'áỹ!",
      "Dja'a, djaetxa tekoa."
    ],
    traducao: [
      "Vamos ver o que tem.",
      "Vamos ver agora!",
      "Vamos, vamos ver a aldeia."
    ]
  },
  {
    palavra: "djagwarete",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Onça-pintada, onça verdadeira (lit. 'fera/animal carnívoro verdadeiro').",
    audio: "assets/audios/djagwarete.mp3",
    sentido_de: "Mamífero carnívoro felino de grande porte",
    falante: "Uso geral",
    exemplos: [
      "Oĩ djagwarete ka'agwy-pe.",
      "Djagwarete iporã ha imbarete."
    ],
    traducao: [
      "Tem onça-pintada na mata.",
      "A onça-pintada é bonita e forte."
    ]
  },
  {
    palavra: "Gwata",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Andar, caminhar.",
    audio: "assets/audios/gwata.mp3",
    sentido_de: "Ação física de locomover-se a pé",
    falante: "Uso geral",
    exemplos: [
      "Txe gwata!",
      "Regwwata ka'agwy-rupi.",
      "Ymba ogwata tekoa-pe."
    ],
    traducao: [
      "Eu ando!",
      "Você caminha pela mata.",
      "O animal anda na aldeia."
    ]
  },
  {
    palavra: "djaiko-aty",
    tipo: "substantivo",
    categoria: "Localização",
    significado: "Onde vivemos, nossa morada, nossa comunidade, povoado, lugar de convivência.",
    audio: "assets/audios/djaiko_aty.mp3",
    sentido_de: "Espaço comunitário, morada coletiva ou aldeia",
    falante: "Uso geral",
    exemplos: [
      "Iporã nhande djaiko-aty.",
      "Dja'a nhande djaiko-aty-pe.",
      "Ko'ápe oĩ nhande djaiko-aty."
    ],
    traducao: [
      "O lugar onde vivemos é bonito.",
      "Vamos para a nossa comunidade.",
      "Aqui é o lugar onde vivemos."
    ]
  },
  {
    palavra: "djaipiró",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Descascar, tirar a casca, pelar (frutas, raízes, legumes).",
    audio: "assets/audios/djaipiro.mp3",
    sentido_de: "Remover a camada externa de alimentos (1ª pessoa plural inclusiva)",
    falante: "Uso geral",
    exemplos: [
      "Djaipiró mandi'o!",
      "Djaipiró pakowa.",
      "Dja'a djaipiró awati."
    ],
    traducao: [
      "Vamos descascar mandioca!",
      "Vamos descascar a banana.",
      "Vamos descascar o milho."
    ]
  },
  {
    palavra: "djaipyy",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vamos pegar, vamos segurar, vamos agarrar.",
    audio: "assets/audios/djaipyy.mp3",
    sentido_de: "Ação de segurar ou capturar com as mãos (1ª pessoa plural inclusiva)",
    falante: "Uso geral",
    exemplos: [
      "Djaipyy ñande pó-pe.",
      "Dja'a djaipyy ywyra.",
      "Djaipyy ko'áỹ!"
    ],
    traducao: [
      "Vamos pegar com as mãos / dar as mãos.",
      "Vamos pegar a madeira.",
      "Vamos pegar agora!"
    ]
  },
  {
    palavra: "djakaré",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Jacaré.",
    audio: "assets/audios/djakare.mp3",
    sentido_de: "Réptil aquático de grande porte",
    falante: "Uso geral",
    exemplos: [
      "Oĩ djakaré ỹ-pe.",
      "Djaetxa djakaré!",
      "Djakaré gwasu oĩ ysyry-pe."
    ],
    traducao: [
      "Tem jacaré na água.",
      "Vamos ver o jacaré!",
      "Tem um jacaré grande no rio."
    ]
  },
  {
    palavra: "djakaru",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vamos comer, vamos fazer a refeição.",
    audio: "assets/audios/djakaru.mp3",
    sentido_de: "Ação coletiva de alimentar-se (1ª pessoa plural inclusiva)",
    falante: "Uso geral",
    exemplos: [
      "Dja'a, djakaru!",
      "Djakaru tekoa-pe.",
      "Edju, djakaru ko'áỹ!"
    ],
    traducao: [
      "Vamos, vamos comer!",
      "Vamos comer na aldeia.",
      "Vem, vamos comer agora!"
    ]
  },
  {
    palavra: "djakwaru",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vamos fazer xixi, vamos mijar, urinar.",
    audio: "assets/audios/djakwaru.mp3",
    sentido_de: "Ação fisiológica de urinar (1ª pessoa plural inclusiva)",
    falante: "Uso geral",
    exemplos: [
      "Dja'a, djakwaru ka'agwy-pe.",
      "Mitã oho okwaru-haguã.",
      "Txe kwaru-se."
    ],
    traducao: [
      "Vamos, vamos fazer xixi no mato.",
      "A criança foi para fazer xixi.",
      "Estou com vontade de fazer xixi."
    ]
  },
  {
    palavra: "djama'ẽ",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vamos olhar, vamos observar, prestar atenção.",
    audio: "assets/audios/djamae.mp3",
    sentido_de: "Direcionar a visão com atenção (1ª pessoa plural inclusiva)",
    falante: "Uso geral",
    exemplos: [
      "Djama'ẽ kwarahy-re!",
      "Dja'a djama'ẽ mymba kuery-re.",
      "Edju, djama'ẽ ko'ápe!"
    ],
    traducao: [
      "Vamos olhar para o sol!",
      "Vamos olhar / observar os animais.",
      "Vem, vamos olhar aqui!"
    ]
  },
  {
    palavra: "mondoró / mondoro",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Arrancar, rasgar, romper.",
    audio: "assets/audios/mondoro.mp3",
    sentido_de: "Ação de rasgar materiais ou colher arrancando plantas",
    falante: "Uso geral",
    exemplos: [
      "Dja'a djamondoró mandi´o!",
      "Mitã omondoró kuatia.",
      "Amondoró piri-piri."
    ],
    traducao: [
      "Vamos arrancar mandioca!",
      "A criança rasgou o papel.",
      "Arranquei o capim."
    ]
  },
  {
    palavra: "djape'a",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Lenha, madeira para o fogo.",
    audio: "assets/audios/djapea.mp3",
    sentido_de: "Pedaços de madeira destinados à queima para produzir fogo",
    falante: "Uso geral",
    exemplos: [
      "Dja'a djamondoró djape'a!",
      "Oĩ djape'a ojapepo-pe.",
      "Che aipota djape'a tata-pe guarã."
    ],
    traducao: [
      "Vamos buscar lenha!",
      "Tem lenha em casa.",
      "Eu quero lenha para o fogo."
    ]
  },
  {
    palavra: "guarã / -guarã",
    tipo: "pós-posição / sufixo",
    categoria: "Pós-posições",
    significado: "Para, destinado a, para ser usado como, com a finalidade de.",
    audio: "assets/audios/guara.mp3",
    sentido_de: "Indica finalidade, destino ou beneficiário de algo",
    falante: "Uso geral",
    exemplos: [
      "Oĩ djape'a tata-pe guarã.",
      "Ko mba'e nde-ve guarã.",
      "Karai-pe guarã."
    ],
    traducao: [
      "Tem lenha para o fogo.",
      "Esta coisa é para você.",
      "Para o senhor / para o homem."
    ]
  },
  {
    palavra: "piri-piri / piri",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Junco, capim de brejo/várzea, planta de beira de rio.",
    audio: "assets/audios/piri_piri.mp3",
    sentido_de: "Vegetação típica de áreas úmidas e margens de rios",
    falante: "Uso geral",
    exemplos: [
      "Amondoró piri-piri ỹ syry-pe.",
      "Oĩ piri-piri yrwé-pe.",
      "Dja'a djamondoró piri-piri."
    ],
    traducao: [
      "Arranquei o junco na beira do rio.",
      "Tem junco na lagoa.",
      "Vamos arrancar capim do brejo."
    ]
  },
  {
    palavra: "djapo",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Fazer, criar, construir.",
    audio: "assets/audios/djapo.mp3",
    sentido_de: "Ação de confeccionar, fabricar ou realizar algo",
    falante: "Uso geral",
    exemplos: [
      "Mba'e redjapo?",
      "Adjapo tembi'u.",
      "Djadjapo tata!"
    ],
    traducao: [
      "O que você está fazendo?",
      "Eu faço comida.",
      "Vamos fazer fogo!"
    ]
  },
  {
    palavra: "djaporaí",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vamos cantar, cantamos.",
    audio: "assets/audios/djaporai.mp3",
    sentido_de: "Entoar cantos sagrados ou festivos (1ª pessoa plural inclusiva)",
    falante: "Uso geral",
    exemplos: [
      "Dja'a, djaporaí opy-pe!",
      "Mitã kuery djaporaí wy'a-pe.",
      "Ko'ágwã djaporaí."
    ],
    traducao: [
      "Vamos, vamos cantar na opy!",
      "As crianças, vamos cantar com alegria.",
      "Agora vamos cantar."
    ]
  },
  {
    palavra: "djapy",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Queimar, incendiar, tostar.",
    audio: "assets/audios/djapy.mp3",
    sentido_de: "Ação de atear fogo ou submeter ao calor do fogo",
    falante: "Uso geral",
    exemplos: [
      "Djadjapy djape'a tata-pe.",
      "Mitã odjapy kuatia.",
      "Adjapy tembi´u."
    ],
    traducao: [
      "Vamos queimar a lenha no fogo.",
      "A criança queimou o papel.",
      "Queimei a comida."
    ]
  },
  {
    palavra: "djatsy",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Lua, mês.",
    audio: "assets/audios/djatsy.mp3",
    sentido_de: "Astro noturno ou marcação de ciclo de tempo lunar",
    falante: "Uso geral",
    exemplos: [
      "Djatsy imyawerá pyhare-py.",
      "Omaẽ djatsy pyahu.",
      "Mboy djatsy-re redju-ta?"
    ],
    traducao: [
      "A lua brilha de noite.",
      "Chegou a lua nova.",
      "Em quantos meses você vai vir?"
    ]
  },
  {
    palavra: "djatsy-tata",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Estrela.",
    audio: "assets/audios/djatsy_tata.mp3",
    sentido_de: "Corpo celeste visível no céu noturno (lit. 'fogo da lua')",
    falante: "Uso geral",
    exemplos: [
      "Oĩ heta djatsy-tata aryrei-pe.",
      "Djatsy-tata imyverá pyhare-py.",
      "Ama'ẽ djatsy-tata-re."
    ],
    traducao: [
      "Tem muitas estrelas no céu.",
      "A estrela brilha de noite.",
      "Eu olho para as estrelas."
    ]
  },
  {
    palavra: "djaty",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Plantar, cultivar, semear.",
    audio: "assets/audios/djaty.mp3",
    sentido_de: "Colocar sementes ou mudas na terra para cultivo",
    falante: "Uso geral",
    exemplos: [
      "Adjaty awaty kokoy-pe.",
      "Dja'a djaty mandio!",
      "Txeru odjaty tembi'u."
    ],
    traducao: [
      "Eu planto milho na roça.",
      "Vamos plantar mandioca!",
      "Meu pai planta comida."
    ]
  },
  {
    palavra: "djagwa",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Onça; felino/canídeo; cachorro (na fala cotidiana).",
    audio: "assets/audios/djagwa.mp3",
    sentido_de: "Refere-se genericamente a animais carnívoros quadrupedes",
    falante: "Uso geral",
    exemplos: [
      "Djagwa oñarõ.",
      "Oetxa djagwa ka'agwy-pe."
    ],
    traducao: [
      "O cachorro/onça rosnou.",
      "Viu uma onça na mata."
    ]
  },
  {
    palavra: "djagwata",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vamos andar, vamos caminhar, vamos passear.",
    audio: "assets/audios/djagwata.mp3",
    sentido_de: "Ação de deslocar-se a pé coletivamente (1ª pessoa plural inclusiva)",
    falante: "Uso geral",
    exemplos: [
      "Dja'a, djagwata!",
      "Djagwata ka'agwy-rupi.",
      "Djagwata tekoa-pe."
    ],
    traducao: [
      "Vamos, vamos andar!",
      "Vamos caminhar pela mata.",
      "Vamos andar na aldeia."
    ]
  },
  
  
  
  
  
  
      {
    palavra: "djaiko-aty",
    tipo: "substantivo",
    categoria: "Localização",
    significado: "Onde vivemos, nossa morada, nossa comunidade, povoado, lugar de convivência.",
    audio: "assets/audios/djaiko-aty.mp3",
    sentido_de: "Comunidade / Morada",
    falante: "Nhandewa",
    exemplos: [
      "Iporã nhande djaiko-aty.",
      "Dja'a nhande djaiko-aty-pe.",
      "Ko'ápe oĩ nhande djaiko-aty."
    ],
    traducao: [
      "O lugar onde vivemos é bonito.",
      "Vamos para a nossa comunidade.",
      "Aqui é o lugar onde vivemos."
    ]
  },
  {
    palavra: "ro'y porã",
    tipo: "expressão",
    categoria: "Expressão / Clima",
    significado: "Está bem frio / Bastante frio.",
    audio: "assets/audios/roy-pora.mp3",
    sentido_de: "Frio intenso / Clima frio",
    falante: "uso geral",
    exemplos: [
      "Ko'ápe iro'y porã ko'ẽ-re.",
      "Ro'y porã, aata adjepe'e!"
    ],
    traducao: [
      "Aqui está bem frio de manhã.",
      "Está bem frio, vou me esquentar!"
    ]
  },
  {
    palavra: "djeré",
    tipo: "verbo",
    categoria: "Verbo / Posição",
    significado: "Virar, rodar, girar, dar uma volta, ao redor.",
    audio: "assets/audios/djere.mp3",
    sentido_de: "Girar / Dar volta",
    falante: "uso geral",
    exemplos: [
      "Aha adjeré-ta.",
      "Edjeré tape-re!",
      "Txe akãndjeré."
    ],
    traducao: [
      "Vou dar uma volta.",
      "Vire no caminho / Siga pelo caminho!",
      "Estou tonto (minha cabeça está rodando)."
    ]
  },
  {
    palavra: "djerowia",
    tipo: "verbo",
    categoria: "Verbo / Sentimento",
    significado: "Ter orgulho, confiar, estar alegre de satisfação/confiança.",
    audio: "assets/audios/djerowia.mp3",
    sentido_de: "Confiar / Orgulhar-se",
    falante: "uso geral",
    exemplos: [
      "Txe djerowia nde-re.",
      "Odjerowia okyrypy-re.",
      "Ore rojerovia Túpã-re."
    ],
    traducao: [
      "Tenho orgulho de você / Confio em você.",
      "Ele tem orgulho/confiança da sua força.",
      "Nós confiamos em Deus."
    ]
  },
  {
    palavra: "mbarete",
    tipo: "substantivo / adjetivo",
    categoria: "Expressões",
    significado: "Força geral, resistência, poder, ser forte, intensidade física ou da natureza.",
    audio: "assets/audios/mbarete.mp3",
    sentido_de: "Força / Forte",
    falante: "uso geral",
    exemplos: [
      "Emboja mbarete-pe!",
      "Ywytu mbarete oipedju oká-pe.",
      "Che mbarete amba'apo haguã ko'ẽ-re."
    ],
    traducao: [
      "Empurre / encoste com força!",
      "Vento forte sopra lá fora.",
      "Tenho força para trabalhar de manhã."
    ]
  },
  {
    palavra: "peju / oipeju",
    tipo: "verbo",
    categoria: "Verbo / Ação",
    significado: "Soprar, assoprar, ventar (ação do vento ou de assoprar algo).",
    audio: "assets/audios/peju.mp3",
    sentido_de: "Soprar / Ventar",
    falante: "uso geral",
    exemplos: [
      "Ywytu mbarete oipeju oká-pe.",
      "Eipeju tata-re mbyaku haguã!",
      "Oipeju ywytu ro'y porã."
    ],
    traducao: [
      "O vento forte sopra lá fora / no quintal.",
      "Assopre no fogo para esquentar!",
      "Sopra um vento bem frio."
    ]
  },
  {
    palavra: "djerure",
    tipo: "verbo",
    categoria: "Verbo / Ação",
    significado: "Pedir, rogar, implorar, solicitar algo a alguém ou a Deus.",
    audio: "assets/audios/djerure.mp3",
    sentido_de: "Pedir / Implorar",
    falante: "uso geral",
    exemplos: [
      "Odjerure marangatu-re oho haguã tape-re.",
      "Adjerure pytyvõ-re mba'eapo-pe.",
      "Odjerure y-re i'uhéi ramõ."
    ],
    traducao: [
      "Ele pede força espiritual para seguir pelo caminho.",
      "Eu peço por ajuda no trabalho.",
      "Ele pede água quando está com sede."
    ]
  },
  {
    palavra: "marangatu",
    tipo: "substantivo / adjetivo",
    categoria: "Expressões / Espiritualidade",
    significado: "Força espiritual, virtude, bondade sagrada, bênção, proteção divina.",
    audio: "assets/audios/marangatu.mp3",
    sentido_de: "Força espiritual / Sagrado",
    falante: "uso geral",
    exemplos: [
      "Nhanderu ome'ẽ marangatu ore-we.",
      "Odjerure marangatu-re oho haguã tape-re.",
      "Kowá ñe'ẽ ogwereko marangatu."
    ],
    traducao: [
      "Nhanderú nos dá força espiritual / bênção.",
      "Ele pede força espiritual para seguir pelo caminho.",
      "Esta palavra tem força sagrada."
    ]
  },
  {
    palavra: "djewy",
    tipo: "verbo",
    categoria: "Verbo / Repetição",
    significado: "Voltar, retornar, regressar, de novo, outra vez.",
    audio: "assets/audios/djewy.mp3",
    sentido_de: "Voltar / Retornar",
    falante: "uso geral",
    exemplos: [
      "Aha rire, adjewy-ta ko'ápe.",
      "Edjewy py'ae!",
      "Oimẽ djewy kowá-pe."
    ],
    traducao: [
      "Depois de ir, eu vou voltar aqui.",
      "Volte depressa!",
      "Está aqui de novo."
    ]
  },
  {
    palavra: "irundy",
    tipo: "numeral",
    categoria: "Numeral",
    significado: "Número quatro (4).",
    audio: "assets/audios/irundy.mp3",
    sentido_de: "Número quatro",
    falante: "uso geral",
    exemplos: [
      "Irundy ipy oguereko kowá ymbá.",
      "Ame'ẽ-ta irundy djety nde-we."
    ],
    traducao: [
      "Este animal tem quatro patas (pés).",
      "Vou te dar quatro batatas-doces."
    ]
  },
  {
    palavra: "kupé / kupé-pe",
    tipo: "substantivo / pós-posição",
    categoria: "Posição / Pós-posição",
    significado: "Atrás, costas, parte de trás, fundo.",
    audio: "assets/audios/kupe.mp3",
    sentido_de: "Atrás / Costas",
    falante: "uso geral",
    exemplos: [
      "Oka oĩ oga kupé-pe.",
      "Opyta che kupé-pe.",
      "Ywyty kupé-pe oĩ ka'agwy."
    ],
    traducao: [
      "O quintal fica atrás / no fundo da casa.",
      "Ficou atrás de mim / nas minhas costas.",
      "Atrás do morro tem uma mata."
    ]
  },
  {
    palavra: "oká / oká-pe",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Quintal, terreiro, lado de fora, espaço aberto ao redor da casa.",
    audio: "assets/audios/oka.mp3",
    sentido_de: "Quintal / Lado de fora",
    falante: "uso geral",
    exemplos: [
      "Yvytu mbarete oipeju oká-pe.",
      "Mitã oñepoñy oká-pe.",
      "Añesẽ-ta oká-pe."
    ],
    traducao: [
      "Vento forte sopra no quintal / lá fora.",
      "A criança engatinha no quintal.",
      "Vou sair para o quintal / lá fora."
    ]
  },
  {
    palavra: "oga / oga-pe",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Casa, habitação, lar, espaço interno.",
    audio: "assets/audios/oga.mp3",
    sentido_de: "Casa / Lar",
    falante: "uso geral",
    exemplos: [
      "Ywytu ro'y oiké oga-pe.",
      "Oka oĩ oga kupé-pe."
    ],
    traducao: [
      "Vento frio entra na casa.",
      "O quintal fica atrás da casa."
    ]
  },
  {
    palavra: "rugwái / rugwái-pe",
    tipo: "pós-posição",
    categoria: "Posição / Pós-posição",
    significado: "No fim, no limite distante, extremidade (literalmente: na cauda/ponta de um caminho ou mata).",
    audio: "assets/audios/rugwai.mp3",
    sentido_de: "No fim / Extremidade",
    falante: "uso geral",
    exemplos: [
      "Aha-ta(aata) tape rugwái-pe.",
      "Ka'agwy rugwái-pe oĩ y-syry."
    ],
    traducao: [
      "Vou até o fim do caminho / estrada.",
      "No fundo / fim da mata tem um riacho."
    ]
  },
  {
    palavra: "djapywe'ỹ / djapyweiry",
    tipo: "substantivo / adjetivo",
    categoria: "Expressões",
    significado: "Sem fim, infinito, eterno, sem limite.",
    audio: "assets/audios/djapyweey.mp3",
    sentido_de: "Infinito / Sem fim",
    falante: "uso geral",
    exemplos: [
      "Kowá tape oguereko djapyweiry.",
      "Nhanderú ome'ẽ marangatu djapywe'ỹ ore-we.",
      "Ywytu oipeju py'aĩ djapyweiry-pe."
    ],
    traducao: [
      "Este caminho é sem fim / infinito.",
      "Nhanderú nos dá bênção / força espiritual infinita.",
      "O vento sopra manso no infinito."
    ]
  },
  {
    palavra: "py'aĩ",
    tipo: "adjetivo / substantivo",
    categoria: "Expressões",
    significado: "Manso, calmo, tranquilo, sereno, suave, paz no coração.",
    audio: "assets/audios/pyai.mp3",
    sentido_de: "Manso / Tranquilo",
    falante: "uso geral",
    exemplos: [
      "Ywytu oipeju py'aĩ.",
      "Txe py'aĩ oimẽ-te ko'ápe.",
      "Mbya ogwereko py'aĩ."
    ],
    traducao: [
      "O vento sopra manso / suavemente.",
      "Estou bem calmo / com o coração tranquilo aqui.",
      "A pessoa tem mansidão / é serena."
    ]
  },
  {
    palavra: "djigwero / adjigwero'a-ta, djiko'a",
    tipo: "verbo",
    categoria: "Verbo / Ação",
    significado: "Brigar, lutar, discutir / pelejar um contra o outro.",
    audio: "assets/audios/djigwero.mp3",
    sentido_de: "Brigar / Pelejar",
    falante: "uso geral",
    exemplos: [
      "Mitã-kwery odjigwero'a oká-pe.",
      "Txe nda-djigwero'atsei nde-we.",
      "Ha'e-kwery odjigwero'a tape-pe."
    ],
    traducao: [
      "As crianças estão brigando no quintal.",
      "Eu não quero brigar com você.",
      "Eles estão brigando no caminho / na rua."
    ]
  },
  {
    palavra: "Djo'ó",
    tipo: "verbo",
    categoria: "Verbo Recíproco / Conflito Geral",
    significado: "Brigar, discutir, disputar entre si",
    audio: "assets/audios/djoo.mp3",
    sentido_de: "Brigar entre si / Disputar",
    falante: "uso geral",
    exemplos: [
      "Kowá awá-kuery odjo'ó tapé-rupi.",
      "Ha'é'i edjo'ó oga-py.",
      "Mba'ere-pe pedjo'ó nhandewé?"
    ],
    traducao: [
      "Estes homens estão brigando pelo caminho.",
      "Chega de brigar em casa.",
      "Por que vocês estão brigando entre si?"
    ]
  },
  {
    palavra: "Ha'é'i",
    tipo: "interjeição / partícula",
    categoria: "Partícula / Interjeição de Interrupção Imediata",
    significado: "Chega de / Pare de (corta uma ação no momento em que ela acontece)",
    audio: "assets/audios/haei.mp3",
    sentido_de: "Chega de / Pare de",
    falante: "uso geral",
    exemplos: [
      "Ha'é'i edjawu-wei!",
      "Ha'é'i emonhã kowá mba'e!",
      "Ha'é'i edjo'ó oga-py!"
    ],
    traducao: [
      "Chega de continuar falando!",
      "Pare de fazer essa coisa!",
      "Chega de brigar em casa!"
    ]
  },
  {
    palavra: "Ha'éma",
    tipo: "interjeição / partícula",
    categoria: "Partícula de Limite / Conclusão de Ação",
    significado: "Já chega / Já basta / Já deu (indica que a ação atingiu o limite acumulado)",
    audio: "assets/audios/haema.mp3",
    sentido_de: "Já chega / Já basta",
    falante: "uso geral",
    exemplos: [
      "Ha'éma! Eky'ẽ-ke aỹ.",
      "Ha'éma pedjigwero'a oká-pe!",
      "Ha'éma, dja'óma oga-py."
    ],
    traducao: [
      "Já chega! Fique quieto agora.",
      "Já chega de vocês brigarem/se atracarem no quintal!",
      "Já deu/já chega, já vamos para casa."
    ]
  },
  {
    palavra: "Emonhã / Emoña",
    tipo: "verbo",
    categoria: "Verbo",
    significado: "Faça / Fabrique / Crie / Produza (Imperativo de 'Moñã')",
    audio: "assets/audios/emonha.mp3",
    sentido_de: "Faça / Fabrique",
    falante: "uso geral",
    exemplos: [
      "Ha'é'i emoñã kowá mba'e!",
      "Emoñã mbudjapé he'ẽva.",
      "Emoñã tembi'u ky'a-re'ỹ."
    ],
    traducao: [
      "Pare de fazer essa coisa!",
      "Faça um pão doce.",
      "Faça uma comida limpa (sem sujeira)."
    ]
  },
  {
    palavra: "Nda'i",
    tipo: "partícula",
    categoria: "Partícula de Negação / Interrupção Categórica",
    significado: "Basta / Chega disso / Não mais (negação enfática de continuidade)",
    audio: "assets/audios/ndai.mp3",
    sentido_de: "Basta / Chega disso",
    falante: "uso geral",
    exemplos: [
      "Nda'i omya'ẽ hikuái ywy-re!",
      "Nda'i nhandewé kowá aywu!",
      "Nda'i renoñã-wei ky'a."
    ],
    traducao: [
      "Basta de eles brigarem/altercarem por causa de terra!",
      "Chega disso/não mais essa barulheira entre nós!",
      "Basta de continuar fazendo sujeira."
    ]
  },
  {
    palavra: "Mya'ẽ",
    tipo: "verbo",
    categoria: "Verbo Transitivo / Conflito Verbal",
    significado: "Brigar verbalmente, altercar, reclamar furiosamente, xingar",
    audio: "assets/audios/myae.mp3",
    sentido_de: "Brigar verbalmente / Reclamar",
    falante: "uso geral",
    exemplos: [
      "Nda'i omya'ẽ hikuái ywy-re.",
      "Kowá avá omya'ẽ txupe.",
      "Txe nda-mya'ẽ-i kowá mitã."
    ],
    traducao: [
      "Basta de eles brigarem/altercarem por causa de terra.",
      "Este homem brigou/reclamou furiosamente com ele.",
      "Eu não brigo/não xingo esta criança."
    ]
  },
  {
    palavra: "gwaru-gwaru",
    tipo: "substantivo",
    categoria: "Expressões l.",
    significado: "Ânsia de vômito, enjoo, náusea, mal-estar no estômago.",
    audio: "assets/audios/gwaru-gwaru.mp3",
    sentido_de: "Enjoo / Ânsia de vômito",
    falante: "uso geral",
    exemplos: [
      "Txe py'a oguereko gwaru-gwaru.",
      "Mitã oguereko gwaru-gwaru pywhare.",
      "Nda'usẽtsei txi'u, txe gwaru-gwarutse."
    ],
    traducao: [
      "Meu estômago/fígado está com ânsia de vômito.",
      "A criança teve enjoo/náusea ontem à noite.",
      "Não quero comer comida, estou com vontade de vomitar."
    ]
  },
  {
    palavra: "Pynhare / Pyhare",
    tipo: "substantivo",
    categoria: "Expressões/ Tempo",
    significado: "Noite, de noite, durante a noite.",
    audio: "assets/audios/pyhare.mp3",
    sentido_de: "Noite / De noite",
    falante: "uso geral",
    exemplos: [
      "Mitã oguereko gwaru-gwaru Pyhare.",
      "Pyhare-pe ywyty opyta ro'y-pe.",
      "Txe ake porã Pyhare."
    ],
    traducao: [
      "A criança teve enjoo/náusea de noite.",
      "De noite o morro fica no frio.",
      "Eu dormi bem de noite."
    ]
  },
  {
    palavra: "djikwaa",
    tipo: "verbo",
    categoria: "Verbo / Ação Reflexiva",
    significado: "Aparecer, surgir, mostrar-se, tornar-se visível ou conhecido.",
    audio: "assets/audios/djikwaa.mp3",
    sentido_de: "Aparecer / Surgir",
    falante: "homem",
    exemplos: [
      "Kwaray odjikwaa ywyty kupe-pe.",
      "djagwarete odjikwaa tape-pe.",
      "Txe-ryke'y ndadjikwaai Pyhare."
    ],
    traducao: [
      "O sol apareceu atrás do morro.",
      "A onça apareceu no caminho.",
      "Meu irmão mais velho não apareceu de noite."
    ]
  },
  {
    palavra: "djepe'e",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Esquentar-se, aquecer-se (especialmente perto do fogo/fogueira).",
    audio: "assets/audios/djepee.mp3",
    sentido_de: "Esquentar-se / Aquecer-se",
    falante: "uso geral",
    exemplos: [
      "Ro'y porã, aata adjepe'e tata-re.",
      "Edju edjepe'e kowá-pe!",
      "Iporã adjepe'e ko'ẽ-re."
    ],
    traducao: [
      "Está muito frio, vou me esquentar no fogo.",
      "Vem se esquentar aqui!",
      "É bom se esquentar no fogo de manhã."
    ]
  },
  {
    palavra: "ro'y porã",
    tipo: "expressão",
    categoria: "Expressões",
    significado: "Está bem frio / Bastante frio.",
    audio: "assets/audios/roy-pora.mp3",
    sentido_de: "Frio intenso / Clima frio",
    falante: "uso geral",
    exemplos: [
      "Ko'ápe iro'y porã ko'ẽ-re.",
      "Ro'y porã, aata adjepe'e!"
    ],
    traducao: [
      "Aqui está bem frio de manhã.",
      "Está bem frio, vou me esquentar!"
    ]
  },
  {
    palavra: "djeré",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Virar, rodar, girar, dar uma volta, ao redor.",
    audio: "assets/audios/djere.mp3",
    sentido_de: "Girar / Dar volta",
    falante: "uso geral",
    exemplos: [
      "Aha adjeré-ta.",
      "Edjeré tape-re!",
      "Txe akãndjeré."
    ],
    traducao: [
      "Vou dar uma volta.",
      "Vire no caminho / Siga pelo caminho!",
      "Estou tonto (minha cabeça está rodando)."
    ]
  },
  {
    palavra: "djerowia",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Ter orgulho, confiar, estar alegre de satisfação/confiança.",
    audio: "assets/audios/djerowia.mp3",
    sentido_de: "Confiar / Orgulhar-se",
    falante: "uso geral",
    exemplos: [
      "Txe djerowia nde-re.",
      "Odjerowia okyrypy-re.",
      "Ore rodjerowia Túpã-re."
    ],
    traducao: [
      "Tenho orgulho de você / Confio em você.",
      "Ele tem orgulho/confiança da sua força.",
      "Nós confiamos em Deus."
    ]
  },
  {
    palavra: "mbarete",
    tipo: "substantivo / adjetivo",
    categoria: "Expressões",
    significado: "Força geral, resistência, poder, ser forte, intensidade física ou da natureza.",
    audio: "assets/audios/mbarete.mp3",
    sentido_de: "Força / Forte",
    falante: "uso geral",
    exemplos: [
      "Emboja mbarete-pe!",
      "Ywytu mbarete oipedju oká-pe.",
      "Txembarete amba'apo haguã ko'ẽ-re."
    ],
    traducao: [
      "Empurre / encoste com força!",
      "Vento forte sopra lá fora.",
      "Tenho força para trabalhar de manhã."
    ]
  },
  {
    palavra: "peju / oipeju",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Soprar, assoprar, ventar (ação do vento ou de assoprar algo).",
    audio: "assets/audios/peju.mp3",
    sentido_de: "Soprar / Ventar",
    falante: "uso geral",
    exemplos: [
      "Ywytu mbarete oipeju oká-pe.",
      "Eipeju tata-re mbyaku haguã!",
      "Oipeju ywytu ro'y porã."
    ],
    traducao: [
      "O vento forte sopra lá fora / no quintal.",
      "Assopre no fogo para esquentar!",
      "Sopra um vento bem frio."
    ]
  },
  {
    palavra: "djerure",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Pedir, rogar, implorar, solicitar algo a alguém ou a Deus.",
    audio: "assets/audios/djerure.mp3",
    sentido_de: "Pedir / Implorar",
    falante: "uso geral",
    exemplos: [
      "Odjerure marangatu-re oho haguã tape-re.",
      "Adjerure pytyvõ-re mba'eapo-pe.",
      "Odjerure y-re i'uhéi ramõ."
    ],
    traducao: [
      "Ele pede força espiritual para seguir pelo caminho.",
      "Eu peço por ajuda no trabalho.",
      "Ele pede água quando está com sede."
    ]
  },
  {
    palavra: "marangatu",
    tipo: "substantivo / adjetivo",
    categoria: "Expressões",
    significado: "Força espiritual, virtude, bondade sagrada, bênção, proteção divina.",
    audio: "assets/audios/marangatu.mp3",
    sentido_de: "Força espiritual / Sagrado",
    falante: "uso geral",
    exemplos: [
      "Nhanderu ome'ẽ marangatu ore-we.",
      "Odjerure marangatu-re oho haguã tape-re.",
      "Kowá ñe'ẽ ogwereko marangatu."
    ],
    traducao: [
      "Nhanderú nos dá força espiritual / bênção.",
      "Ele pede força espiritual para seguir pelo caminho.",
      "Esta palavra tem força sagrada."
    ]
  },
  {
    palavra: "djewy",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Voltar, retornar, regressar, de novo, outra vez.",
    audio: "assets/audios/djewy.mp3",
    sentido_de: "Voltar / Retornar",
    falante: "uso geral",
    exemplos: [
      "Aha rire, adjewy-ta ko'ápe.",
      "Edjewy py'ae!",
      "Oimẽ djewy kowá-pe."
    ],
    traducao: [
      "Depois de ir, eu vou voltar aqui.",
      "Volte depressa!",
      "Está aqui de novo."
    ]
  },
  {
    palavra: "irundy",
    tipo: "numeral",
    categoria: "Expressões",
    significado: "Número quatro (4).",
    audio: "assets/audios/irundy.mp3",
    sentido_de: "Número quatro",
    falante: "uso geral",
    exemplos: [
      "Kowá ymbá irundy oguereko ipy.",
      "Ame'ẽ-ta irundy djety nde-we."
    ],
    traducao: [
      "Este animal tem quatro patas (pés).",
      "Vou te dar quatro batatas-doces."
    ]
  },
  {
    palavra: "oñepoñy / poñy",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Engatinhar, andar de quatro apoios (mãos e joelhos/pés no chão), rastejar.",
    audio: "assets/audios/pone.mp3",
    sentido_de: "Engatinhar / Rastejar",
    falante: "uso geral",
    exemplos: [
      "Mitã oñepoñy ywy-re.",
      "Apoñy-ta ka'agwy rugwái-pe."
    ],
    traducao: [
      "A criança engatinha / anda de quatro no chão.",
      "Vou engatinhar / ir de quatro no fundo da mata."
    ]
  },
    {
    palavra: "djaiko-aty",
    tipo: "substantivo",
    categoria: "Localização",
    significado: "Onde vivemos, nossa morada, nossa comunidade, povoado, lugar de convivência.",
    audio: "assets/audios/djaiko-aty.mp3",
    sentido_de: "Comunidade / Morada",
    falante: "uso geral",
    exemplos: [
      "Iporã nhande djaiko-aty.",
      "Dja'a nhande djaiko-aty-pe.",
      "Ko'ápe oĩ nhande djaiko-aty."
    ],
    traducao: [
      "O lugar onde vivemos é bonito.",
      "Vamos para a nossa comunidade.",
      "Aqui é o lugar onde vivemos."
    ]
  },
  {
    palavra: "djaipiró",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Descascar, tirar a casca, pelar (frutas, raízes, legumes).",
    audio: "assets/audios/djaipiro.mp3",
    sentido_de: "Descascar / Pelar",
    falante: "uso geral",
    exemplos: [
      "Djaipiró mandi'o!",
      "Djaipiró pakowa.",
      "Dja'a djaipiró awati."
    ],
    traducao: [
      "Vamos descascar mandioca!",
      "Vamos descascar a banana.",
      "Vamos descascar o milho."
    ]
  },
  {
    palavra: "djaipyy",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vamos pegar, vamos segurar, vamos agarrar.",
    audio: "assets/audios/djaipyy.mp3",
    sentido_de: "Pegar / Segurar",
    falante: "uso geral",
    exemplos: [
      "Djaipyy ñande pó-pe.",
      "Dja'a djaipyy ywyra.",
      "Djaipyy ko'áỹ!"
    ],
    traducao: [
      "Vamos pegar com as mãos / dar as mãos.",
      "Vamos pegar a madeira.",
      "Vamos pegar agora!"
    ]
  },
  {
    palavra: "djakaré",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Jacaré.",
    audio: "assets/audios/djakare.mp3",
    sentido_de: "Jacaré",
    falante: "uso geral",
    exemplos: [
      "Oĩ djakaré ỹ-pe.",
      "Djaetxa djakaré!",
      "Djakaré gwasu oĩ ysyry-pe."
    ],
    traducao: [
      "Tem jacaré na água.",
      "Vamos ver o jacaré!",
      "Tem um jacaré grande no rio."
    ]
  },
  {
    palavra: "djakaru",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vamos comer, vamos fazer a refeição.",
    audio: "assets/audios/djakaru.mp3",
    sentido_de: "Comer / Fazer refeição",
    falante: "uso geral",
    exemplos: [
      "Dja'a, djakaru!",
      "Djakaru tekoa-pe.",
      "Edju, djakaru ko'áỹ!"
    ],
    traducao: [
      "Vamos, vamos comer!",
      "Vamos comer na aldeia.",
      "Vem, vamos comer agora!"
    ]
  },
  {
    palavra: "djakwaru",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vamos fazer xixi, vamos mijar, urinar.",
    audio: "assets/audios/djakwaru.mp3",
    sentido_de: "Urinar / Fazer xixi",
    falante: "uso geral",
    exemplos: [
      "Dja'a, djakwaru ka'agwy-pe.",
      "Mitã oho okwaru-haguã.",
      "txe kwaru-se."
    ],
    traducao: [
      "Vamos, vamos fazer xixi no mato.",
      "A criança foi para fazer xixi.",
      "Estou com vontade de fazer xixi."
    ]
  },
  {
    palavra: "djama'ẽ",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vamos olhar, vamos observar, prestar atenção.",
    audio: "assets/audios/djamae.mp3",
    sentido_de: "Olhar / Observar",
    falante: "uso geral",
    exemplos: [
      "Djama'ẽ kwarahy-re!",
      "Dja'a djama'ẽ mymba kuery-re.",
      "Edju, djama'ẽ ko'ápe!"
    ],
    traducao: [
      "Vamos olhar para o sol!",
      "Vamos olhar / observar os animais.",
      "Vem, vamos olhar aqui!"
    ]
  },
  {
    palavra: "djape'a",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Lenha, madeira para o fogo.",
    audio: "assets/audios/djapea.mp3",
    sentido_de: "Lenha",
    falante: "uso geral",
    exemplos: [
      "Dja'a djamondoró djape'a!",
      "Oĩ djape'a ojapepo-pe.",
      "Che aipota djape'a tata-pe guarã."
    ],
    traducao: [
      "Vamos buscar lenha!",
      "Tem lenha em casa.",
      "Eu quero lenha para o fogo."
    ]
  },
  {
    palavra: "guarã / -guarã",
    tipo: "pós-posição",
    categoria: "Pós-posições",
    significado: "Para, destinado a, para ser usado como, com a finalidade de.",
    audio: "assets/audios/guara.mp3",
    sentido_de: "Para / Destinado a",
    falante: "uso geral",
    exemplos: [
      "Oĩ djape'a tata-pe guarã.",
      "Ko mba'e nde-ve guarã.",
      "Karai-pe guarã."
    ],
    traducao: [
      "Tem lenha para o fogo.",
      "Esta coisa é para você.",
      "Para o senhor / para o homem."
    ]
  },
  {
    palavra: "djapepo",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Panela, recipiente para cozinhar.",
    audio: "assets/audios/djapepo.mp3",
    sentido_de: "Panela",
    falante: "uso geral",
    exemplos: [
      "Emoĩ djapepo tata-pe!",
      "Djapepo-pe oĩ o'okwee.",
      "Txakeke djapepo aku-gwi!"
    ],
    traducao: [
      "Coloque a panela no fogo!",
      "Na panela tem carne.",
      "Cuidado, a panela está quente! (ou Cuidado por causa da panela quente!)"
    ]
  },
  {
    palavra: "djapo",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Fazer, criar, construir.",
    audio: "assets/audios/djapo.mp3",
    sentido_de: "Fazer / Criar",
    falante: "uso geral",
    exemplos: [
      "Mba'e redjapo?",
      "Adjapo tembi'u.",
      "Djadjapo tata!"
    ],
    traducao: [
      "O que você está fazendo?",
      "Eu faço comida.",
      "Vamos fazer fogo!"
    ]
  },
  {
    palavra: "djaporaí",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vamos cantar, cantamos.",
    audio: "assets/audios/djaporai.mp3",
    sentido_de: "Cantar",
    falante: "uso geral",
    exemplos: [
      "Dja'a, djaporaí opy-pe!",
      "Mitã kuery djaporaí wy'a-pe.",
      "Ko'ágwã djaporaí."
    ],
    traducao: [
      "Vamos, vamos cantar na opy!",
      "As crianças, vamos cantar com alegria.",
      "Agora vamos cantar."
    ]
  },
  {
    palavra: "djapy",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Queimar, incendiar, tostar.",
    audio: "assets/audios/djapy.mp3",
    sentido_de: "Queimar / Incendiar",
    falante: "uso geral",
    exemplos: [
      "Djadjapy djape'a tata-pe.",
      "Mitã odjapy kuatia.",
      "Adjapy tembi´u."
    ],
    traducao: [
      "Vamos queimar a lenha no fogo.",
      "A criança queimou o papel.",
      "Queimei a comida."
    ]
  },
  {
    palavra: "djaryi",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Avó, vovó.",
    audio: "assets/audios/djaryi.mp3",
    sentido_de: "Avó",
    falante: "uso geral",
    exemplos: [
      "Txedjaryi odjapo tembi'u.",
      "Djamaẽ tidjaryi renda'py.",
      "Tidjaryi oprai porã."
    ],
    traducao: [
      "Minha avó cozinha a comida.",
      "Vamos chegar na casa da minha avó.",
      "Minha avó canta bem."
    ]
  },
  {
    palavra: "djatéwy / djate'u",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Carrapato.",
    audio: "assets/audios/djatewy.mp3",
    sentido_de: "Carrapato",
    falante: "uso geral",
    exemplos: [
      "Oĩ djatéwy djagua-re.",
      "Ka'agwy-pe oĩ heta djatéwy.",
      "Txe tsu'u djatéwy."
    ],
    traducao: [
      "Tem carrapato no cachorro.",
      "Na mata tem muito carrapato.",
      "O carrapato me mordeu."
    ]
  },
  {
    palavra: "djatsy",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Lua, mês.",
    audio: "assets/audios/djatsy.mp3",
    sentido_de: "Lua / Mês",
    falante: "uso geral",
    exemplos: [
      "Djatsy imyawerá pyhare-py.",
      "Omaẽ djatsy pyahu.",
      "Mboy djatsy-re redju-ta?"
    ],
    traducao: [
      "A lua brilha de noite.",
      "Chegou a lua nova.",
      "Em quantos meses você vai vir?"
    ]
  },
  {
    palavra: "djatsy-tata",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Estrela.",
    audio: "assets/audios/djatsy-tata.mp3",
    sentido_de: "Estrela",
    falante: "uso geral",
    exemplos: [
      "Oĩ heta djatsy-tata aryrei-pe.",
      "Djatsy-tata imyverá pyhare-py.",
      "Ama'ẽ djatsy-tata-re."
    ],
    traducao: [
      "Tem muitas estrelas no céu.",
      "A estrela brilha de noite.",
      "Eu olho para as estrelas."
    ]
  },
  {
    palavra: "djaty",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Plantar, cultivar, semear.",
    audio: "assets/audios/djaty.mp3",
    sentido_de: "Plantar / Cultivar",
    falante: "homem",
    exemplos: [
      "Adjaty awaty kokoy-pe.",
      "Dja'a djaty mandio!",
      "Txeru odjaty tembi'u."
    ],
    traducao: [
      "Eu planto milho na roça.",
      "Vamos plantar mandioca!",
      "Meu pai planta comida."
    ]
  },
  {
    palavra: "Djau",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Tomar banho; lavar-se.",
    audio: "assets/audios/djau.mp3",
    sentido_de: "Tomar banho",
    falante: "uso geral",
    exemplos: [
      "Adjau.",
      "Redjau.",
      "Odjau.",
      "Nhadjaú.",
      "Pemdjau.",
      "Odjau kuery.",
      "Dja'a djadjau ỹ-pe!",
      "Mitã odjau ysyry-pe.",
      "Txe adjau-ta ko'aỹ."
    ],
    traducao: [
      "Eu tomo banho.",
      "Você toma banho.",
      "Ele/ela toma banho.",
      "Nós tomamos banho.",
      "Vocês tomam banho.",
      "Eles/elas tomam banho.",
      "Vamos tomar banho na água!",
      "A criança toma banho no rio.",
      "Eu vou tomar banho agora."
    ]
  },
  {
    palavra: "djau-aty",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Banheiro, local de banho.",
    audio: "assets/audios/djau-aty.mp3",
    sentido_de: "Banheiro",
    falante: "uso geral",
    exemplos: [
      "Mamõ pyta djau-aty?",
      "Aata djau-aty-pe.",
      "Djau-aty ikya'eỹ' porã."
    ],
    traducao: [
      "Onde fica o banheiro?",
      "Eu vou ao banheiro.",
      "O banheiro está bem limpo."
    ]
  },
  {
    palavra: "djauwutse",
    tipo: "substantivo / adjetivo",
    categoria: "Expressões",
    significado: "Mentira, Mentiroso.",
    audio: "assets/audios/djauwutse.mp3",
    sentido_de: "Mentira / Mentiroso",
    falante: "uso geral",
    exemplos: [
      "E'ĩ djauwutse!",
      "Heta ava ojapo djauwutse.",
      "Ha'e pe-wa djauwutse."
    ],
    traducao: [
      "Não minta! / Não seja mentiroso!",
      "Muitas pessoas contam mentiras.",
      "Isso aí é mentira."
    ]
  },
  {
    palavra: "djepe'e",
    tipo: "verbo",
    categoria: "Verbo / Sensação",
    significado: "Esquentar-se, aquecer-se (especialmente perto do fogo/fogueira).",
    audio: "assets/audios/djepee.mp3",
    sentido_de: "Esquentar-se / Aquecer-se",
    falante: "uso geral",
    exemplos: [
      "Ro'y porã, aata adjepe'e tata-re.",
      "Edju edjepe'e kowá-pe!",
      "Iporã adjepe'e ko'ẽ-re."
    ],
    traducao: [
      "Está muito frio, vou me esquentar no fogo.",
      "Vem se esquentar aqui!",
      "É bom se esquentar no fogo de manhã."
    ]
  },
  {
    palavra: "kupé / kupé-pe",
    tipo: "pós-posição",
    categoria: "Pós-posições",
    significado: "Atrás, costas, parte de trás, fundo (relativo às costas de um espaço ou objeto).",
    audio: "assets/audios/kupe.mp3",
    sentido_de: "Atrás / Costas",
    falante: "uso geral",
    exemplos: [
      "Oka oĩ oga kupé-pe.",
      "Opyta che kupé-pe.",
      "Ywyty kupé-pe oĩ ka'agwy."
    ],
    traducao: [
      "O quintal fica atrás / no fundo da casa.",
      "Ficou atrás de mim / nas minhas costas.",
      "Atrás do morro tem uma mata."
    ]
  },
  {
    palavra: "oká / oká-pe",
    tipo: "substantivo",
    categoria: "Localização",
    significado: "Quintal, terreiro, lado de fora, espaço aberto ao redor da casa.",
    audio: "assets/audios/oka.mp3",
    sentido_de: "Quintal / Lado de fora",
    falante: "uso geral",
    exemplos: [
      "Yvytu mbarete oipeju oká-pe.",
      "Mitã oñepoñy oká-pe.",
      "Añesẽ-ta oká-pe."
    ],
    traducao: [
      "Vento forte sopra no quintal / lá fora.",
      "A criança engatinha no quintal.",
      "Vou sair para o quintal / lá fora."
    ]
  },
  {
    palavra: "oga / oga-pe",
    tipo: "substantivo",
    categoria: "Localização",
    significado: "Casa, habitação, lar, espaço interno.",
    audio: "assets/audios/oga.mp3",
    sentido_de: "Casa / Lar",
    falante: "uso geral",
    exemplos: [
      "Ywytu ro'y oiké oga-pe.",
      "Oka oĩ oga kupé-pe."
    ],
    traducao: [
      "Vento frio entra na casa.",
      "O quintal fica atrás da casa."
    ]
  },
  {
    palavra: "rugwái / rugwái-pe",
    tipo: "pós-posição",
    categoria: "Pós-posições",
    significado: "No fim, no limite distante, extremidade (literalmente: na cauda/ponta de um caminho ou mata).",
    audio: "assets/audios/rugwai.mp3",
    sentido_de: "No fim / Extremidade",
    falante: "uso geral",
    exemplos: [
      "Aha-ta(aata) tape rugwái-pe.",
      "Ka'agwy rugwái-pe oĩ y-syry."
    ],
    traducao: [
      "Vou até o fim do caminho / estrada.",
      "No fundo / fim da mata tem um riacho."
    ]
  },
  {
    palavra: "djapywe'ỹ",
    tipo: "adjetivo",
    categoria: "Expressões",
    significado: "Sem fim, infinito, eterno, sem limite.",
    audio: "assets/audios/djapyweyy.mp3",
    sentido_de: "Sem fim / Infinito",
    falante: "uso geral",
    exemplos: [
      "Kowá tape oguereko djapyweiry.",
      "Nhanderú ome'ẽ marangatu djapywe'ỹ ore-we.",
      "Ywytu oipeju py'aĩ djapyweiry-pe."
    ],
    traducao: [
      "Este caminho é sem fim / infinito.",
      "Nhanderú nos dá bênção / força espiritual infinita.",
      "O vento sopra manso no infinito."
    ]
  },
  {
    palavra: "py'aĩ",
    tipo: "adjetivo",
    categoria: "Expressões",
    significado: "Manso, calmo, tranquilo, sereno, suave, paz no coração.",
    audio: "assets/audios/pyai.mp3",
    sentido_de: "Manso / Sereno",
    falante: "uso geral",
    exemplos: [
      "Ywytu oipeju py'aĩ.",
      "Txe py'aĩ oimẽ-te ko'ápe.",
      "Mbya ogwereko py'aĩ."
    ],
    traducao: [
      "O vento sopra manso / suavemente.",
      "Estou bem calmo / com o coração tranquilo aqui.",
      "A pessoa tem mansidão / é serena."
    ]
  },
  {
    palavra: "py'a",
    tipo: "substantivo",
    categoria: "Corpo humano",
    significado: "Fígado (órgão); interior do corpo, centro das emoções, sentimentos ou peito.",
    audio: "assets/audios/pya.mp3",
    sentido_de: "Fígado / Interior",
    falante: "uso geral",
    exemplos: [
      "Txe py'a rasy.",
      "Ogwereko py'a gwasu.",
      "Txe py'aĩ oimẽ-te."
    ],
    traducao: [
      "Estou com dor no fígado / estômago.",
      "Ele tem coragem (literalmente: fígado/interior grande).",
      "Meu interior / fígado está manso (estou em paz)."
    ]
  },
  {
    palavra: "djigwero'a",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Brigar, lutar, discutir, pelejar um contra o outro.",
    audio: "assets/audios/djigweroa.mp3",
    sentido_de: "Brigar / Lutar",
    falante: "uso geral",
    exemplos: [
      "Mitã-kwery odjigwero'a oká-pe.",
      "Txe nda-djigwero'atsei nde-we.",
      "Ha'e-kwery odjigwero'a tape-pe."
    ],
    traducao: [
      "As crianças estão brigando no quintal.",
      "Eu não quero brigar com você.",
      "Eles estão brigando no caminho / na rua."
    ]
  },
  {
    palavra: "gwaru-gwaru",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Ânsia de vômito, enjoo, náusea, mal-estar no estômago.",
    audio: "assets/audios/gwaru-gwaru.mp3",
    sentido_de: "Enjoo / Náusea",
    falante: "uso geral",
    exemplos: [
      "Txe py'a oguereko gwaru-gwaru.",
      "Mitã oguereko gwaru-gwaru pywhare.",
      "Nda'usẽtsei txi'u, txe gwaru-gwarutse."
    ],
    traducao: [
      "Meu estômago/fígado está com ânsia de vômito.",
      "A criança teve enjoo/náusea ontem à noite.",
      "Não quero comer comida, estou com vontade de vomitar."
    ]
  },
  {
    palavra: "Pynhare / Pyhare",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Noite, de noite, durante a noite.",
    audio: "assets/audios/pyhare.mp3",
    sentido_de: "Noite",
    falante: "uso geral",
    exemplos: [
      "Mitã oguereko gwaru-gwaru Pyhare.",
      "Pyhare-pe ywyty opyta ro'y-pe.",
      "Txe ake porã Pyhare."
    ],
    traducao: [
      "A criança teve enjoo/náusea de noite.",
      "De noite o morro fica no frio.",
      "Eu dormi bem de noite."
    ]
  },
  {
    palavra: "djikwaa",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Aparecer, surgir, mostrar-se, tornar-se visível ou conhecido.",
    audio: "assets/audios/djikwaa.mp3",
    sentido_de: "Aparecer / Surgir",
    falante: "uso geral",
    exemplos: [
      "Kwaray odjikwaa ywyty kupe-pe.",
      "djagwarete odjikwaa tape-pe.",
      "Txe-ryke'y ndadjikwaai Pyhare."
    ],
    traducao: [
      "O sol apareceu atrás do morro.",
      "A onça apareceu no caminho.",
      "Meu irmão mais velho não apareceu de noite."
    ]
  },
  {
    palavra: "djiroky",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Dançar, realizar a dança sagrada ou ritual, celebrar.",
    audio: "assets/audios/djiroky.mp3",
    sentido_de: "Dançar / Celebrar",
    falante: "uso geral",
    exemplos: [
      "Mitã-kwery odjiroky op'y-gwasu-pe.",
      "Txe djirokytse ko'aỹ.",
      "Ha'e ndadjirokyi pyhare."
    ],
    traducao: [
      "As crianças estão dançando na casa de reza.",
      "Eu quero dançar agora.",
      "Ele/Ela não dançou de noite."
    ]
  },
  {
    palavra: "djiwiró",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Rasgar, arrebentar, romper (roupa, pano, folha, papel).",
    audio: "assets/audios/djiwiro.mp3",
    sentido_de: "Rasgar / Romper",
    falante: "uso geral",
    exemplos: [
      "Txe-ao odjiwiró tape-pe.",
      "Enhangareko, ndojowirói hagwã!",
      "Txe nda-djiwirótsei txe-ao."
    ],
    traducao: [
      "Minha roupa rasgou no caminho.",
      "Tome cuidado para não rasgar!",
      "Eu não quis rasgar minha roupa."
    ]
  },
  {
    palavra: "djodjai",
    tipo: "adjetivo / verbo",
    categoria: "Expressões",
    significado: "Engraçado, divertido, cômico; zombar, debochar, tirar sarro, brincar.",
    audio: "assets/audios/djodjai.mp3",
    sentido_de: "Engraçado / Debochar",
    falante: "uso geral",
    exemplos: [
      "Kowa'e aiywu idjodjai-ete!",
      "Ha'e odjodjai txe-rehe pyhare.",
      "Nda'edjodjaisi nde-rehe."
    ],
    traducao: [
      "Essa história / fala é muito engraçada!",
      "Ele tirou sarro de mim de noite.",
      "Eu não quero debochar / tirar sarro de você."
    ]
  },
  {
    palavra: "djodjawi",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Diferença, divergência, desavença; (na negação/forma negativa: igualdade, semelhança exata, equivalência).",
    audio: "assets/audios/djodjawi.mp3",
    sentido_de: "Diferença / Divergência",
    falante: "uso geral",
    exemplos: [
      "Nhande ndadjodjawikwery.",
      "Kova'e ao ndodjodjawikwery.",
      "Ha'e-kwery oguereko djodjawi."
    ],
    traducao: [
      "Nós temos igualdade / somos iguais / Nós não temos diferença.",
      "Estas roupas são iguais (não têm diferença).",
      "Eles têm uma divergência / diferença entre si."
    ]
  },
  {
    palavra: "djodjoi",
    tipo: "substantivo / verbo",
    categoria: "Corpo humano",
    significado: "Soluço; soluçar, ter soluço.",
    audio: "assets/audios/djodjoi.mp3",
    sentido_de: "Soluço / Soluçar",
    falante: "uso geral",
    exemplos: [
      "Txe-mongwera djodjoi!",
      "Mitã odjodjoi pyhare.",
      "Txe ndadjodjoi."
    ],
    traducao: [
      "Cure / passe o meu soluço!",
      "A criança soluçou de noite.",
      "Eu não estou soluçando."
    ]
  },
  {
    palavra: "djekwaku",
    tipo: "adjetivo / verbo",
    categoria: "Corpo humano",
    significado: "Menstruada, estar no período menstrual; estar em resguardo/recolhimento ritual feminino.",
    audio: "assets/audios/djekwaku.mp3",
    sentido_de: "Menstruada / Resguardo",
    falante: "mulher",
    exemplos: [
      "Ha'e idjekwaku.",
      "Txe adjekwaku-ma.",
      "Kuñã idjekwaku-djawe oñangareko odjehe."
    ],
    traducao: [
      "Ela está menstruada / em resguardo.",
      "Eu já estou menstruada.",
      "Quando a mulher está menstruada, ela cuida de si mesma."
    ]
  },
  {
    palavra: "djodjuká",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Matar um ao outro, matarem-se mutuamente, lutar até a morte entre si.",
    audio: "assets/audios/djodjuka.mp3",
    sentido_de: "Matar-se mutuamente",
    falante: "uso geral",
    exemplos: [
      "Ha'e-kuery odjodjuká mboriai-pe.",
      "Nhanderu ndo-ipotai nhande, nhandji-djodjuká."
    ],
    traducao: [
      "Eles se mataram uns aos outros na guerra/conflito.",
      "Nosso Pai não quer que nós, nos matememos uns aos outros."
    ]
  },
  {
    palavra: "djogwerú",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Trazerem-se uns aos outros, trazerem-se mutuamente, vir trazendo um ao outro.",
    audio: "assets/audios/djogweru.mp3",
    sentido_de: "Trazer mutuamente",
    falante: "uso geral",
    exemplos: [
      "Ha'e-kuery odjogweru oky-djawe.",
      "Nhandje-djogweru nhande renda-pe."
    ],
    traducao: [
      "Eles vieram trazendo uns aos outros durante a chuva.",
      "Nós nos trazemos uns aos outros para nossa casa."
    ]
  },
  {
    palavra: "djoi",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Lavar, enxaguar, limpar com água.",
    audio: "assets/audios/djoi.mp3",
    sentido_de: "Lavar / Enxaguar",
    falante: "uso geral",
    exemplos: [
      "Adjoi txe-po nimanga-rire",
      "Ore oro-djoi ore-po djau-aty-py."
    ],
    traducao: [
      "Eu lavo minhas mãos depois de brincar.",
      "Nós lavamos as nossas mãos no banheiro ."
    ]
  },
  {
    palavra: "djokó",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Escorar, apoiar, sustentar (objeto ou estrutura). Dar apoio mútuo, sustentar alguém. Travar, conter.",
    audio: "assets/audios/djoko.mp3",
    sentido_de: "Escorar / Sustentar",
    falante: "uso geral",
    exemplos: [
      "Adjokó õké.",
      "Nhandje-djokó nhande renda-pe."
    ],
    traducao: [
      "Escoro a porta / Travo a porta.",
      "Nós nos apoiamos / nos sustentamos em nosso lugar."
    ]
  },
  {
    palavra: "õké",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Porta, entrada da casa.",
    audio: "assets/audios/oke.mp3",
    sentido_de: "Porta",
    falante: "uso geral",
    exemplos: [
      "Adjokó õké.",
      "Aipe'a õké."
    ],
    traducao: [
      "Eu escoro/travo a porta.",
      "Eu abro a porta."
    ]
  },
  {
    palavra: "djokwá",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Amarrar, atar, laçar, prender com corda.",
    audio: "assets/audios/djokwa.mp3",
    sentido_de: "Amarrar / Prender",
    falante: "uso geral",
    exemplos: [
      "Adjokwá txe-mymba.",
      "Adjokwá txe-nhemboty-á.",
      "Ore orodjokwá ywyra renda-pe."
    ],
    traducao: [
      "Eu amarro o meu animal de criação.",
      "Eu amarro o meu calçado.",
      "Nós amamos as madeiras na estrutura."
    ]
  },
  {
    palavra: "djopya",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Prender, deter, agarrar, capturar.",
    audio: "assets/audios/djopya.mp3",
    sentido_de: "Prender / Agarrar",
    falante: "uso geral",
    exemplos: [
      "adjopya txe-djywá.",
      "Adjopya mborayhu-pe.",
      "Oimẽ odjopya-wa'erã."
    ],
    traducao: [
      "Eu prendi meu braço.",
      "Eu seguro / prendo com afeto.",
      "Há alguém que deve ser detido."
    ]
  },
  {
    palavra: "djou",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Achar, encontrar, descobrir.",
    audio: "assets/audios/djou.mp3",
    sentido_de: "Achar / Encontrar",
    falante: "uso geral",
    exemplos: [
      "Adjou txe-mbimby.",
      "Redjou pa nde-rembiá?",
      "Odjou tape porã."
    ],
    traducao: [
      "Eu achei o meu objeto / o que eu tinha escondido.",
      "Você achou o seu animal / a sua criação?",
      "Ele(a) encontrou um bom caminho."
    ]
  },
  {
    palavra: "mbimby",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Tesouro guardado, preciosidade, pessoa protegida / amada (termo e nome afetivo usado no dialeto Nhandewa).",
    audio: "assets/audios/mbimby.mp3",
    sentido_de: "Tesouro guardado / Preciosidade",
    falante: "uso geral",
    exemplos: [
      "Txe mbimby.",
      "Nhanderu ombimby nhande rekó.",
      "Txe-mbimby porã."
    ],
    traducao: [
      "Meu,tesouro guardado / minha preciosidade.",
      "Nhanderu (Deus) guarda / protege o nosso modo de ser.",
      "Meu belo tesouro guardado."
    ]
  },
  {
    palavra: "djui",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Sapo, rã (anfíbio em geral).",
    audio: "assets/audios/djui.mp3",
    sentido_de: "Sapo / Rã",
    falante: "uso geral",
    exemplos: [
      "Djui opererek y-pe.",
      "Oñe'ẽ djui pyhare-pe.",
      "Aetxa djui tape-pe."
    ],
    traducao: [
      "O sapo pula na água.",
      "O sapo canta / coaxa de noite.",
      "Eu vi um sapo no caminho."
    ]
  },
  {
    palavra: "mymba",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Animal, bicho, criação.",
    audio: "assets/audios/mymba.mp3",
    sentido_de: "Animal / Criação",
    falante: "uso geral",
    exemplos: [
      "Ndodjukai-rei wa'erã mymba.",
      "Txe-rymba djagua owy'a.",
      "Mowa'e piko ne-mymba?"
    ],
    traducao: [
      "Não se deve matar os animais em vão.",
      "O meu animal de estimação / cachorro está feliz.",
      "Qual destes é o seu animal?"
    ]
  },
  {
    palavra: "pa / piko",
    tipo: "partícula interrogativa",
    categoria: "Expressões",
    significado: "Partículas interrogativas. 'Pa' forma perguntas diretas (frequentemente junta à palavra antecedente: mowa'epa). 'Piko' adiciona ênfase, dúvida ou curiosidade ('será que...?').",
    audio: "assets/audios/pa_piko.mp3",
    imagem: "assets/svg/.jpg",
    sentido_de: "Partícula de pergunta / Ênfase",
    falante: "uso geral",
    exemplos: [
      "Mowa'epa nde-rymba?",
      "Mowa'e piko nde-rymba?",
      "Mba'epa rejapo?"
    ],
    traducao: [
      "Qual é o seu animal?",
      "Afinal, qual é o seu animal? / Qual será o seu animal?",
      "O que você está fazendo?"
    ]
  },
  {
    palavra: "djuka",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Matar, abater.",
    audio: "assets/audios/djuka.mp3",
    imagem: "assets/imagens/djuka.jpg",
    sentido_de: "Matar / Abater",
    falante: "uso geral",
    exemplos: [
      "Adjuka mboi tape-pe.",
      "Ndodjukai-rei wa'erã mymba.",
      "Awá odjuka tadjatsu ka'agwy-pe."
    ],
    traducao: [
      "Eu matei uma cobra no caminho.",
      "Não se deve matar os animais em vão / sem motivo.",
      "O homem abateu o porco-do-mato na mata."
    ]
  },
  {
    palavra: "Djuky",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Sal.",
    audio: "assets/audios/djuky.mp3",
    imagem: "assets/imagens/djuky.jpg",
    sentido_de: "Sal",
    falante: "uso geral",
    exemplos: [
      "Omoĩ djuky so'o-re.",
      "Mboy djuky pa reiporu?",
      "Ndipoiry djuky tembi'u-pe."
    ],
    traducao: [
      "Colocou sal na carne.",
      "Quanto sal você usou?",
      "Não tem sal na comida."
    ]
  },
  {
    palavra: "Djupi",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Subir, escalar, erguer-se, montar.",
    audio: "assets/audios/djupi.mp3",
    imagem: "assets/imagens/djupi.jpg",
    sentido_de: "Subir / Escalar",
    falante: "uso geral",
    exemplos: [
      "Odjupi ywyra-re.",
      "Oñepyyrõ odjupi ywyty-re.",
      "Odjupi kawaru-re."
    ],
    traducao: [
      "Subiu na árvore.",
      "Começou a subir o morro / montanha.",
      "Montou / subiu no cavalo."
    ]
  },
  {
    palavra: "djuru",
    tipo: "substantivo",
    categoria: "Corpo humano",
    significado: "Boca.",
    audio: "assets/audios/djuru.mp3",
    imagem: "assets/imagens/djuru.jpg",
    sentido_de: "Boca",
    falante: "uso geral",
    exemplos: [
      "Oñemboty idjuru.",
      "Oipe'a idjuru oñe'ẽ hagwã.",
      "Idjuru ky'a."
    ],
    traducao: [
      "Fechou a boca.",
      "Abriu a boca para falar.",
      "Sua boca está suja."
    ]
  },
  {
    palavra: "Oñepyyrõ",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Ele(a) começou, iniciou (dar o primeiro passo/pisar).",
    audio: "assets/audios/onepyyro.mp3",
    imagem: "assets/imagens/onepyyro.jpg",
    sentido_de: "Começar / Iniciar",
    falante: "uso geral",
    exemplos: [
      "Oñepyyrõ odjupi.",
      "Oñepyyrõ oporai kwaray enhoĩ-we.",
      "Oñepyyrõ oky gwasu."
    ],
    traducao: [
      "Começou a subir.",
      "Começou a cantar antes do sol nascer.",
      "Começou uma chuva forte."
    ]
  },
  {
    palavra: "Djurune",
    tipo: "substantivo / adjetivo",
    categoria: "Expressões",
    significado: "Mau hálito, boca fedida.",
    audio: "assets/audios/djurune.mp3",
    imagem: "assets/imagens/djurune.jpg",
    sentido_de: "Mau hálito",
    falante: "uso geral",
    exemplos: [
      "Oĩwa djurune.",
      "Oiporu moã djurune-pe hagwã.",
      "Idjurune pyhare-we."
    ],
    traducao: [
      "Tem mau hálito.",
      "Usa remédio/planta para o mau hálito.",
      "Sua boca fica com cheiro ruim de manhã."
    ]
  },
  {
    palavra: "Djuwa",
    tipo: "substantivo",
    categoria: "Corpo humano",
    significado: "Braço.",
    audio: "assets/audios/djuwa.mp3",
    imagem: "assets/imagens/djuwa.jpg",
    sentido_de: "Braço",
    falante: "uso geral",
    exemplos: [
      "Oñembyai idjuwa.",
      "Oipyy idjuwa-pe.",
      "Ipy'a gwasu ha idjuwa mbarete."
    ],
    traducao: [
      "Machucou o braço.",
      "Segurou pelo braço.",
      "É corajoso e tem o braço forte."
    ]
  },
  {
    palavra: "Embyai",
    tipo: "adjetivo / expressão",
    categoria: "Expressões",
    significado: "Fome, estar com fome, ter necessidade de comer (variante de 'ware'a').",
    audio: "assets/audios/embyai.mp3",
    imagem: "assets/imagens/embyai.jpg",
    sentido_de: "Fome / Estar com fome",
    falante: "uso geral",
    exemplos: [
      "Txe embyai ko'aỹ.",
      "Oiko embyai-pe.",
      "Nda-txee-embyai-ri."
    ],
    traducao: [
      "Estou com fome agora.",
      "Passa / vive com fome.",
      "Não estou com fome."
    ]
  },
  {
    palavra: "Mbyai",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Estragar, danificar, machucar, quebrar, inutilizar.",
    audio: "assets/audios/mbyai.mp3",
    imagem: "assets/imagens/mbyai.jpg",
    sentido_de: "Estragar / Machucar",
    falante: "uso geral",
    exemplos: [
      "Oñembyai idjuwa.",
      "Ombyai mba'e-porã.",
      "Tembi'u oñembyai aku-pe."
    ],
    traducao: [
      "Machucou o braço.",
      "Estragou / danificou algo bonito.",
      "A comida estragou no calor."
    ]
  },
  {
    palavra: "Mbiraku",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Calor, mormaço, tempo quente (estado do tempo). Formado sobre a raiz 'aku'.",
    audio: "assets/audios/mbiraku.mp3",
    imagem: "assets/imagens/mbiraku.jpg",
    sentido_de: "Calor / Mormaço",
    falante: "uso geral",
    exemplos: [
      "Oñembyai tembi'u mbiraku-pe.",
      "Oĩ mbiraku guasu ko'ẽ-pe.",
      "Ndaipotari mbiraku."
    ],
    traducao: [
      "A comida estragou no calor.",
      "Faz muito calor de manhã.",
      "Não gosto de calor."
    ]
  },
  {
    palavra: "Ewa",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Caça, carne de caça, ato de caçar. Grafado também como 'gwa' / 'gua'.",
    audio: "assets/audios/ewa.mp3",
    imagem: "assets/imagens/ewa.jpg",
    sentido_de: "Caça / Carne de caça",
    falante: "uso geral",
    exemplos: [
      "Oo ewa-pe ka'agwy-pe.",
      "Oweru ewa nhande-ve.",
      "Aiporu mbya ewa-pe haguã."
    ],
    traducao: [
      "Foi para a caça na mata.",
      "Trouxe caça para nós.",
      "Uso o arco/arma para a caça."
    ]
  },
  {
    palavra: "Ewa'a",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Caçador (aquele que caça).",
    audio: "assets/audios/ewaa.mp3",
    imagem: "assets/imagens/ewaa.jpg",
    sentido_de: "Caçador",
    falante: "uso geral",
    exemplos: [
      "Ewa'a oo ka'agwy-pe pyhare-we.",
      "Ikatupyry ewa'a.",
      "Ogweru ewa'a so'o nhande-we."
    ],
    traducao: [
      "O caçador foi para a mata de manhã.",
      "O caçador é habilidoso / bom de caça.",
      "O caçador trouxe carne para nós."
    ]
  },
  {
    palavra: "Pyhare-we",
    tipo: "substantivo / expressão",
    categoria: "Expressões",
    significado: "De manhã, pela manhã. Refere-se ao período em que a noite termina e o dia se inicia.",
    audio: "assets/audios/pyhare-we.mp3",
    imagem: "assets/imagens/pyhare-we.jpg",
    sentido_de: "De manhã / Pela manhã",
    falante: "uso geral",
    exemplos: [
      "Ewa'a oo ka'agwy-pe pyhare-rupi.",
      "A'y irói pyhare-we.",
      "Ogwaẽ pyhare-we."
    ],
    traducao: [
      "O caçador foi para a mata pela noite.",
      "Tomo café de manhã.",
      "Chegou pela manhã."
    ]
  },
  {
    palavra: "Eí",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Mel (de abelha). Grafado também como 'ei' ou 'eíra'.",
    audio: "assets/audios/ei.mp3",
    imagem: "assets/imagens/ei.jpg",
    sentido_de: "Mel",
    falante: "uso geral",
    exemplos: [
      "Eí ẽ'ẽ porã.",
      "Ogweru eí ka'agwy-gui.",
      "A'u eí."
    ],
    traducao: [
      "O mel é muito doce.",
      "Trouxe mel da mata.",
      "Consumo / tomo mel."
    ]
  },
  {
    palavra: "Eru",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Trazer, buscar e trazer para perto.",
    audio: "assets/audios/eru.mp3",
    imagem: "assets/imagens/eru.jpg",
    sentido_de: "Trazer",
    falante: "uso geral",
    exemplos: [
      "Eru y aku.",
      "Ogweru ewa ka'agwy-gui.",
      "Aru-rã y irói."
    ],
    traducao: [
      "Traga água quente.",
      "Trouxe a caça da mata.",
      "Vou trazer o café."
    ]
  },
  {
    palavra: "Mboty",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Fechar, tampar, trancar, encerrar.",
    audio: "assets/audios/mboty.mp3",
    imagem: "assets/imagens/mboty.jpg",
    sentido_de: "Fechar / Trancar",
    falante: "uso geral",
    exemplos: [
      "Amboty õkẽ.",
      "Omboty õkẽ pyhare-pe.",
      "Omboty okẽ kãdjaró-pe."
    ],
    traducao: [
      "Eu fecho a porta.",
      "Ele(a) fecha a porta de noite.",
      "Trancou a porta na madrugada."
    ]
  },
  {
    palavra: "Ebotý!",
    tipo: "verbo (imperativo)",
    categoria: "Verbos",
    significado: "Feche! Fecha! Forma imperativa do verbo 'mboty'.",
    audio: "assets/audios/eboty.mp3",
    imagem: "assets/imagens/eboty.jpg",
    sentido_de: "Feche! / Tranque!",
    falante: "uso geral",
    exemplos: [
      "Ebotý okẽ!",
      "Ebotý oky-ramo!",
      "Ebotý nde-ogá pynhare-pe!"
    ],
    traducao: [
      "Fecha a porta!",
      "Fecha se for chover / quando chover!",
      "Fecha a porta da sua casa de noite!"
    ]
  },
  {
    palavra: "Edja'emẽ",
    tipo: "verbo (imperativo negativo)",
    categoria: "Verbos",
    significado: "Não deixe, não abandone, não permita.",
    audio: "assets/audios/edjaeme.mp3",
    imagem: "assets/imagens/edjaeme.jpg",
    sentido_de: "Não deixe / Não permita",
    falante: "uso geral",
    exemplos: [
      "Edja'emẽ okẽ pea!",
      "Edja'emẽ nhaderembi'u oñembyai!!",
      "Edja'emẽ ogwae-wa karu e´ỹ!"
    ],
    traducao: [
      "Não deixe a porta aberta!",
      "Não deixe a nossa comida estragar!",
      "Não deixe quem chegou sem comer!"
    ]
  },
  {
    palavra: "Edjapo'eá",
    tipo: "expressão / verbo (imperativo)",
    categoria: "Expressões",
    significado: "Não faça muito! Não exagere no preparo!",
    audio: "assets/audios/edjapoea.mp3",
    imagem: "assets/imagens/edjapoea.jpg",
    sentido_de: "Não faça muito",
    falante: "uso geral",
    exemplos: [
      "Edjapo'eá tembi'u!",
      "Edjapo'eá irói!",
      "Edjapo'eá tembi'u ndambyai-agwã!",
      "Edjapo eta tembi'u, txembiai!",
      "Edjapo'eá tembi'u, pyhare-pe!"
    ],
    traducao: [
      "Não faça muita comida!",
      "Não faça muito café!",
      "Não faça muita comida para não estragar!",
      "Faça muita comida, estou com fome.",
      "Não faça muita comida, de noite!!"
    ]
  },
  {
    palavra: "Edjerê!",
    tipo: "verbo (imperativo)",
    categoria: "Verbos",
    significado: "Vire! Gire! Rode! Comando imperativo do verbo 'djerê'.",
    audio: "assets/audios/edjere.mp3",
    imagem: "assets/imagens/edjere.jpg",
    sentido_de: "Vire! / Gire!",
    falante: "uso geral",
    exemplos: [
      "Edjerê txewu!",
      "Edjerê, ema'ẽ!",
      "Edjerê txerewe!"
    ],
    traducao: [
      "Vire para mim!",
      "Vire e olhe!",
      "Vire comigo!"
    ]
  },
  {
    palavra: "Txewy",
    tipo: "pronome com pós-posição",
    categoria: "Pronomes",
    significado: "Para mim / Comigo / A mim (pronome 'txe' + posposição '-wy').",
    audio: "assets/audios/txewy.mp3",
    imagem: "assets/imagens/txewy.jpg",
    sentido_de: "Para mim / A mim",
    falante: "uso geral",
    exemplos: [
      "Txewy aewema!",
      "Eme'ẽ txewy.",
      "Txewy guarã."
    ],
    traducao: [
      "Para mim já está bom! / Para mim deu!",
      "Dá para mim / Dê-me.",
      "Para ser para mim / Que é para mim."
    ]
  },
  {
    palavra: "Txerewé",
    tipo: "pronome com pós-posição",
    categoria: "Pronomes",
    significado: "Comigo (pronome 'txe' + posposição '-rewé'). Indica companhia.",
    audio: "assets/audios/txerewe.mp3",
    imagem: "assets/imagens/txerewe.jpg",
    sentido_de: "Comigo",
    falante: "uso geral",
    exemplos: [
      "Txerewé.",
      "Nderewé.",
      "Edju txerewé."
    ],
    traducao: [
      "Comigo (em minha companhia).",
      "Com você (em sua companhia).",
      "Vem comigo."
    ]
  },
  {
    palavra: "Atã",
    tipo: "adjetivo / advérbio",
    categoria: "Expressões",
    significado: "Forte, duro, firme, com intensidade.",
    audio: "assets/audios/ata.mp3",
    imagem: "assets/imagens/ata.jpg",
    sentido_de: "Forte / Firme",
    falante: "uso geral",
    exemplos: [
      "Oñe'ẽ atã.",
      "Ywyra atã.",
      "Epyy atã!"
    ],
    traducao: [
      "Fala forte / Fala alto.",
      "Madeira dura / Madeira firme.",
      "Segure firme! / Amarre com força!"
    ]
  },
  {
    palavra: "Guarã atã",
    tipo: "expressão",
    categoria: "Expressões",
    significado: "Destinado a fortalecer, para ficar forte, firme ou resistente.",
    audio: "assets/audios/guara_ata.mp3",
    imagem: "assets/imagens/guara_ata.jpg",
    sentido_de: "Para fortalecer / Para ficar forte",
    falante: "uso geral",
    exemplos: [
      "E´u kowa moã guarã atã.",
      "Txewy guarã atã.",
      "Mborai guarã atã."
    ],
    traducao: [
      "Beba este remédio para ficar forte / Remédio para fortalecer.",
      "Para que eu seja forte / Destinado a me fortalecer.",
      "Canto para fortalecer / Reza para dar firmeza."
    ]
  },
  {
    palavra: "Edjeupi",
    tipo: "verbo (imperativo)",
    categoria: "Verbos",
    significado: "Suba! Levante-se! Forma imperativa de 'jeupi' (erguer-se).",
    audio: "assets/audios/edjeupi.mp3",
    imagem: "assets/imagens/edjeupi.jpg",
    sentido_de: "Suba! / Levante-se!",
    falante: "uso geral",
    exemplos: [
      "Edjeupi!",
      "Edjeupi ywyra-pe.",
      "Edjeupi woi"
    ],
    traducao: [
      "Suba! / Levante-se!",
      "Suba na árvore.",
      "Suba depressa! / Levante-se rápido!"
    ]
  },
  {
    palavra: "Neĩk",
    tipo: "interjeição / expressão",
    categoria: "Expressões",
    significado: "Vamos, anda, bora.",
    audio: "assets/audios/neik.mp3",
    imagem: "assets/imagens/neik.jpg",
    sentido_de: "Vamos / Bora",
    falante: "uso geral",
    exemplos: [
      "Neĩk, edjeupi!",
      "Neĩk, e'u!",
      "Neĩk, tereo!"
    ],
    traducao: [
      "Vamos, suba! / Bora, sobe!",
      "Anda, coma!",
      "Vamos, vá!"
    ]
  },
  {
    palavra: "Woi",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Rápido, depressa, logo.",
    audio: "assets/audios/woi.mp3",
    imagem: "assets/imagens/woi.jpg",
    sentido_de: "Rápido / Depressa",
    falante: "uso geral",
    exemplos: [
      "Edjeupi woi!",
      "Edju woi!",
      "Eñani woi!"
    ],
    traducao: [
      "Suba rápido! / Suba logo!",
      "Vem depressa! / Vem logo!",
      "Corra rápido!"
    ]
  },
  {
    palavra: "Nhani",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Correr, disparar, fugir.",
    audio: "assets/audios/nhani.mp3",
    imagem: "assets/imagens/nhani.jpg",
    sentido_de: "Correr / Fugir",
    falante: "uso geral",
    exemplos: [
      "Enhani woi!",
      "Onhani ymba'e-wy.",
      "Onhani mombyry."
    ],
    traducao: [
      "Corra rápido! / Corra logo!",
      "Ele(a) correu do bicho.",
      "Correu para longe."
    ]
  },
  {
    palavra: "Nhamy",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Ordenhar, espremer, extrair líquido com as mãos.",
    audio: "assets/audios/nhamy.mp3",
    imagem: "assets/imagens/nhamy.jpg",
    sentido_de: "Ordenhar / Espremer",
    falante: "uso geral",
    exemplos: [
      "Enhamy waka.",
      "Onhamy kamby.",
      "Enhamy kowa'e."
    ],
    traducao: [
      "Ordenhe a vaca!",
      "Ela ordenha o leite.",
      "Esprema isto!"
    ]
  },
  {
    palavra: "Oa'e",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Nasceu (para pessoas e animais).",
    audio: "assets/audios/oae.mp3",
    imagem: "assets/imagens/oae.jpg",
    sentido_de: "Nascer (seres vivos)",
    falante: "uso geral",
    exemplos: [
      "Mitãi oa'e kweé.",
      "Oa'e-ma txeray.",
      "Mba'e ary-pe pa oa'e?"
    ],
    traducao: [
      "O bebê nasceu ontem.",
      "Meu filho já nasceu.",
      "Em que dia nasceu?"
    ]
  },
  {
    palavra: "Enhoĩ",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Nasceu / brotou (para plantas e sementes).",
    audio: "assets/audios/enhoi.mp3",
    imagem: "assets/imagens/enhoi.jpg",
    sentido_de: "Brotar / Nascer (plantas)",
    falante: "uso geral",
    exemplos: [
      "Oenhoĩ awati.",
      "Oenhoĩ woi.",
      "Kowa'e awati oenhoĩ-ma."
    ],
    traducao: [
      "O milho nasceu.",
      "Brotou rápido.",
      "Este milho já nasceu(brotou)."
    ]
  },
  {
    palavra: "Osẽ",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Nasceu / saiu (para sol, lua e estrelas).",
    audio: "assets/audios/ose.mp3",
    imagem: "assets/imagens/ose.jpg",
    sentido_de: "Nascer / Sair (astros)",
    falante: "uso geral",
    exemplos: [
      "Kwaray osẽ.",
      "Djasy osẽ-ma.",
      "Kwaray osẽ-ha."
    ],
    traducao: [
      "O sol nasceu.",
      "A lua já nasceu.",
      "Onde o sol nasce (nascente)."
    ]
  },
  {
    palavra: "Nhandé Rowai-Regwá",
    tipo: "substantivo / expressão",
    categoria: "Localização",
    significado: "Leste / Nascente (O que fica à nossa frente).",
    audio: "assets/audios/nhande_rowai_regwa.mp3",
    imagem: "assets/imagens/nhande_rowai_regwa.jpg",
    sentido_de: "Leste / Nascente",
    falante: "uso geral",
    exemplos: [
      "Txeroga pyta nhandé Rowai-Regwá.",
      "Aata nhandé Rowai-Regwá-pe.",
      "Kwaray osẽ Nhandé Rowai-Regwá-py."
    ],
    traducao: [
      "Minha casa fica no leste.",
      "Eu vou para o Leste (para onde fica à nossa frente).",
      "O sol nasce no Leste (à nossa frente)."
    ]
  },
  {
    palavra: "Nhandé Kupé-Regwá",
    tipo: "substantivo / expressão",
    categoria: "Localização",
    significado: "Oeste / Poente (O que fica às nossas costas).",
    audio: "assets/audios/nhande_kupe_regwa.mp3",
    imagem: "assets/imagens/nhande_kupe_regwa.jpg",
    sentido_de: "Oeste / Poente",
    falante: "uso geral",
    exemplos: [
      "Kwaray oĩ nhandé Kupé-Regwá.",
      "Ka'aru-py kwaray oó Nhandé Kupé-Regwá-py.",
      "kwaray oike nhande kupe-regwá-pe."
    ],
    traducao: [
      "O sol está no oeste.",
      "À tarde o sol vai para o Oeste (para as nossas costas).",
      "O sol se põe no oeste."
    ]
  },
  {
    palavra: "Nhandé Yké-Regwá",
    tipo: "substantivo / expressão",
    categoria: "Localização",
    significado: "Norte (O que fica ao lado esquerdo).",
    audio: "assets/audios/nhande_yke_regwa.mp3",
    imagem: "assets/imagens/nhande_yke_regwa.jpg",
    sentido_de: "Norte",
    falante: "uso geral",
    exemplos: [
      "Ywytu oú nhandé Yké-Regwá.",
      "Aá nhandé Yké-Regwá-py.",
      "A´e oú nhandé Yké-Regwá-gwi."
    ],
    traducao: [
      "O vento vem do norte.",
      "Vou para o Norte (para o nosso lado).",
      "Ele(a) vem do Norte (do nosso lado)."
    ]
  },
  {
    palavra: "Nhandé Djodjá-Regwá",
    tipo: "substantivo / expressão",
    categoria: "Localização",
    significado: "Sul (O que fica ao lado direito).",
    audio: "assets/audios/nhande_djodja_regwa.mp3",
    imagem: "assets/imagens/nhande_djodja_regwa.jpg",
    sentido_de: "Sul",
    falante: "uso geral",
    exemplos: [
      "Djaa nhandé Djodjá-Regwá.",
      "Aata nhandé Djodjá-Regwá-py .",
      "Oú nhandé Djodjá-Regwá-gwi."
    ],
    traducao: [
      "Vamos para o sul.",
      "Eu vou para o Sul (para o nosso outro lado).",
      "Vem do Sul (do nosso outro lado)."
    ]
 },
 {
    palavra: "Owy",
    tipo: "adjetivo",
    categoria: "Natureza",
    significado: "Verde. Cor associada às folhas, plantas e à vegetação.",
    audio: "assets/audios/owy.mp3",
    imagem: "assets/imagens/owy.jpg",
    sentido_de: "Verde",
    falante: "uso geral",
    exemplos: [
      "Awati owy.",
      "Ka'a owy.",
      "koy kowa owy ."
    ],
    traducao: [
      "Milho verde.",
      "Mata / folha verde.",
      "A roça esta verde."
    ]
  },
  {
    palavra: "Idjú",
    tipo: "adjetivo",
    categoria: "Natureza",
    significado: "Amarelo / dourado. Cor de frutos maduros, flores e penas de animais.",
    audio: "assets/audios/idju.mp3",
    imagem: "assets/imagens/idju.jpg",
    sentido_de: "Amarelo / Dourado",
    falante: "uso geral",
    exemplos: [
      "Tapiti idjú.",
      "Pakowá idjú.",
      "Poty idjú."
    ],
    traducao: [
      "Coelho amarelo / Tapiti amarelo.",
      "Banana amarela.",
      "Flor amarela."
    ]
  },
  {
    palavra: "Pytã",
    tipo: "adjetivo",
    categoria: "Natureza",
    significado: "Vermelho. Cor do urucum, do sangue e de frutos vermelhos.",
    audio: "assets/audios/pyta.mp3",
    imagem: "assets/imagens/pyta.jpg",
    sentido_de: "Vermelho",
    falante: "uso geral",
    exemplos: [
      "Uruku pytã.",
      "Poty pytã.",
      "Ywyra´a pytã."
    ],
    traducao: [
      "Urucum vermelho.",
      "Flor vermelha.",
      "Fruta vermelha."
    ]
  },
  {
    palavra: "Owy rei",
    tipo: "adjetivo",
    categoria: "Natureza",
    significado: "Azul (lit. 'verde puro/liso'). Cor do céu limpo e das águas profundas.",
    audio: "assets/audios/owy_rei.mp3",
    imagem: "assets/imagens/owy_rei.jpg",
    sentido_de: "Azul",
    falante: "uso geral",
    exemplos: [
      "Aryrei owy rei.",
      "Y owy rei.",
      "Gwyrá owy rei."
    ],
    traducao: [
      "Céu azul.",
      "Água azul / transparente.",
      "Pássaro azul."
    ]
  },
  {
    palavra: "Morotĩ",
    tipo: "adjetivo",
    categoria: "Natureza",
    significado: "Branco. Cor do algodão, das nuvens e da garça.",
    audio: "assets/audios/moroti.mp3",
    imagem: "assets/imagens/moroti.jpg",
    sentido_de: "Branco",
    falante: "uso geral",
    exemplos: [
      "Arai morotĩ.",
      "Mandydju morotĩ.",
      "Uru morotĩ."
    ],
    traducao: [
      "Nuvem branca.",
      "Algodão branco.",
      "Galinha branca."
    ]
  },
  {
    palavra: "Mandyju",
    tipo: "substantivo",
    categoria: "Plantas",
    significado: "Algodão.",
    audio: "assets/audios/mandyju.mp3",
    imagem: "assets/imagens/mandyju.jpg",
    sentido_de: "Algodão",
    falante: "uso geral",
    exemplos: [
      "Mandyju oĩ koy-py.",
      "Aetxa mandyju.",
      "Aiporu mandyju.",
      "Mandyju iporã."
    ],
    traducao: [
      "O algodão está na roça.",
      "Eu vejo o algodão.",
      "Eu uso algodão.",
      "O algodão é bom."
    ]
  },
  {
    palavra: "Aiporu",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Eu uso.",
    audio: "assets/audios/aiporu.mp3",
    imagem: "assets/imagens/aiporu.jpg",
    sentido_de: "Eu uso",
    falante: "uso geral",
    exemplos: [
      "Aiporu atxá.",
      "Aiporu nhemboty'a.",
      "Aiporu mandydju.",
      "Aiporu kwatia."
    ],
    traducao: [
      "Eu uso o machado.",
      "Eu uso calçado.",
      "Eu uso algodão.",
      "Eu uso o caderno / livro."
    ]
  },
  {
    palavra: "Unã",
    tipo: "adjetivo",
    categoria: "Natureza",
    significado: "Preto / escuro. Cor do carvão, da noite e da terra escura.",
    audio: "assets/audios/una.mp3",
    imagem: "assets/imagens/una.jpg",
    sentido_de: "Preto / Escuro",
    falante: "uso geral",
    exemplos: [
      "Ita unã.",
      "Pyhare unã.",
      "Ywy unã."
    ],
    traducao: [
      "Pedra preta.",
      "Noite escura.",
      "Terra preta."
    ]
  },
  {
    palavra: "Potygwá",
    tipo: "adjetivo",
    categoria: "Natureza",
    significado: "Cor-de-rosa / rosado (lit. 'relativo à flor / tom de flor').",
    audio: "assets/audios/potygwa.mp3",
    imagem: "assets/imagens/potygwa.jpg",
    sentido_de: "Cor-de-rosa / Rosado",
    falante: "uso geral",
    exemplos: [
      "poty potygwá.",
      "Arai potygwá.",
      "txeao potygwá."
    ],
    traducao: [
      "Flor cor-de-rosa.",
      "Nuvem rosada (ao pôr do sol).",
      "minha roupa cor-de-rosa."
    ]
  },
];
