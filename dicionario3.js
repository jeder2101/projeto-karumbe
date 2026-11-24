// ============================================================
// DICIONARIO3 — complemento de dicionario.js + dicionario2.js
// Versão final: só verbetes ausentes em DICIONARIO e DICIONARIO2.
// Campo "variantes" só aparece quando há outra grafia real.
// Fontes: Vocabulário Bilíngue Tupi-Guarani (SEE/FISPI, 2010)
//         Lições de Gramática Nhandewa-Guarani vol. 1 (2016) e vol. 2 (2018)
//         Curso Tupi-Guarani Nhandewa – parte 1
// ============================================================

const DICIONARIO3 = [

  // ----------------------------------------------------------
  // CORPO HUMANO
  // ----------------------------------------------------------
  {
    palavra: "pynhuã",
    tipo: "substantivo",
    categoria: "Corpo humano",
    significado: "Tornozelo.",
    audio: "assets/audios/pynhua.mp3",
    sentido_de: "Articulação entre a perna e o pé.",
    falante: "Uso geral",
    variantes: ["pynhuan"],
    exemplos: [
      "Txepynhuã rasy.",
      "Ambyai txepynhuã."
    ],
    traducao: [
      "Meu tornozelo dói.",
      "Machuquei meu tornozelo."
    ]
  },
  {
    palavra: "uwy",
    tipo: "substantivo",
    categoria: "Corpo humano",
    significado: "Coxa.",
    audio: "assets/audios/uwy.mp3",
    sentido_de: "Parte da perna entre o quadril e o joelho.",
    falante: "Uso geral",
    exemplos: [
      "Txewy rasy.",
      "Tso'ó uwypygwá iporã."
    ],
    traducao: [
      "Minha coxa dói.",
      "A carne da coxa é boa."
    ]
  },

  // ----------------------------------------------------------
  // ANIMAIS
  // ----------------------------------------------------------
  {
    palavra: "mboré",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Anta (tapir).",
    audio: "assets/audios/mbore.mp3",
    sentido_de: "Maior mamífero terrestre nativo das florestas.",
    falante: "Uso geral",
    variantes: ["tapir", "bore"],
    exemplos: [
      "Mboré oho y rupi ka'agwy pype.",
      "Mboré okaru ywa rapyre re."
    ],
    traducao: [
      "A anta anda pela água dentro da mata.",
      "A anta come brotos e frutos caídos."
    ]
  },
  {
    palavra: "mboí",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Cobra, serpente.",
    audio: "assets/audios/mboi.mp3",
    sentido_de: "Réptil sem patas, figura de grande respeito e presença na tradição.",
    falante: "Uso geral",
    exemplos: [
      "Mboí ohasa ywy oatywa re ka'agwy pype.",
      "Ekyrỹi, mboí oñemi ywyra rowa py."
    ],
    traducao: [
      "A cobra passa pelas folhas caídas dentro da mata.",
      "Fique quieto, a cobra está escondida no tronco."
    ]
  },
  {
    palavra: "tedju",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Lagarto (teiú).",
    audio: "assets/audios/tedju.mp3",
    sentido_de: "Grande lagarto terrícola nativo.",
    falante: "Uso geral",
    exemplos: [
      "Tedju oñani ywy okyty re.",
      "Tedju okaru ywa rapyre re ogapy wao re."
    ],
    traducao: [
      "O lagarto corre pela terra aquecida pelo sol.",
      "O lagarto come restos de fruta perto de casa."
    ]
  },
  {
    palavra: "kawy",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Vespa, marimbondo.",
    audio: "assets/audios/kawy.mp3",
    sentido_de: "Inseto voador dotado de ferrão e construtor de ninhos; eitywy designa a abelha.",
    falante: "Uso geral",
    variantes: ["eitywy", "eituwy"],
    exemplos: [
      "Kawy odjapo ipepo ywyra rakã re.",
      "Etxakeke kawy re ogapy ru'ã re."
    ],
    traducao: [
      "A vespa faz o seu ninho no galho da árvore.",
      "Cuidado com a vespa na cobertura da casa."
    ]
  },
  {
    palavra: "ky",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Piolho.",
    audio: "assets/audios/ky.mp3",
    sentido_de: "Inseto parasita externo.",
    falante: "Uso geral",
    exemplos: [
      "Ky oĩ avakue akã re.",
      "Oheka ky akã mbyte."
    ],
    traducao: [
      "O piolho está na cabeça da pessoa.",
      "Ele procura piolho entre os cabelos."
    ]
  },
  {
    palavra: "mberu",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Mosca.",
    audio: "assets/audios/mberu.mp3",
    sentido_de: "Inseto voador comum atraído por alimentos.",
    falante: "Uso geral",
    exemplos: [
      "Mberu oha'ã tembi'u re ogapy py.",
      "Mberu otyryry mesa rowa re."
    ],
    traducao: [
      "A mosca pousa na comida dentro de casa.",
      "A mosca anda sobre a mesa."
    ]
  },
  {
    palavra: "nhakyrã",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Cigarra.",
    audio: "assets/audios/nhakyra.mp3",
    sentido_de: "Inseto conhecido pelo som forte nos dias quentes.",
    falante: "Uso geral",
    variantes: ["nhakyra"],
    exemplos: [
      "Nhakyrã oporai ywyra rakã re okyty py.",
      "Ywyra rowa re nhakyrã oĩ."
    ],
    traducao: [
      "A cigarra canta no galho da árvore no calor.",
      "A cigarra está no tronco da árvore."
    ]
  },
  {
    palavra: "nhandu",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Aranha.",
    audio: "assets/audios/nhandu.mp3",
    sentido_de: "Aracnídeo tecelão.",
    falante: "Uso geral",
    exemplos: [
      "Nhandu odjapo nhandutsã inhepyũ ogapy rowa re.",
      "Etxakeke nhandu re ywyra mbyte."
    ],
    traducao: [
      "A aranha faz sua teia na parede da casa.",
      "Cuidado com a aranha entre as árvores."
    ]
  },
  {
    palavra: "ytsoendy",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Inseto reluzente (vagalume, bicho-da-luz).",
    audio: "assets/audios/ytsoendy.mp3",
    sentido_de: "Designação para insetos que emitem luz própria.",
    falante: "Uso geral",
    exemplos: [
      "Ytsoendy omimbi ka'agwy rugwaive.",
      "Pyhare ytsoendy oetxa ywyra rowa re."
    ],
    traducao: [
      "O inseto reluzente brilha no fundo da mata.",
      "De noite o bicho-da-luz é visto no tronco da árvore."
    ]
  },
  {
    palavra: "tsapi-tsapi",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Vagalume.",
    audio: "assets/audios/tsapi_tsapi.mp3",
    sentido_de: "Inseto luminescente de jardim; variante de muã e ytsoendy.",
    falante: "Uso geral",
    exemplo: [
      "Tsapi-tsapi omimbi kapi'i mbyte re.",
      "Pyhare pyahu tsapi-tsapi oho ywyra rakã rupi."
    ],
    exemplos: [
      "Tsapi-tsapi omimbi kapi'i mbyte re.",
      "Pyhare pyahu tsapi-tsapi oho ywyra rakã rupi."
    ],
    traducao: [
      "O vagalume brilha no meio do capim.",
      "No início da noite o vagalume anda pelos galhos."
    ]
  },
  {
    palavra: "tsugwai",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Porco doméstico.",
    audio: "assets/audios/tsugwai.mp3",
    sentido_de: "Suíno criado no ambiente doméstico ou rural.",
    falante: "Uso geral",
    exemplos: [
      "Tsugwai okaru ogapy re.",
      "Tsugwai oiko y ywy wao re."
    ],
    traducao: [
      "O porco come perto de casa.",
      "O porco vive perto da lama e da água."
    ]
  },
  {
    palavra: "txiwi",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Gato.",
    audio: "assets/audios/txiwi.mp3",
    sentido_de: "Felino doméstico de companhia.",
    falante: "Uso geral",
    exemplos: [
      "Txiwi opyta ogapy ru'ã re.",
      "Txiwi odjapytu'u kowa'e py."
    ],
    traducao: [
      "O gato fica no teto da casa.",
      "O gato descansa aqui."
    ]
  },
  {
    palavra: "mbarakadjá",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Gato do mato.",
    audio: "assets/audios/mbarakadja.mp3",
    sentido_de: "Felino silvestre de pequeno porte.",
    falante: "Uso geral",
    exemplos: [
      "Mbarakadjá opyta ogapy re.",
      "Mbarakadjá onhẽ'mĩ ogapy rowa re."
    ],
    traducao: [
      "O gato do mato fica perto de casa.",
      "O gato do mato se esconde na beirada da casa."
    ]
  },
  {
    palavra: "mbyku",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Gambá.",
    audio: "assets/audios/mbyku.mp3",
    sentido_de: "Marsupial nativo de hábitos noturnos.",
    falante: "Uso geral",
    exemplos: [
      "Mbyku ohasa ogapy ywyra re.",
      "Pyhare re mbyku oheka mbo'y."
    ],
    traducao: [
      "O gambá passa pela árvore da casa.",
      "De noite o gambá procura alimento."
    ]
  },
  {
    palavra: "kagwaré",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Tamanduá-mirim.",
    audio: "assets/audios/kagware.mp3",
    sentido_de: "Pequeno tamanduá arborícola.",
    falante: "Uso geral",
    exemplos: [
      "Kagwaré oheka ta'yĩ ka'agwy re.",
      "Kagwaré onhẽ'mĩ ywyra rakã mbyte."
    ],
    traducao: [
      "O tamanduá-mirim procura cupim na mata.",
      "O tamanduá-mirim se esconde entre os galhos."
    ]
  },
  {
    palavra: "ka'i",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Macaco.",
    audio: "assets/audios/kai.mp3",
    sentido_de: "Primata nativo das matas e florestas.",
    falante: "Uso geral",
    exemplos: [
      "Ka'i osapukái yvyra ru'ã gwiwe.",
      "Ka'i omono'õ ywa ka'agwy re."
    ],
    traducao: [
      "O macaco grita do alto da árvore.",
      "O macaco colhe frutas na mata."
    ]
  },
  {
    palavra: "gwatsu",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Veado.",
    audio: "assets/audios/gwatsu.mp3",
    sentido_de: "Cervídeo nativo dos campos e capões.",
    falante: "Uso geral",
    variantes: ["gwatsú"],
    exemplos: [
      "Gwatsu onhẽ'mĩ ka'agwy tĩ re.",
      "Oetxa gwatsu onhoty ywa rami."
    ],
    traducao: [
      "O veado corre pela ponta da mata.",
      "Ele viu o veado pastando."
    ]
  },
  {
    palavra: "gwairaká",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Lontra.",
    audio: "assets/audios/gwairaka.mp3",
    sentido_de: "Mamífero aquático ágil nas margens dos rios.",
    falante: "Uso geral",
    exemplos: [
      "Gwairaká odjhague y rupi.",
      "Y rembe'i re gwairaká opyta."
    ],
    traducao: [
      "A lontra nada pela água.",
      "A lontra fica na beira do rio."
    ]
  },
  {
    palavra: "djaitxá",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Paca.",
    audio: "assets/audios/djaitxa.mp3",
    sentido_de: "Roedor silvestre de hábitos noturnos.",
    falante: "Uso geral",
    variantes: ["djatxá"],
    exemplos: [
      "Djaitxá oho y ywy koty, pyhare re.",
      "Ka'agwy re onhẽ'mi djaitxá."
    ],
    traducao: [
      "A paca vai em direção à água, de noite.",
      "A paca se esconde na mata."
    ]
  },
  {
    palavra: "djagwatiri",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Jaguatirica.",
    audio: "assets/audios/djagwatiri.mp3",
    sentido_de: "Pequeno felino pintado nativo.",
    falante: "Uso geral",
    exemplos: [
      "Djagwatiri opẽ ywyra rakã re.",
      "Oetxa djagwatiri ka'agwy nte."
    ],
    traducao: [
      "A jaguatirica sobe no galho da árvore.",
      "Ele avistou apenas a jaguatirica na mata."
    ]
  },
  {
    palavra: "djagwareté",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Onça (onça-pintada).",
    audio: "assets/audios/djagwarete.mp3",
    sentido_de: "Felino de grande porte; distinto de djagwareté'ũ (puma).",
    falante: "Uso geral",
    variantes: ["djagwarete"],
    exemplos: [
      "Oĩ djagwareté ka'agwy-pe.",
      "Djagwareté iporã ha imbarete."
    ],
    traducao: [
      "Tem onça na mata.",
      "A onça é bonita e forte."
    ]
  },
  {
    palavra: "tapiti",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Lebre, coelho silvestre.",
    audio: "assets/audios/tapiti.mp3",
    sentido_de: "Pequeno mamífero saltador nativo dos campos e capões.",
    falante: "Uso geral",
    exemplos: [
      "Tapiti oñani kapi'i mbyte re.",
      "Tapiti onhẽ'mĩ ka'agwy tĩ re."
    ],
    traducao: [
      "A lebre corre no meio do capim.",
      "A lebre se esconde na ponta da mata."
    ]
  },
  {
    palavra: "amberé",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Lagartixa.",
    audio: "assets/audios/ambere.mp3",
    sentido_de: "Pequeno réptil de hábitos domésticos e noturnos.",
    falante: "Uso geral",
    variantes: ["ambé"],
    exemplos: [
      "Amberé opyta ogapy rowa re.",
      "Pyhare re amberé oheka ta'yĩ ogapy py."
    ],
    traducao: [
      "A lagartixa fica na parede da casa.",
      "De noite a lagartixa procura insetos dentro de casa."
    ]
  },
  {
    palavra: "kururu",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Sapo (cururu).",
    audio: "assets/audios/kururu.mp3",
    sentido_de: "Anfíbio anuro de pele rugosa; distinto de dju'i (perereca).",
    falante: "Uso geral",
    exemplos: [
      "Kururu oiko ogapy ywy wao re.",
      "Pyhare pyahu kururu onhe'ẽ ywy igwý."
    ],
    traducao: [
      "O sapo vive perto da terra úmida da casa.",
      "No início da noite o sapo coaxa no chão."
    ]
  },
  {
    palavra: "karumbé",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Cágado, tartaruga d'água.",
    audio: "assets/audios/karumbe.mp3",
    sentido_de: "Réptil aquático de carapaça; símbolo que dá nome ao projeto Karumbé.",
    falante: "Uso geral",
    variantes: ["karumbe"],
    exemplos: [
      "Karumbé onhẽ'mĩ y pype ywy oatywa re.",
      "Y rembe'i re karumbé opyta."
    ],
    traducao: [
      "O cágado se esconde na água entre as folhas caídas.",
      "O cágado fica na beira da água."
    ]
  },
  {
    palavra: "djakaré",
    tipo: "substantivo",
    categoria: "Animais",
    significado: "Jacaré.",
    audio: "assets/audios/djakare.mp3",
    sentido_de: "Réptil aquático de grande porte.",
    falante: "Uso geral",
    variantes: ["pa'i"],
    exemplos: [
      "Oĩ djakaré y-pe.",
      "Djakaré gwasu oĩ ysyry-pe."
    ],
    traducao: [
      "Tem jacaré na água.",
      "Tem um jacaré grande no rio."
    ]
  },

  // ----------------------------------------------------------
  // DIAS DA SEMANA
  // ----------------------------------------------------------
  {
    palavra: "aryteĩ",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Domingo.",
    audio: "assets/audios/arytei.mp3",
    sentido_de: "Primeiro dia da semana (literalmente 'um dia').",
    falante: "Uso geral",
    exemplos: [
      "Aryteĩ-py nhandé djaperokywé.",
      "Aryteĩ kó aỹ."
    ],
    traducao: [
      "Domingo a gente descansa.",
      "Hoje é domingo."
    ]
  },
  {
    palavra: "arykõe",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Segunda-feira.",
    audio: "assets/audios/arykoe.mp3",
    sentido_de: "Segundo dia da semana.",
    falante: "Uso geral",
    exemplos: [
      "Arykõe-pe amba'apó.",
      "Arykõe ko'ẽro."
    ],
    traducao: [
      "Na segunda-feira eu trabalho.",
      "Amanhã é segunda-feira."
    ]
  },
  {
    palavra: "aryapy",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Terça-feira.",
    audio: "assets/audios/aryapy.mp3",
    sentido_de: "Terceiro dia da semana.",
    falante: "Uso geral",
    exemplos: [
      "Aryapy-pe nhandé djaikwaá.",
      "Aryapy kweé."
    ],
    traducao: [
      "Na terça-feira nós sabemos.",
      "Terça-feira foi ontem."
    ]
  },
  {
    palavra: "aryndy",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Quarta-feira.",
    audio: "assets/audios/aryndy.mp3",
    sentido_de: "Quarto dia da semana.",
    falante: "Uso geral",
    exemplos: [
      "Aryndy-pe djaru mba'e.",
      "Aryndy pyhare-py."
    ],
    traducao: [
      "Na quarta-feira trouxemos algo.",
      "Quarta-feira à noite."
    ]
  },
  {
    palavra: "arynũi",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Quinta-feira.",
    audio: "assets/audios/arymui.mp3",
    sentido_de: "Quinto dia da semana.",
    falante: "Uso geral",
    variantes: ["arymũi"],
    exemplos: [
      "Arynũi-pe adju.",
      "Arynũi kó aỹ."
    ],
    traducao: [
      "Na quinta-feira eu venho.",
      "Hoje é quinta-feira."
    ]
  },
  {
    palavra: "arypá",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Sexta-feira.",
    audio: "assets/audios/arypa.mp3",
    sentido_de: "Sexto dia da semana.",
    falante: "Uso geral",
    exemplos: [
      "Arypá-pe djaiko porã.",
      "Arypá koẽro."
    ],
    traducao: [
      "Na sexta-feira vivemos bem.",
      "Amanhã é sexta-feira."
    ]
  },
  {
    palavra: "aryne'õ",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Sábado.",
    audio: "assets/audios/aryneo.mp3",
    sentido_de: "Sétimo dia da semana.",
    falante: "Uso geral",
    exemplos: [
      "Aryne'õ-pe rokoé djiwy.",
      "Aryne'õ kweé."
    ],
    traducao: [
      "No sábado eu descansei.",
      "Sábado foi ontem."
    ]
  },

  // ----------------------------------------------------------
  // INSTRUMENTOS E ARTESANATO
  // ----------------------------------------------------------
  {
    palavra: "angu'apu",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Tambor.",
    audio: "assets/audios/anguapu.mp3",
    sentido_de: "Instrumento de percussão usado em festas e rituais.",
    falante: "Uso geral",
    variantes: ["angu'a"],
    exemplos: [
      "Ombopu angu'apu.",
      "Angu'apu oĩ opy-py."
    ],
    traducao: [
      "Ele toca o tambor.",
      "O tambor está na casa de reza."
    ]
  },
  {
    palavra: "gwyrapá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Arco (para flecha).",
    audio: "assets/audios/gwyrapa.mp3",
    sentido_de: "Instrumento de caça feito de madeira flexível.",
    falante: "Uso geral",
    exemplos: [
      "Odjapó gwyrapá.",
      "Gwyrapá oĩ óga-py."
    ],
    traducao: [
      "Ele fez o arco.",
      "O arco está em casa."
    ]
  },
  {
    palavra: "gwyrapá'u'i",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Arco e flecha (conjunto).",
    audio: "assets/audios/gwyrapaui.mp3",
    sentido_de: "Conjunto de arco e flecha.",
    falante: "Uso geral",
    exemplos: [
      "Oipyý gwyrapá'u'i.",
      "Oiporú gwyrapá'u'i ewa'a re."
    ],
    traducao: [
      "Ele pegou o arco e flecha.",
      "Ele usa o arco e flecha na caça."
    ]
  },
  {
    palavra: "gwyrarakwá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Lança.",
    audio: "assets/audios/gwyrarakwa.mp3",
    sentido_de: "Arma de arremesso.",
    falante: "Uso geral",
    exemplos: [
      "Odjapó gwyrarakwá.",
      "Gwyrarakwá ipuku."
    ],
    traducao: [
      "Ele fez a lança.",
      "A lança é comprida."
    ]
  },
  {
    palavra: "kangwaá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Cocar.",
    audio: "assets/audios/kangwaa.mp3",
    sentido_de: "Adorno de cabeça, símbolo de liderança.",
    falante: "Uso geral",
    exemplos: [
      "Omõatyrõ kangwaá.",
      "Kangwaá iporã eté."
    ],
    traducao: [
      "Ele fez o cocar.",
      "O cocar é muito bonito."
    ]
  },
  {
    palavra: "mimby",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Flauta.",
    audio: "assets/audios/mimby.mp3",
    sentido_de: "Instrumento musical de sopro.",
    falante: "Uso geral",
    exemplos: [
      "Ombopu mimby.",
      "Mimby iporã."
    ],
    traducao: [
      "Ele toca flauta.",
      "A flauta é bonita."
    ]
  },
  {
    palavra: "pedjuá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Leque.",
    audio: "assets/audios/pedjua.mp3",
    sentido_de: "Objeto usado para abanar; também peça ritual.",
    falante: "Uso geral",
    exemplos: [
      "Aipota pedjuá.",
      "Oipyý pedjuá kwaray."
    ],
    traducao: [
      "Quero o leque.",
      "O pajé pegou o leque."
    ]
  },
  {
    palavra: "poapyregwá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Pulseira.",
    audio: "assets/audios/poapyregwa.mp3",
    sentido_de: "Adorno de pulso.",
    falante: "Uso geral",
    exemplos: [
      "Omondé poapyregwá.",
      "Poapyregwá iporã."
    ],
    traducao: [
      "Ele colocou a pulseira.",
      "A pulseira é bonita."
    ]
  },
  {
    palavra: "tambeó",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Roupa tradicional.",
    audio: "assets/audios/tambeo.mp3",
    sentido_de: "Vestimenta própria do povo Nhandewa.",
    falante: "Uso geral",
    exemplos: [
      "Omondé tambeó.",
      "Tambeó iporã eté."
    ],
    traducao: [
      "Ele vestiu a roupa tradicional.",
      "A roupa tradicional é muito bonita."
    ]
  },
  {
    palavra: "takwapu",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Instrumento musical feminino (bastão de ritmo).",
    audio: "assets/audios/takwapu.mp3",
    sentido_de: "Instrumento de percussão usado pelas mulheres.",
    falante: "Uso geral",
    variantes: ["takwa'ipu"],
    exemplos: [
      "Kunhãgwé ombopu takwapu.",
      "Takwapu oĩ oy-gwatsu-py."
    ],
    traducao: [
      "As mulheres tocam o takwapu.",
      "O takwapu está na casa de reza."
    ]
  },
  {
    palavra: "tembetá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Adorno labial.",
    audio: "assets/audios/tembeta.mp3",
    sentido_de: "Objeto colocado no lábio inferior, de uso ritual.",
    falante: "Uso geral",
    exemplos: [
      "Omondé tembetá.",
      "Tembetá iporã."
    ],
    traducao: [
      "Ele colocou o adorno labial.",
      "O adorno labial é bonito."
    ]
  },
  {
    palavra: "u'y",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Flecha.",
    audio: "assets/audios/uy.mp3",
    sentido_de: "Projétil do arco.",
    falante: "Uso geral",
    exemplos: [
      "Odjapó u'y.",
      "U'y ipuku."
    ],
    traducao: [
      "Ele fez a flecha.",
      "A flecha é comprida."
    ]
  },
  {
    palavra: "u'ypedjuá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Zarabatana.",
    audio: "assets/audios/uypedjua.mp3",
    sentido_de: "Arma tubular para soprar dardos.",
    falante: "Uso geral",
    exemplos: [
      "Oipyý u'ypedjuá.",
      "U'ypedjuá ipuku."
    ],
    traducao: [
      "Ele pegou a zarabatana.",
      "A zarabatana é comprida."
    ]
  },
  {
    palavra: "ywyrá-rokyá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Pau-de-chuva.",
    audio: "assets/audios/ywyrá-rokyá.mp3",
    sentido_de: "Instrumento ritual de madeira com sementes dentro.",
    falante: "Uso geral",
    exemplos: [
      "Odjapó ywyrá-rokyá.",
      "Ywyrá-rokyá iporã."
    ],
    traducao: [
      "Ele fez o pau-de-chuva.",
      "O pau-de-chuva é bonito."
    ]
  },
  {
    palavra: "kytsé",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Faca.",
    audio: "assets/audios/kytsé.mp3",
    sentido_de: "Utensílio de corte.",
    falante: "Uso geral",
    exemplos: [
      "Oipyý kytsé.",
      "Kytsé ipuku."
    ],
    traducao: [
      "Ele pegou a faca.",
      "A faca é comprida."
    ]
  },
  {
    palavra: "kytséguatsú",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Facão.",
    audio: "assets/audios/kytséguatsu.mp3",
    sentido_de: "Faca grande de uso agrícola.",
    falante: "Uso geral",
    variantes: ["kytsépé"],
    exemplos: [
      "Oipyý kytséguatsú.",
      "Kytséguatsú ipuku."
    ],
    traducao: [
      "Ele pegou o facão.",
      "O facão é comprido."
    ]
  },
  {
    palavra: "kytsápá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Foice.",
    audio: "assets/audios/kytsapa.mp3",
    sentido_de: "Ferramenta de corte para capim.",
    falante: "Uso geral",
    variantes: ["kytséapá", "kytseapá"],
    exemplos: [
      "Oiporú kytsápá kapi'i re.",
      "Kytsápá ipiro."
    ],
    traducao: [
      "Ele usa a foice no capim.",
      "A foice é rápida."
    ]
  },
  {
    palavra: "pindá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Anzol.",
    audio: "assets/audios/pinda.mp3",
    sentido_de: "Peça de pesca.",
    falante: "Uso geral",
    exemplos: [
      "Oipyý pindá pira re.",
      "Pindá iporã."
    ],
    traducao: [
      "Ele pegou o anzol para o peixe.",
      "O anzol é bom."
    ]
  },
  {
    palavra: "petyngwá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Cachimbo.",
    audio: "assets/audios/petyngwa.mp3",
    sentido_de: "Objeto ritual de fumar; feito de taquara.",
    falante: "Uso geral",
    variantes: ["petỹgwá"],
    exemplos: [
      "Oipyý petyngwá.",
      "Petyngwá marãgatu nhandé-we."
    ],
    traducao: [
      "Ele pegou o cachimbo.",
      "O cachimbo é sagrado para nós."
    ]
  },
  {
    palavra: "kamitsã",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Camisa.",
    audio: "assets/audios/kamitsa.mp3",
    sentido_de: "Peça de vestuário.",
    falante: "Uso geral",
    exemplos: [
      "Omondé kamitsã.",
      "Kamitsã iporã."
    ],
    traducao: [
      "Ele vestiu a camisa.",
      "A camisa é bonita."
    ]
  },
  {
    palavra: "kãy'ru",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Chapéu.",
    audio: "assets/audios/kayru.mp3",
    sentido_de: "Cobertura de cabeça.",
    falante: "Uso geral",
    exemplos: [
      "Omondé kãy'ru.",
      "Kãy'ru iporã."
    ],
    traducao: [
      "Ele colocou o chapéu.",
      "O chapéu é bonito."
    ]
  },
  {
    palavra: "koré",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Casaco, blusa.",
    audio: "assets/audios/kore.mp3",
    sentido_de: "Peça de vestuário de frio.",
    falante: "Uso geral",
    exemplos: [
      "Omondé koré ro'y reé.",
      "Koré iporã."
    ],
    traducao: [
      "Ele vestiu o casaco por causa do frio.",
      "O casaco é bonito."
    ]
  },
  {
    palavra: "tymáyre",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Calça.",
    audio: "assets/audios/tymayre.mp3",
    sentido_de: "Peça de vestuário inferior.",
    falante: "Uso geral",
    exemplos: [
      "Omondé tymáyre.",
      "Tymáyre iporã."
    ],
    traducao: [
      "Ele vestiu a calça.",
      "A calça é bonita."
    ]
  },
  {
    palavra: "typydjaá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Vestido.",
    audio: "assets/audios/typydjaa.mp3",
    sentido_de: "Peça de vestuário feminina.",
    falante: "Uso geral",
    exemplos: [
      "Kunhã omonde typydjaá.",
      "Typydjaá iporã."
    ],
    traducao: [
      "A mulher vestiu o vestido.",
      "O vestido é bonito."
    ]
  },
  {
    palavra: "adjaká",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Cesto.",
    audio: "assets/audios/adjaka.mp3",
    sentido_de: "Cesto de transporte e armazenamento.",
    falante: "Uso geral",
    exemplos: [
      "Oipyý adjaká.",
      "Adjaká oĩ óga-gwypy."
    ],
    traducao: [
      "Ele pegou o cesto.",
      "O cesto está embaixo da casa."
    ]
  },
  {
    palavra: "atxá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Machado.",
    audio: "assets/audios/atxa.mp3",
    sentido_de: "Ferramenta de corte de madeira.",
    falante: "Uso geral",
    exemplos: [
      "Aiporu atxá.",
      "Atxá ipuku."
    ],
    traducao: [
      "Eu uso o machado.",
      "O machado é comprido."
    ]
  },
  {
    palavra: "djatsaá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Colar transversal.",
    audio: "assets/audios/djatsaa.mp3",
    sentido_de: "Adorno peitoral.",
    falante: "Uso geral",
    exemplos: [
      "Omondé djatsaá.",
      "Djatsaá iporã."
    ],
    traducao: [
      "Ele colocou o colar transversal.",
      "O colar transversal é bonito."
    ]
  },
  {
    palavra: "kyá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Rede (de dormir).",
    audio: "assets/audios/kya.mp3",
    sentido_de: "Rede de descanso e dormida.",
    falante: "Uso geral",
    exemplos: [
      "Oĩ kyá óga-py.",
      "Ake kyá-py."
    ],
    traducao: [
      "Tem rede em casa.",
      "Durmo na rede."
    ]
  },
  {
    palavra: "kwãregwá",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Anel.",
    audio: "assets/audios/kwaregwa.mp3",
    sentido_de: "Adorno de dedo.",
    falante: "Uso geral",
    variantes: ["kawãregwá"],
    exemplos: [
      "Omondé kwãregwá.",
      "Kwãregwá iporã."
    ],
    traducao: [
      "Ele colocou o anel.",
      "O anel é bonito."
    ]
  },
  {
    palavra: "nambitsã",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Brinco.",
    audio: "assets/audios/nambitsa.mp3",
    sentido_de: "Adorno de orelha.",
    falante: "Uso geral",
    exemplos: [
      "Omondé nambitsã.",
      "Nambitsã iporã."
    ],
    traducao: [
      "Ele colocou o brinco.",
      "O brinco é bonito."
    ]
  },
  {
    palavra: "mbaraká",
    tipo: "substantivo",
    categoria: "Objetos",
    significado: "Maraca.",
    audio: "assets/audios/mbaraka.mp3",
    sentido_de: "Instrumento de percussão ritual.",
    falante: "Uso geral",
    exemplos: [
      "Ombopu mbaraká.",
      "Mbaraká iporã."
    ],
    traducao: [
      "Ele toca a maraca.",
      "A maraca é bonita."
    ]
  },

  // ----------------------------------------------------------
  // ALIMENTOS / NATUREZA
  // ----------------------------------------------------------
  {
    palavra: "akadju",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Caju.",
    audio: "assets/audios/akadju.mp3",
    sentido_de: "Fruta nativa.",
    falante: "Uso geral",
    exemplos: [
      "Akadju ipotá.",
      "Oĩ akadju ka'agwy-py."
    ],
    traducao: [
      "O caju é gostoso.",
      "Tem caju na mata."
    ]
  },
  {
    palavra: "aremá",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Trigo.",
    audio: "assets/audios/arema.mp3",
    sentido_de: "Cereal.",
    falante: "Uso geral",
    exemplos: [
      "Oĩ aremá óga-py.",
      "Aremá-ku'i iporã."
    ],
    traducao: [
      "Tem trigo em casa.",
      "A farinha de trigo é boa."
    ]
  },
  {
    palavra: "djaí-rogwé",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Salada (de folhas).",
    audio: "assets/audios/djai-rogwe.mp3",
    sentido_de: "Alimento de folhas verdes.",
    falante: "Uso geral",
    exemplos: [
      "Aipota djaí-rogwé.",
      "Djaí-rogwé iporã."
    ],
    traducao: [
      "Quero salada.",
      "A salada é boa."
    ]
  },
  {
    palavra: "djety-mbowé",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Batatinha.",
    audio: "assets/audios/djety-mbowe.mp3",
    sentido_de: "Tubérculo pequeno; distinto de djety (batata-doce).",
    falante: "Uso geral",
    exemplos: [
      "Oĩ djety-mbowé koy-py.",
      "Djety-mbowé ipotá."
    ],
    traducao: [
      "Tem batatinha na roça.",
      "A batatinha é gostosa."
    ]
  },
  {
    palavra: "mba'e'ũ",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Café.",
    audio: "assets/audios/mbaeu.mp3",
    sentido_de: "Bebida quente do cotidiano.",
    falante: "Uso geral",
    exemplos: [
      "Aipota mba'e'ũ.",
      "Mba'e'ũ aku."
    ],
    traducao: [
      "Quero café.",
      "O café está quente."
    ]
  },
  {
    palavra: "nhandy",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Óleo.",
    audio: "assets/audios/nhandy.mp3",
    sentido_de: "Óleo de cozinha ou de origem vegetal.",
    falante: "Uso geral",
    exemplos: [
      "Aipota nhandy.",
      "Nhandy oĩ djapepó-py."
    ],
    traducao: [
      "Quero óleo.",
      "O óleo está na panela."
    ]
  },
  {
    palavra: "pakowá-e'ẽ",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Banana-ouro.",
    audio: "assets/audios/pakowa-ee.mp3",
    sentido_de: "Variedade de banana.",
    falante: "Uso geral",
    exemplos: [
      "Pakowá-e'ẽ ipotá.",
      "Oipyý pakowá-e'ẽ."
    ],
    traducao: [
      "A banana-ouro é gostosa.",
      "Ele pegou a banana-ouro."
    ]
  },
  {
    palavra: "pakowá-yyregwá",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Banana-da-terra.",
    audio: "assets/audios/pakowa-yyregwa.mp3",
    sentido_de: "Variedade de banana usada no preparo de alimentos.",
    falante: "Uso geral",
    exemplos: [
      "Oĩ pakowá-yyregwá koy-py.",
      "Pakowá-yyregwá ipotá."
    ],
    traducao: [
      "Tem banana-da-terra na roça.",
      "A banana-da-terra é gostosa."
    ]
  },
  {
    palavra: "pirá",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Peixe.",
    audio: "assets/audios/pira.mp3",
    sentido_de: "Animal aquático de consumo.",
    falante: "Uso geral",
    exemplos: [
      "Oĩ pirá ysyry-py.",
      "Aipota pirá."
    ],
    traducao: [
      "Tem peixe no rio.",
      "Quero peixe."
    ]
  },
  {
    palavra: "tsaá",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Sal.",
    audio: "assets/audios/tsaa.mp3",
    sentido_de: "Tempero.",
    falante: "Uso geral",
    variantes: ["djuky"],
    exemplos: [
      "Omoĩ tsaá so'o-re.",
      "Aipota tsaá."
    ],
    traducao: [
      "Colocou sal na carne.",
      "Quero sal."
    ]
  },
  {
    palavra: "yytakwá-gwi",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Água do bambu.",
    audio: "assets/audios/yytakwa-gwi.mp3",
    sentido_de: "Água acumulada dentro do bambu.",
    falante: "Uso geral",
    exemplos: [
      "Aipota yytakwá-gwi.",
      "Yytakwá-gwi ro'ysã."
    ],
    traducao: [
      "Quero água do bambu.",
      "A água do bambu é gelada."
    ]
  },
  {
    palavra: "kapi'i-ra'ã",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Planta do arroz.",
    audio: "assets/audios/kapii-raa.mp3",
    sentido_de: "Gramínea da qual se extrai o arroz.",
    falante: "Uso geral",
    exemplos: [
      "Kapi'i-ra'ã oĩ koy-py.",
      "Kapi'i-ra'ã ipuku."
    ],
    traducao: [
      "A planta do arroz está na roça.",
      "A planta do arroz é comprida."
    ]
  },
  {
    palavra: "kará",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Cará.",
    audio: "assets/audios/kara.mp3",
    sentido_de: "Tubérculo comestível.",
    falante: "Uso geral",
    exemplos: [
      "Oĩ kará koy-py.",
      "Kará ipotá."
    ],
    traducao: [
      "Tem cará na roça.",
      "O cará é gostoso."
    ]
  },
  {
    palavra: "kwarapepẽ",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Abobrinha.",
    audio: "assets/audios/kwarapepe.mp3",
    sentido_de: "Fruto de rasteira de casca fina.",
    falante: "Uso geral",
    exemplos: [
      "Oĩ kwarapepẽ koy-py.",
      "Aipota kwarapepẽ."
    ],
    traducao: [
      "Tem abobrinha na roça.",
      "Quero abobrinha."
    ]
  },
  {
    palavra: "andaí",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Abóbora.",
    audio: "assets/audios/andai.mp3",
    sentido_de: "Fruto grande de casca dura.",
    falante: "Uso geral",
    exemplos: [
      "Andaí ipotá.",
      "Oĩ andaí óga-py."
    ],
    traducao: [
      "A abóbora é gostosa.",
      "Tem abóbora em casa."
    ]
  },
  {
    palavra: "tadjá",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Inhame.",
    audio: "assets/audios/tadja.mp3",
    sentido_de: "Tubérculo comestível.",
    falante: "Uso geral",
    exemplos: [
      "Oĩ tadjá koy-py.",
      "Tadjá ipotá."
    ],
    traducao: [
      "Tem inhame na roça.",
      "O inhame é gostoso."
    ]
  },
  {
    palavra: "ytsó",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Larva do coqueiro (usada como alimento).",
    audio: "assets/audios/ytso.mp3",
    sentido_de: "Larva branca encontrada no tronco do coqueiro.",
    falante: "Uso geral",
    exemplos: [
      "Oipyý ytsó pindó-gwi.",
      "Ytsó ipotá."
    ],
    traducao: [
      "Ele pegou a larva do coqueiro.",
      "A larva é gostosa."
    ]
  },
  {
    palavra: "pindó",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Coqueiro.",
    audio: "assets/audios/pindo.mp3",
    sentido_de: "Palmeira alta.",
    falante: "Uso geral",
    exemplos: [
      "Pindó ipuku.",
      "Oipyý ytsó pindó-gwi."
    ],
    traducao: [
      "O coqueiro é alto.",
      "Ele pegou a larva do coqueiro."
    ]
  },
  {
    palavra: "wãmpẽ",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Coco.",
    audio: "assets/audios/waampe.mp3",
    sentido_de: "Fruto do coqueiro.",
    falante: "Uso geral",
    variantes: ["wãpĩ"],
    exemplos: [
      "Oipyý wãmpẽ.",
      "Wãmpẽ ipotá."
    ],
    traducao: [
      "Ele pegou o coco.",
      "O coco é gostoso."
    ]
  },
  {
    palavra: "wapurú",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Jabuticaba.",
    audio: "assets/audios/wapuru.mp3",
    sentido_de: "Fruta de casca preta e polpa branca.",
    falante: "Uso geral",
    exemplos: [
      "Wapurú ipotá.",
      "Oĩ wapurú ka'agwy-py."
    ],
    traducao: [
      "A jabuticaba é gostosa.",
      "Tem jabuticaba na mata."
    ]
  },
  {
    palavra: "narã",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Laranja.",
    audio: "assets/audios/nara.mp3",
    sentido_de: "Fruta cítrica.",
    falante: "Uso geral",
    exemplos: [
      "Narã ipotá.",
      "Oipyý narã."
    ],
    traducao: [
      "A laranja é gostosa.",
      "Ele pegou a laranja."
    ]
  },
  {
    palavra: "narã pe'i",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Mexerica, tangerina.",
    audio: "assets/audios/nara-pei.mp3",
    sentido_de: "Fruta cítrica pequena.",
    falante: "Uso geral",
    variantes: ["narã'i"],
    exemplos: [
      "Narã pe'i ipotá.",
      "Oipyý narã pe'i."
    ],
    traducao: [
      "A mexerica é gostosa.",
      "Ele pegou a mexerica."
    ]
  },
  {
    palavra: "karugwá",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Arco-íris.",
    audio: "assets/audios/karugwa.mp3",
    sentido_de: "Fenômeno atmosférico; também nome de aldeia.",
    falante: "Uso geral",
    exemplos: [
      "Karugwá ojehecha oky riré.",
      "Karugwá iporã aryrei-py."
    ],
    traducao: [
      "O arco-íris aparece depois da chuva.",
      "O arco-íris é bonito no céu."
    ]
  },

  // ----------------------------------------------------------
  // ADVÉRBIOS
  // ----------------------------------------------------------
  {
    palavra: "ko'ẽro",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Amanhã.",
    audio: "assets/audios/koero.mp3",
    sentido_de: "Advérbio de tempo futuro próximo.",
    falante: "Uso geral",
    exemplos: [
      "Ko'ẽro adju.",
      "Ko'ẽro okyta."
    ],
    traducao: [
      "Amanhã eu venho.",
      "Amanhã vai chover."
    ]
  },
  {
    palavra: "riré",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Depois; depois de.",
    audio: "assets/audios/rire.mp3",
    sentido_de: "Advérbio de tempo posterior.",
    falante: "Uso geral",
    exemplos: [
      "Akaru riré aá.",
      "Oky riré oka'aru."
    ],
    traducao: [
      "Depois de comer eu vou.",
      "Depois da chuva fez tarde."
    ]
  },
  {
    palavra: "teri",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Ainda.",
    audio: "assets/audios/teri.mp3",
    sentido_de: "Advérbio de tempo persistente.",
    falante: "Uso geral",
    exemplos: [
      "Teri oky.",
      "Teri ndaáai."
    ],
    traducao: [
      "Ainda está chovendo.",
      "Ainda não vou."
    ]
  },
  {
    palavra: "aẽma",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Acabou de acontecer; agora mesmo.",
    audio: "assets/audios/aema.mp3",
    sentido_de: "Advérbio de tempo imediato.",
    falante: "Uso geral",
    exemplos: [
      "Aẽma ou.",
      "Aẽma oky."
    ],
    traducao: [
      "Ele acabou de vir.",
      "Acabou de chover."
    ]
  },
  {
    palavra: "ryaé",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Frequentemente; sempre.",
    audio: "assets/audios/ryae.mp3",
    sentido_de: "Advérbio de frequência.",
    falante: "Uso geral",
    variantes: ["riaé"],
    exemplos: [
      "Ryaé adju ko'apy.",
      "Ryaé oporandu."
    ],
    traducao: [
      "Frequentemente venho aqui.",
      "Frequentemente ele pergunta."
    ]
  },
  {
    palavra: "e'ỹwa",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Nunca.",
    audio: "assets/audios/eywa.mp3",
    sentido_de: "Advérbio de frequência negativa.",
    falante: "Uso geral",
    exemplos: [
      "E'ỹwa ndaáai amoite.",
      "E'ỹwa noenduiry."
    ],
    traducao: [
      "Nunca vou lá longe.",
      "Nunca ele escuta."
    ]
  },
  {
    palavra: "opawae'y",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Sempre.",
    audio: "assets/audios/opawaey.mp3",
    sentido_de: "Advérbio de frequência total.",
    falante: "Uso geral",
    variantes: ["idjypye'ywa"],
    exemplos: [
      "Opawae'y djaikó tekoa-py.",
      "Opawae'y okaru koẽ-py."
    ],
    traducao: [
      "Sempre vivemos na aldeia.",
      "Sempre come de manhã."
    ]
  },
  {
    palavra: "mboaẽro",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Quase sempre.",
    audio: "assets/audios/mboaero.mp3",
    sentido_de: "Advérbio de frequência alta.",
    falante: "Uso geral",
    exemplos: [
      "Mboaẽro adjapo.",
      "Mboaẽro okaru."
    ],
    traducao: [
      "Quase sempre eu faço.",
      "Quase sempre ele come."
    ]
  },
  {
    palavra: "mbengwé",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Devagar.",
    audio: "assets/audios/mbengwe.mp3",
    sentido_de: "Advérbio de modo lento.",
    falante: "Uso geral",
    variantes: ["mbegwe'i", "mbengwe'i"],
    exemplos: [
      "Ogwatá mbengwé.",
      "Eañe'ẽ mbengwé."
    ],
    traducao: [
      "Ele anda devagar.",
      "Fale devagar."
    ]
  },
  {
    palavra: "podjawá",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Muito rápido.",
    audio: "assets/audios/podjawa.mp3",
    sentido_de: "Advérbio de modo rápido intensificado.",
    falante: "Uso geral",
    exemplos: [
      "Oñani podjawá.",
      "Ogwatá podjawá."
    ],
    traducao: [
      "Ele corre muito rápido.",
      "Ele anda muito rápido."
    ]
  },
  {
    palavra: "pityremẽ",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Rápido, ligeiro.",
    audio: "assets/audios/pityreme.mp3",
    sentido_de: "Advérbio de modo rápido (variante de peteremé).",
    falante: "Uso geral",
    variantes: ["peteremé"],
    exemplos: [
      "Ogwatá pityremẽ.",
      "Oñani pityremẽ."
    ],
    traducao: [
      "Ele anda ligeiro.",
      "Ele corre rápido."
    ]
  },
  {
    palavra: "ramĩ",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Talvez; parece que.",
    audio: "assets/audios/rami.mp3",
    sentido_de: "Advérbio de dúvida.",
    falante: "Uso geral",
    variantes: ["djoéramĩ"],
    exemplos: [
      "Oky ramĩ.",
      "Ou ramĩ."
    ],
    traducao: [
      "Talvez chova.",
      "Parece que ele vem."
    ]
  },
  {
    palavra: "pewá-rupi",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Por lá.",
    audio: "assets/audios/pewarupi.mp3",
    sentido_de: "Advérbio de lugar.",
    falante: "Uso geral",
    variantes: ["pe-rupi"],
    exemplos: [
      "Aá pewá-rupi.",
      "Ogwatá pewá-rupi."
    ],
    traducao: [
      "Eu vou por lá.",
      "Ele anda por lá."
    ]
  },
  {
    palavra: "kó-rupi",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Por aqui.",
    audio: "assets/audios/korupi.mp3",
    sentido_de: "Advérbio de lugar próximo ao falante.",
    falante: "Uso geral",
    variantes: ["okó-rupi"],
    exemplos: [
      "Edjú kó-rupi.",
      "Ogwatá kó-rupi."
    ],
    traducao: [
      "Venha por aqui.",
      "Ele anda por aqui."
    ]
  },
  {
    palavra: "igwy-py",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Embaixo, de baixo.",
    audio: "assets/audios/igwypy.mp3",
    sentido_de: "Advérbio de lugar inferior.",
    falante: "Uso geral",
    variantes: ["igwy-rupi", "igwy-wéi"],
    exemplos: [
      "Oĩ igwy-py.",
      "Ama'ẽ igwy-py."
    ],
    traducao: [
      "Está embaixo.",
      "Olho para baixo."
    ]
  },
  {
    palavra: "mbarie'ỹ",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Pouco, quase nada.",
    audio: "assets/audios/mbariey.mp3",
    sentido_de: "Advérbio de quantidade reduzida.",
    falante: "Uso geral",
    variantes: ["mbari'i", "mbarií"],
    exemplos: [
      "Mbarie'ỹ oinỹ.",
      "Mbarie'ỹ amboipy."
    ],
    traducao: [
      "Pouco resta.",
      "Quase nada consegui."
    ]
  },
  {
    palavra: "arienté",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Bastante (dito sozinho).",
    audio: "assets/audios/ariente.mp3",
    sentido_de: "Advérbio de intensidade.",
    falante: "Uso geral",
    exemplos: [
      "Arienté!",
      "Arienté oĩ."
    ],
    traducao: [
      "Bastante!",
      "Tem bastante."
    ]
  },
  {
    palavra: "anguewé",
    tipo: "advérbio",
    categoria: "Expressões",
    significado: "Depois; mais tarde.",
    audio: "assets/audios/anguewe.mp3",
    sentido_de: "Advérbio de tempo posterior; quando dito sozinho, indica 'depois'.",
    falante: "Uso geral",
    exemplos: [
      "Anguewé djaá.",
      "Anguewé adju."
    ],
    traducao: [
      "Depois a gente vai.",
      "Mais tarde eu venho."
    ]
  },
  {
    palavra: "-wé",
    tipo: "sufixo",
    categoria: "Pós-posições",
    significado: "Mais (comparativo).",
    audio: "assets/audios/we_suf.mp3",
    sentido_de: "Sufixo comparativo de superioridade.",
    falante: "Uso geral",
    variantes: ["-gwé"],
    exemplos: [
      "Nde nde puku-wé txe-gwi.",
      "Kwaray imbareté-wé araí-gwi."
    ],
    traducao: [
      "Você é mais alto que eu.",
      "O sol é mais forte que a nuvem."
    ]
  },

  // ----------------------------------------------------------
  // POSPOSIÇÕES
  // ----------------------------------------------------------
  {
    palavra: "-mbyté",
    tipo: "pós-posição",
    categoria: "Pós-posições",
    significado: "Meio de; entre.",
    audio: "assets/audios/mbyte_suf.mp3",
    sentido_de: "Radical posposicional que origina -mbyté-py.",
    falante: "Uso geral",
    variantes: ["-mbyté-py"],
    exemplos: [
      "Ywy mbyté.",
      "Tape mbyté."
    ],
    traducao: [
      "Meio da terra.",
      "Meio do caminho."
    ]
  },
  {
    palavra: "-kwé",
    tipo: "sufixo",
    categoria: "Pós-posições",
    significado: "Ex-, que já foi.",
    audio: "assets/audios/kwe_suf2.mp3",
    sentido_de: "Marca estado anterior; forma txemẽ-kwé (ex-marido).",
    falante: "Uso geral",
    exemplos: [
      "Txemẽ-kwé.",
      "Txerembirekó-kwé."
    ],
    traducao: [
      "Meu ex-marido.",
      "Minha ex-esposa."
    ]
  },

  // ----------------------------------------------------------
  // VERBOS IRREGULARES (verbetes gramaticais)
  // ----------------------------------------------------------
  {
    palavra: "-a / -ó (ir)",
    tipo: "verbo irregular",
    categoria: "Verbos",
    significado: "Ir. Conjugação: aá, reó, oó, djaá, roó, peó, oó.",
    audio: "assets/audios/verbo_ir.mp3",
    sentido_de: "Verbo irregular com raiz -ó na maioria das pessoas e -á na 1ª do singular e do plural inclusivo.",
    falante: "Uso geral",
    variantes: ["-a", "-ó"],
    exemplos: [
      "Txeé aá.",
      "Ndeé reó.",
      "A'e oó.",
      "Nhandé djaá.",
      "Oré roó.",
      "Peẽ peó."
    ],
    traducao: [
      "Eu vou.",
      "Você vai.",
      "Ele vai.",
      "Nós vamos (incl.).",
      "Nós vamos (excl.).",
      "Vocês vão."
    ],
    nota: "Verbo irregular. No Tupi Antigo era regular (açó, ereçó, oçó, djaçó)."
  },
  {
    palavra: "-ju / -ú (vir)",
    tipo: "verbo irregular",
    categoria: "Verbos",
    significado: "Vir. Conjugação: adju, redju, oú, djadju, rodju, pedju, oú.",
    audio: "assets/audios/verbo_vir.mp3",
    sentido_de: "Verbo irregular; a 3ª pessoa tem forma oú em vez de odju.",
    falante: "Uso geral",
    variantes: ["-ju", "-ú"],
    exemplos: [
      "Txeé adju.",
      "Ndeé redju.",
      "A'e oú.",
      "Nhandé djadju.",
      "Peẽ pedju."
    ],
    traducao: [
      "Eu venho.",
      "Você vem.",
      "Ele vem.",
      "Nós viemos (incl.).",
      "Vocês vêm."
    ],
    nota: "Verbo irregular."
  },
  {
    palavra: "-e'i (dizer)",
    tipo: "verbo irregular",
    categoria: "Verbos",
    significado: "Dizer. Conjugação: a'e, ere, e'i, dja'e, ro'e, pedje, e'i.",
    audio: "assets/audios/verbo_dizer.mp3",
    sentido_de: "Verbo irregular; a 3ª pessoa é e'i.",
    falante: "Uso geral",
    exemplos: [
      "Txeé a'e.",
      "Ndeé ere.",
      "A'e e'i.",
      "Nhandé dja'e.",
      "Peẽ pedje."
    ],
    traducao: [
      "Eu digo.",
      "Você diz.",
      "Ele diz.",
      "Nós dizemos (incl.).",
      "Vocês dizem."
    ],
    nota: "Verbo irregular."
  },
  {
    palavra: "-rekó (ter)",
    tipo: "verbo irregular",
    categoria: "Verbos",
    significado: "Ter; possuir. Conjugação: arekó, rerekó, ogwerekó, djarekó, rogwerekó, perekó, ogwerekó.",
    audio: "assets/audios/verbo_ter.mp3",
    sentido_de: "Verbo irregular com formas especiais na 3ª pessoa (ogwerekó) e na 1ª exclusiva (rogwerekó).",
    falante: "Uso geral",
    exemplos: [
      "Txeé arekó.",
      "Ndeé rerekó.",
      "A'e ogwerekó.",
      "Nhandé djarekó.",
      "Oré rogwerekó.",
      "Peẽ perekó."
    ],
    traducao: [
      "Eu tenho.",
      "Você tem.",
      "Ele tem.",
      "Nós temos (incl.).",
      "Nós temos (excl.).",
      "Vocês têm."
    ],
    nota: "Verbo irregular."
  },
  {
    palavra: "-ru (trazer)",
    tipo: "verbo irregular",
    categoria: "Verbos",
    significado: "Trazer. Conjugação: aru, reru, ogweru, djagweru, rogweru, pegweru, ogweru.",
    audio: "assets/audios/verbo_trazer.mp3",
    sentido_de: "Verbo irregular com formas ogweru na 3ª pessoa.",
    falante: "Uso geral",
    exemplos: [
      "Txeé aru.",
      "Ndeé reru.",
      "A'e ogweru.",
      "Nhandé djagweru.",
      "Peẽ pegweru."
    ],
    traducao: [
      "Eu trago.",
      "Você traz.",
      "Ele traz.",
      "Nós trazemos (incl.).",
      "Vocês trazem."
    ],
    nota: "Verbo irregular."
  },
  {
    palavra: "-dje'oi (irem-se)",
    tipo: "verbo defectivo",
    categoria: "Verbos",
    significado: "Irem-se; saírem juntos. Só tem formas no plural.",
    audio: "assets/audios/djeoi.mp3",
    sentido_de: "Verbo defectivo: não conjuga no singular.",
    falante: "Uso geral",
    exemplos: [
      "Nhandé djadje'oi.",
      "Oré rodje'oi.",
      "Peẽ pedje'oi.",
      "Eĩwa odje'oi."
    ],
    traducao: [
      "Nós vamos embora (incl.).",
      "Nós vamos embora (excl.).",
      "Vocês vão embora.",
      "Eles vão embora."
    ],
    nota: "Verbo defectivo — só plural."
  },

  // ----------------------------------------------------------
  // VERBOS — lacunas reais do VB
  // ----------------------------------------------------------
  {
    palavra: "-djorá-uká",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Fazer amarrar; mandar atar.",
    audio: "assets/audios/djora-uka.mp3",
    sentido_de: "Causativo com -uká de verbo transitivo.",
    falante: "Uso geral",
    exemplos: [
      "Adjorá-uká kawaru.",
      "Odjorá-uká ywyrá."
    ],
    traducao: [
      "Eu mando amarrar o cavalo.",
      "Ele mandou amarrar a madeira."
    ]
  },
  {
    palavra: "-gwedjy",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Descer.",
    audio: "assets/audios/gwedjy.mp3",
    sentido_de: "Verbo de movimento descendente.",
    falante: "Uso geral",
    variantes: ["gwedjyma", "gwedjy-pá", "gwedjy-pama"],
    exemplos: [
      "Ogwedjy ywyty-gwi.",
      "Gwedjyma pamẽ."
    ],
    traducao: [
      "Ele desceu da serra.",
      "Desceram todos."
    ]
  },
  {
    palavra: "-mondo",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Enviar; mandar; soltar.",
    audio: "assets/audios/mondo.mp3",
    sentido_de: "Verbo transitivo de envio.",
    falante: "Uso geral",
    exemplos: [
      "Amondo mitã.",
      "Omondo kuatia."
    ],
    traducao: [
      "Eu envio a criança.",
      "Ele manda a carta."
    ]
  },
  {
    palavra: "opupu",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Ferver (3ª pessoa).",
    audio: "assets/audios/opupu.mp3",
    sentido_de: "Verbo que descreve ebulição.",
    falante: "Uso geral",
    variantes: ["-pupu"],
    exemplos: [
      "Yy opupu.",
      "Djapepó-py opupu."
    ],
    traducao: [
      "A água ferve.",
      "Ferve na panela."
    ]
  },
  {
    palavra: "oipota",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Querer, gostar de algo (3ª pessoa).",
    audio: "assets/audios/oipota.mp3",
    sentido_de: "3ª pessoa de aipota.",
    falante: "Uso geral",
    exemplos: [
      "Oipota tembi'u.",
      "Oipota y."
    ],
    traducao: [
      "Ele quer comida.",
      "Ele quer água."
    ]
  },
  {
    palavra: "oipy'y",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Pegou, pegar (com a mão).",
    audio: "assets/audios/oipyy.mp3",
    sentido_de: "3ª pessoa de -py'y.",
    falante: "Uso geral",
    variantes: ["wipyw"],
    exemplos: [
      "Oipy'y ywyra.",
      "Oipy'y ijywá-py."
    ],
    traducao: [
      "Ele pegou a madeira.",
      "Ele segurou pelo braço."
    ]
  },
  {
    palavra: "oiporu",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Emprestar (3ª pessoa).",
    audio: "assets/audios/oiporu2.mp3",
    sentido_de: "Registro do VB como 'emprestar'.",
    falante: "Uso geral",
    variantes: ["iporu"],
    exemplos: [
      "Oiporu kytsé.",
      "Oiporu txepó."
    ],
    traducao: [
      "Ele empresta a faca.",
      "Ele usa a minha mão."
    ]
  },
  {
    palavra: "oñembyai",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Machucou-se, estragou-se.",
    audio: "assets/audios/onembyai.mp3",
    sentido_de: "Forma reflexiva de -mbyai.",
    falante: "Uso geral",
    exemplos: [
      "Oñembyai idjuwa.",
      "Tembi'u oñembyai aku-pe."
    ],
    traducao: [
      "Machucou o braço.",
      "A comida estragou no calor."
    ]
  },
  {
    palavra: "oñepytyvõ",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Ajudou, ajudou-se (3ª pessoa).",
    audio: "assets/audios/onepytyvo.mp3",
    sentido_de: "Verbo de auxílio, reflexivo e transitivo.",
    falante: "Uso geral",
    exemplos: [
      "Oñepytyvõ imemby.",
      "Oñepytyvõ mba'apo-pe."
    ],
    traducao: [
      "Ajudou o filho.",
      "Ajudou no trabalho."
    ]
  },
  {
    palavra: "oñepyyrõ",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Começou, iniciou.",
    audio: "assets/audios/onepyyro.mp3",
    sentido_de: "Verbo que marca início de ação.",
    falante: "Uso geral",
    exemplos: [
      "Oñepyyrõ odjupi.",
      "Oñepyyrõ oky gwasu."
    ],
    traducao: [
      "Começou a subir.",
      "Começou uma chuva forte."
    ]
  },
  {
    palavra: "omanõ",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Morreu (3ª pessoa).",
    audio: "assets/audios/omano2.mp3",
    sentido_de: "Verbo intransitivo de 1ª conjugação.",
    falante: "Uso geral",
    exemplos: [
      "Katxuru omanõ.",
      "Omanõma Nhanderu renimbowy."
    ],
    traducao: [
      "O cachorro morreu.",
      "Morreu um enviado de Nhanderu."
    ]
  },
  {
    palavra: "onhomí",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Escondeu, esconder.",
    audio: "assets/audios/onhomi.mp3",
    sentido_de: "3ª pessoa.",
    falante: "Uso geral",
    variantes: ["nhẽ'mĩ", "nhemũ"],
    exemplos: [
      "Onhomí ywyra rowa py.",
      "Onhomí idjaká."
    ],
    traducao: [
      "Escondeu no tronco da árvore.",
      "Escondeu o cesto."
    ]
  },
  {
    palavra: "oky",
    tipo: "substantivo / verbo",
    categoria: "Natureza",
    significado: "Chuva; chover.",
    audio: "assets/audios/oky2.mp3",
    sentido_de: "Fenômeno meteorológico; sujeito natural sem agente.",
    falante: "Uso geral",
    exemplos: [
      "Oky ko'aỹ.",
      "Okyta ko'ẽro."
    ],
    traducao: [
      "Chove hoje.",
      "Vai chover amanhã."
    ]
  },
  {
    palavra: "okẽ",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Dormir; dormiu.",
    audio: "assets/audios/oke2.mp3",
    sentido_de: "Verbo de estado.",
    falante: "Uso geral",
    variantes: ["oké", "oqué"],
    exemplos: [
      "Mitã okẽ.",
      "Ake porã pyhare."
    ],
    traducao: [
      "A criança dorme.",
      "Dormi bem à noite."
    ]
  },
  {
    palavra: "omenda",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Casar; casou.",
    audio: "assets/audios/omenda.mp3",
    sentido_de: "Verbo de união matrimonial.",
    falante: "Uso geral",
    exemplos: [
      "Omenda kunhã.",
      "Omenda tekoa-py."
    ],
    traducao: [
      "Casou com a mulher.",
      "Casou na aldeia."
    ]
  },
  {
    palavra: "omombó",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Jogar; atirar.",
    audio: "assets/audios/omombo.mp3",
    sentido_de: "3ª pessoa.",
    falante: "Uso geral",
    variantes: ["mombo"],
    exemplos: [
      "Omombó itá y-pe.",
      "Omombó ywyra."
    ],
    traducao: [
      "Jogou a pedra na água.",
      "Jogou a madeira."
    ]
  },
  {
    palavra: "oú",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Veio; vir (3ª pessoa irregular).",
    audio: "assets/audios/ou2.mp3",
    sentido_de: "3ª pessoa do verbo -ju (vir).",
    falante: "Uso geral",
    exemplos: [
      "Oú ko'ápe.",
      "Oú omaẽ."
    ],
    traducao: [
      "Ele veio aqui.",
      "Ele veio chegar."
    ]
  },
  {
    palavra: "outa",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Vai vir (3ª pessoa do futuro).",
    audio: "assets/audios/outa.mp3",
    sentido_de: "Futuro de -ju com sufixo -ta.",
    falante: "Uso geral",
    exemplos: [
      "Outa ko'ẽro.",
      "Outa tekoa-py."
    ],
    traducao: [
      "Ele vai vir amanhã.",
      "Ele vai vir para a aldeia."
    ]
  },
  {
    palavra: "gwerú",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Traz, trazer.",
    audio: "assets/audios/gweru.mp3",
    sentido_de: "Forma de 2ª/3ª pessoa do verbo -ru (trazer).",
    falante: "Uso geral",
    variantes: ["ogweru", "gweruma"],
    exemplos: [
      "Gwerú y aku.",
      "Ogweru ewa."
    ],
    traducao: [
      "Traz água quente.",
      "Trouxe a caça."
    ]
  },
  {
    palavra: "gwereko",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Ele/ela tem.",
    audio: "assets/audios/gwereko.mp3",
    sentido_de: "Forma de 3ª pessoa de -rekó (ter).",
    falante: "Uso geral",
    exemplos: [
      "Gwereko óga.",
      "Gwereko tembi'u."
    ],
    traducao: [
      "Ele tem casa.",
      "Ele tem comida."
    ]
  },
  {
    palavra: "gwerowá",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Mudar, trocar, mudar de lugar.",
    audio: "assets/audios/gwerowa.mp3",
    sentido_de: "Verbo causativo de mudança.",
    falante: "Uso geral",
    variantes: ["gwerowamá", "gwerowapa", "gwerowa-pá"],
    exemplos: [
      "Gwerowá txe rendá.",
      "Gwerowamá tekoa."
    ],
    traducao: [
      "Mudou minha casa.",
      "Já mudou a aldeia."
    ]
  },
  {
    palavra: "ogweraá",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Levou; levar (3ª pessoa).",
    audio: "assets/audios/ogweraa.mp3",
    sentido_de: "Forma de 3ª pessoa de gweraá.",
    falante: "Uso geral",
    variantes: ["araá"],
    exemplos: [
      "Ogweraá tembi'u.",
      "Ogweraá adjaká."
    ],
    traducao: [
      "Levou a comida.",
      "Levou o cesto."
    ]
  },
  {
    palavra: "pysyka",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Segurar; pegar.",
    audio: "assets/audios/pysyka.mp3",
    sentido_de: "Verbo transitivo de preensão.",
    falante: "Uso geral",
    exemplos: [
      "Aipysyka ndepó.",
      "Oipysyka ywyra."
    ],
    traducao: [
      "Seguro tua mão.",
      "Ele segura a madeira."
    ]
  },
  {
    palavra: "oipopý",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Pegar com as mãos.",
    audio: "assets/audios/oipopy.mp3",
    sentido_de: "Registro do VB; forma enfática de pegar.",
    falante: "Uso geral",
    exemplos: [
      "Oipopý tembi'u.",
      "Oipopý ywyra."
    ],
    traducao: [
      "Pegou a comida com as mãos.",
      "Pegou a madeira com as mãos."
    ]
  },
  {
    palavra: "oipoãpẽ",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Trançar.",
    audio: "assets/audios/oipoape.mp3",
    sentido_de: "Verbo de artesanato; trançar cesto ou corda.",
    falante: "Uso geral",
    exemplos: [
      "Oipoãpẽ adjaká.",
      "Oipoãpẽ mbo'y."
    ],
    traducao: [
      "Trançou o cesto.",
      "Trançou o colar."
    ]
  },
  {
    palavra: "ome'ẽ",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Deu, entregou.",
    audio: "assets/audios/omee.mp3",
    sentido_de: "3ª pessoa de -me'ẽ (dar).",
    falante: "Uso geral",
    variantes: ["emeẽ"],
    exemplos: [
      "Nhanderú ome'ẽ nhandewy.",
      "Ome'ẽ tembi'u."
    ],
    traducao: [
      "Deus nos deu.",
      "Deu comida."
    ]
  },
  {
    palavra: "oú-uká",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Fez vir, mandou vir.",
    audio: "assets/audios/ouuka.mp3",
    sentido_de: "Causativo com -uká de -ju (vir).",
    falante: "Uso geral",
    variantes: ["omboú-ká"],
    exemplos: [
      "Nhanderu omboú-ká.",
      "Oú-uká mitã."
    ],
    traducao: [
      "Nhanderu fez chegar.",
      "Mandou vir a criança."
    ]
  },
  {
    palavra: "oitypytéré",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Fez cair.",
    audio: "assets/audios/oitypytere.mp3",
    sentido_de: "Causativo de -ity (cair), registro do VB.",
    falante: "Uso geral",
    variantes: ["ooitypyteré"],
    exemplos: [
      "Oitypytéré ywyra.",
      "Oitypytéré ywy."
    ],
    traducao: [
      "Fez a madeira cair.",
      "Fez cair ao chão."
    ]
  },
  {
    palavra: "onhoe'ã",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Nasceu (registro de Nhandeypygwá).",
    audio: "assets/audios/onhoea.mp3",
    sentido_de: "3ª pessoa; marcador de nascimento em narrativas.",
    falante: "Uso geral",
    variantes: ["oa'e"],
    exemplos: [
      "Onhoe'ã mitã.",
      "Onhoe'ã kweé."
    ],
    traducao: [
      "A criança nasceu.",
      "Nasceu ontem."
    ]
  },
  {
    palavra: "oikuarã",
    tipo: "verbo",
    categoria: "Verbos",
    significado: "Amanheceu.",
    audio: "assets/audios/oikoara.mp3",
    sentido_de: "Verbo temporal: romper do dia.",
    falante: "Uso geral",
    variantes: ["oko'ẽmbama", "ko'ẽmbama"],
    exemplos: [
      "Oikuarãma.",
      "Oikuarã porã."
    ],
    traducao: [
      "Já amanheceu.",
      "Amanheceu bonito."
    ]
  },

  // ----------------------------------------------------------
  // INTERROGATIVO
  // ----------------------------------------------------------
  {
    palavra: "mboýpa",
    tipo: "partícula interrogativa",
    categoria: "Expressões",
    significado: "Quantos? (forma com -pa).",
    audio: "assets/audios/interr_mboypa.mp3",
    sentido_de: "Pergunta de quantidade; variante enfática de mbowy.",
    falante: "Uso geral",
    exemplos: [
      "Mboýpa nderemba'e?",
      "Mboýpa avá ou?"
    ],
    traducao: [
      "Quanto é o teu preço?",
      "Quantos homens vieram?"
    ]
  },

  // ----------------------------------------------------------
  // NOMES CULTURAIS
  // ----------------------------------------------------------
  {
    palavra: "Nhanderueté",
    tipo: "nome próprio",
    categoria: "Expressões",
    significado: "Deus; o Grande Pai.",
    audio: "assets/audios/nhanderuete.mp3",
    sentido_de: "Referência central da cosmologia Nhandewa.",
    falante: "Uso geral",
    variantes: ["Nhanderu eté"],
    exemplos: [
      "Nhanderueté imbaretéwé.",
      "Nhanderueté upé djaywu."
    ],
    traducao: [
      "Deus é o mais forte.",
      "Falamos com Deus."
    ]
  },
  {
    palavra: "Nhanderú",
    tipo: "nome próprio",
    categoria: "Expressões",
    significado: "Nosso Pai (Deus).",
    audio: "assets/audios/nhanderu.mp3",
    sentido_de: "Forma carinhosa e direta de Nhanderueté.",
    falante: "Uso geral",
    variantes: ["Nhanderu"],
    exemplos: [
      "Nhanderú ome'ẽ nhandewy.",
      "Nhanderú rewé djajeroky."
    ],
    traducao: [
      "Deus nos deu.",
      "Dançamos para Deus."
    ]
  },
  {
    palavra: "Nhandedjary",
    tipo: "nome próprio",
    categoria: "Expressões",
    significado: "Nossa Avó; figura espiritual feminina.",
    audio: "assets/audios/nhandedjary.mp3",
    sentido_de: "Referência espiritual feminina.",
    falante: "Uso geral",
    exemplos: [
      "Nhandedjary oipotá.",
      "Nhandedjary upé djaywu."
    ],
    traducao: [
      "Nossa Avó quer.",
      "Falamos com Nossa Avó."
    ]
  },
{
    palavra: "Nhanderueté",
    tipo: "nome próprio",
    categoria: "Expressões",
    significado: "Deus; o Grande Pai (literalmente 'Nosso Pai Verdadeiro').",
    audio: "assets/audios/nhanderuete.mp3",
    sentido_de: "Referência central da cosmologia Nhandewa.",
    falante: "Uso geral",
    variantes: ["Nhanderueté", "Nhanderuwutsu"],
    exemplos: [
      "Nhanderueté imbaretéwé.",
      "Nhanderueté upé djaywu."
    ],
    traducao: [
      "Deus é o mais forte.",
      "Falamos com Deus."
    ]
  },

  {
    palavra: "Oy-Gwatsu",
    tipo: "nome próprio",
    categoria: "Expressões",
    significado: "Casa de reza; casa sagrada.",
    audio: "assets/audios/oy-gwatsu.mp3",
    sentido_de: "Espaço ritual central da aldeia.",
    falante: "Uso geral",
    variantes: ["Oy-Gwatsú", "Opy gwatsu"],
    exemplos: [
      "Oy-Gwatsu-py rono'õ.",
      "Oy-Gwatsu iporã eté."
    ],
    traducao: [
      "Nos reunimos na casa de reza.",
      "A casa de reza é muito bonita."
    ]
  },
  {
    palavra: "Nhanderekó",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Nosso modo de vida; nossa cultura.",
    audio: "assets/audios/nhandereko.mp3",
    sentido_de: "Conceito central: práticas, costumes e cosmologia do povo.",
    falante: "Uso geral",
    exemplos: [
      "Nhanderekó imaraẽgatu.",
      "Nhaningarekó nhanderekó-gwi."
    ],
    traducao: [
      "Nosso modo de vida é sagrado.",
      "Cuidamos do nosso modo de vida."
    ]
  },
  {
    palavra: "Ywypory",
    tipo: "substantivo",
    categoria: "Expressões",
    significado: "Não-índio; branco.",
    audio: "assets/audios/ywypory.mp3",
    sentido_de: "Termo usado para pessoas não indígenas.",
    falante: "Uso geral",
    variantes: ["Ywypory kwery"],
    exemplos: [
      "Ywypory ou tetã-gwi.",
      "Nhandeaywu ywypory rewé."
    ],
    traducao: [
      "O não-índio vem da cidade.",
      "Falamos com o não-índio."
    ]
  },
  {
    palavra: "konumĩ",
    tipo: "substantivo",
    categoria: "Família",
    significado: "Rapaz, jovem.",
    audio: "assets/audios/konumi.mp3",
    sentido_de: "Jovem do sexo masculino.",
    falante: "Uso geral",
    variantes: ["kunumi", "konomĩ"],
    exemplos: [
      "Konumĩ ogwatá tape-rupi.",
      "Konumĩ oñani porã."
    ],
    traducao: [
      "O rapaz caminha pelo caminho.",
      "O rapaz corre bem."
    ]
  },
  {
    palavra: "kunhataĩ",
    tipo: "substantivo",
    categoria: "Família",
    significado: "Moça, jovem.",
    audio: "assets/audios/kunhatai.mp3",
    sentido_de: "Jovem do sexo feminino em idade de casar.",
    falante: "Uso geral",
    exemplos: [
      "Kunhataĩ iporã.",
      "Kunhataĩ oiko tekoa-py."
    ],
    traducao: [
      "A moça é bonita.",
      "A moça vive na aldeia."
    ]
  },
  {
    palavra: "mitã'ĩ",
    tipo: "substantivo",
    categoria: "Família",
    significado: "Neném, criancinha.",
    audio: "assets/audios/mitai.mp3",
    sentido_de: "Criança de colo; forma carinhosa derivada de mitã.",
    falante: "Uso geral",
    variantes: ["mitã'i"],
    exemplos: [
      "Mitã'ĩ oke.",
      "Mitã'ĩ oñe'ẽ."
    ],
    traducao: [
      "O neném dorme.",
      "O neném fala."
    ]
  },

  // ----------------------------------------------------------
  // NATUREZA — frio e temperatura
  // ----------------------------------------------------------
  {
    palavra: "ro'ygwatsu",
    tipo: "substantivo",
    categoria: "Natureza",
    significado: "Frio intenso; inverno rigoroso.",
    audio: "assets/audios/roygwatsu.mp3",
    sentido_de: "Frio grande; peça central do conto 'Tay odjopy'.",
    falante: "Uso geral",
    exemplos: [
      "Ro'ygwatsu ou ko'ẽro.",
      "Ro'ygwatsu-py djaike óga-py."
    ],
    traducao: [
      "O frio intenso chega amanhã.",
      "No frio intenso a gente entra em casa."
    ]
  },

  // ----------------------------------------------------------
  // TOPÔNIMOS
  // ----------------------------------------------------------
   {
    palavra: "Karugwá",
    tipo: "nome próprio",
    categoria: "Localização",
    significado: "Aldeia Karugwá.",
    audio: "assets/audios/karugwá.mp3",
    sentido_de: "Topônimo de aldeia .",
    falante: "Uso geral",
    exemplos: [
      "Txeé Karugwá-py aikó.",
      "Karugwá pygwá."
    ],
    traducao: [
      "Eu moro em Karugwá.",
      "Sou de Karugwá."
    ]
  },
 {
    palavra: "Nimuendajú",
    tipo: "nome próprio",
    categoria: "Localização",
    significado: "Aldeia Nimuendajú (T.I. Araribá, SP).",
    audio: "assets/audios/nimuendaju.mp3",
    sentido_de: "Topônimo de aldeia; homenagem a Curt Nimuendajú.",
    falante: "Uso geral",
    exemplos: [
      "Txeé Nimuendajú-py aikó.",
      "Nimuendajú pygwá."
    ],
    traducao: [
      "Eu moro em Nimuendajú.",
      "Sou de Nimuendajú."
    ]
  },
  {
    palavra: "Pakowaty",
    tipo: "nome próprio",
    categoria: "Localização",
    significado: "Aldeia Bananal (Pakowaty).",
    audio: "assets/audios/pakowaty.mp3",
    sentido_de: "Topônimo de aldeia; 'lugar de bananeiras'.",
    falante: "Uso geral",
    variantes: ["Bananal"],
    exemplos: [
      "Txeé Pakowaty-py aikó.",
      "Oho Pakowaty-pe."
    ],
    traducao: [
      "Eu moro em Bananal.",
      "Ele foi para Bananal."
    ]
  },
  {
    palavra: "Piaçaguera",
    tipo: "nome próprio",
    categoria: "Localização",
    significado: "Aldeia Piaçaguera (Peruíbe, SP).",
    audio: "assets/audios/piacaguera.mp3",
    sentido_de: "Topônimo de aldeia litorânea.",
    falante: "Uso geral",
    exemplos: [
      "Piaçaguera-py oikó.",
      "Txeé Piaçaguera-py aikó."
    ],
    traducao: [
      "Ele mora em Piaçaguera.",
      "Eu moro em Piaçaguera."
    ]
  },
  {
    palavra: "Itariri",
    tipo: "nome próprio",
    categoria: "Localização",
    significado: "Itariri (aldeia/município, SP).",
    audio: "assets/audios/itariri.mp3",
    sentido_de: "Topônimo de aldeia.",
    falante: "Uso geral",
    exemplos: [
      "Itariri-py oikó txetsy.",
      "Aá Itariri-py."
    ],
    traducao: [
      "Minha mãe mora em Itariri.",
      "Vou para Itariri."
    ]
  },
  {
    palavra: "Nhamandú Mirim",
    tipo: "nome próprio",
    categoria: "Localização",
    significado: "Aldeia Nhamandú Mirim.",
    audio: "assets/audios/nhamandu-mirim.mp3",
    sentido_de: "Topônimo de aldeia.",
    falante: "Uso geral",
    exemplos: [
      "Txeé Nhamandú Mirim-py aikó.",
      "Nhamandú Mirim pygwá."
    ],
    traducao: [
      "Eu moro em Nhamandú Mirim.",
      "Sou de Nhamandú Mirim."
    ]
  },

  // ----------------------------------------------------------
  // SAUDAÇÕES
  // ----------------------------------------------------------
  {
    palavra: "Pemaẽ porã",
    tipo: "expressão",
    categoria: "Expressões",
    significado: "Bem-vindos; sejam bem-vindos.",
    audio: "assets/audios/pemae_pora.mp3",
    sentido_de: "Saudação de recepção no plural.",
    falante: "Uso geral",
    variantes: ["Pemae porã"],
    exemplos: [
      "Pemaẽ porã ko'ápe!",
      "Pemaẽ porã, txerapitxá kwery."
    ],
    traducao: [
      "Sejam bem-vindos aqui!",
      "Sejam bem-vindos, meus amigos."
    ]
  },
  {
    palavra: "Pendu",
    tipo: "expressão",
    categoria: "Expressões",
    significado: "Ouçam (imperativo plural).",
    audio: "assets/audios/pendu.mp3",
    sentido_de: "Chamada de atenção no plural.",
    falante: "Uso geral",
    exemplos: [
      "Pendu porã!",
      "Pendu txenhe'ẽ."
    ],
    traducao: [
      "Ouçam bem!",
      "Ouçam minha fala."
    ]
  },
  {
    palavra: "Pedju woí",
    tipo: "expressão",
    categoria: "Expressões",
    significado: "Venham logo! Venham depressa!",
    audio: "assets/audios/pedju_woi.mp3",
    sentido_de: "Chamamento plural com urgência.",
    falante: "Uso geral",
    variantes: ["Pedjú woi"],
    exemplos: [
      "Pedju woí ko'ápe!",
      "Pedju woí, okyta!"
    ],
    traducao: [
      "Venham logo aqui!",
      "Venham logo, vai chover!"
    ]
  },
  {
    palavra: "Peporaí",
    tipo: "expressão",
    categoria: "Expressões",
    significado: "Cantem!",
    audio: "assets/audios/peporai.mp3",
    sentido_de: "Convite ou ordem para cantar no plural.",
    falante: "Uso geral",
    exemplos: [
      "Peporaí Nhanderu ré!",
      "Peporaí nhandé rewé!"
    ],
    traducao: [
      "Cantem para Nhanderu!",
      "Cantem conosco!"
    ]
  },
  {
    palavra: "Ma'erã ndouwui",
    tipo: "expressão",
    categoria: "Expressões",
    significado: "Por que você não veio?",
    audio: "assets/audios/maera_ndouwui.mp3",
    sentido_de: "Pergunta sobre ausência ou não comparecimento.",
    falante: "Uso geral",
    exemplos: [
      "Ma'erã ndouwui kweé?",
      "Ma'erã ndouwui ko'ẽmba-re?"
    ],
    traducao: [
      "Por que você não veio ontem?",
      "Por que você não veio de manhã?"
    ]
  },
  {
    palavra: "Adjiwyma",
    tipo: "expressão",
    categoria: "Expressões",
    significado: "Tchau; adeus (vou embora).",
    audio: "assets/audios/adjiwyma.mp3",
    sentido_de: "Despedida de quem está saindo.",
    falante: "Uso geral",
    variantes: ["Adiwyma"],
    exemplos: [
      "Adjiwyma, txerapitxá.",
      "Adjiwyma, ko'ẽro adju djiwy."
    ],
    traducao: [
      "Tchau, meu amigo.",
      "Tchau, amanhã eu volto."
    ]
  },
  {
    palavra: "Pedjapó porã",
    tipo: "expressão",
    categoria: "Expressões",
    significado: "Façam direitinho!",
    audio: "assets/audios/pedjapo_pora.mp3",
    sentido_de: "Exortação no plural para fazer bem algo.",
    falante: "Uso geral",
    exemplos: [
      "Pedjapó porã, mitãngwé!",
      "Pedjapó porã peẽ pameĩ."
    ],
    traducao: [
      "Façam direitinho, crianças!",
      "Façam direitinho vocês todos."
    ]
  },
  {
    palavra: "Pekarú porã",
    tipo: "expressão",
    categoria: "Expressões",
    significado: "Comam direitinho!",
    audio: "assets/audios/pekaru_pora.mp3",
    sentido_de: "Exortação no plural à refeição.",
    falante: "Uso geral",
    exemplos: [
      "Pekarú porã, mitãngwé!",
      "Pekarú porã ko'ã tembi'u."
    ],
    traducao: [
      "Comam direitinho, crianças!",
      "Comam direitinho esta comida."
    ]
  }
];
// =====================================================
// INTEGRAÇÃO DO DICIONÁRIO 3 AO DICIONÁRIO PRINCIPAL
// (mesmo padrão do dicionario2.js)
// =====================================================

if (
    typeof DICIONARIO !== "undefined" &&
    Array.isArray(DICIONARIO) &&
    Array.isArray(DICIONARIO3)
) {
    DICIONARIO.push(...DICIONARIO3);

    console.log(
        "Dicionário 3 integrado com sucesso:",
        DICIONARIO3.length,
        "novos termos adicionados."
    );
}
