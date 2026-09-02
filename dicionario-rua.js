const DICIONARIO_RUA = [
    {
        palavra: "Ka'i",
        tipo: "linguagem de rua",
        significado: "Macaco.",
        sentido_de: "Termo originalmente descritivo da fauna, associado pejorativamente a pessoas de pele preta (kambá) sob influência do preconceito externo.",
        falante: "Anônimo",
        exemplos: ["Kambá oiko ka'i rami."],
        traducao: ["O preto vive como macaco."]
    },
    {
        palavra: "Mandopá",
        tipo: "linguagem de rua",
        significado: "Expressão pejorativa de ofensa equivalente a txewori.",
        sentido_de: "Termo de forte conotação depreciativa usado na oralidade informal de campo com intenção de maldade ou xingamento direto.",
        falante: "Anônimo",
        exemplos: ["Ha'ã, mondopá ndejuro."],
        traducao: ["Vou mandar o pa# na sua boca."]
    },
    {
     palavra: "Tsewori",

        tipo: "linguagem de rua / zoeira de campo",

        significado: "Expressão informal que denota urgência e o estado de pressão estomacal iminente.",

        sentido_de: "Termo usado na oralidade cotidiana para descrever o momento crítico de aperto e a necessidade imediata de correr para o alívio.",

        falante: "Anônimo",

        exemplos: ["Neink djauaty-py tsewori!"],

        traducao: ["Ih, corre pro banheiro que vai arrebentar de cagar!"]

    },  

    {

        palavra: "Mandopá",

        tipo: "linguagem de rua / palavrão",

        significado: "Expressão agressiva ou de forte conotação sexual usada para humilhar o interlocutor.",

        funcao: "Funciona como um xingamento direto e pesado na oralidade de campo, usado para calar ou ofender alguém de forma extrema.",

        uso_indevido: "Diferente da zoeira cotidiana, o seu uso é intencionalmente ofensivo e hostil, configurando uma agressão verbal que passa de todos os limites da brincadeira.",

        falante: "Anônimo",

        exemplos: ["Ha'ã, mandopá nedjuro."],

        traducao: ["Vou mandar ver na sua boca (para não dizer algo ainda mais pesado)."]

    },

    {

        palavra: "Tembo",

        tipo: "linguagem de rua / palavrão",

        significado: "Termo anatômico de baixo calão equivalente a um xingamento de forte teor sexual.",

        funcao: "Expressar raiva extrema, ofender diretamente o interlocutor ou fechar uma discussão na base da agressão verbal.",

        uso_indevido: "Usado fora de contexto ou sem o devido peso de afronta, mas que na prática carrega uma carga altamente ofensiva e chula.",

        falante: "Anônimo",

        exemplos: ["Eipyy txerembo atã."],

        traducao: ["Pegue no meu *** duro."]

    },

    {

        palavra: "Popi",

        tipo: "linguagem de rua / baixo calão / agressão verbal",

        significado: "Xingamento misógino e depreciativo direcionado especificamente para ofender e humilhar uma mulher na base de ataques corporais e sexuais.",

        funcao: "Ferir a dignidade, desqualificar ou atacar de forma sexista e chula na dinâmica de brigas ou provocações da oralidade de campo.",

        uso_indevido: "Tratar a expressão como mera gíria comum ou brincadeira leve, quando na verdade opera como uma violência verbal direta contra a mulher.",

        falante: "Anônimo",

        exemplos: ["Nepopi iné."],

        traducao: ["A sua **** tem mau cheiro / sua fedorenta."]

    },

    {

        palavra: "Ywypory",

        tipo: "linguagem de rua / gíria de contato intercultural",

        significado: "Termo de origem histórica colonial (associado inicialmente ao homem branco / não índio) ressignificado na oralidade contemporânea.",

        funcao: "Servir como xingamento, provocação ou rótulo depreciativo dentro das aldeias para ironizar, criticar ou ofender comportamentos associados aos não indígenas.",

        uso_indevido: "Descontextualizar a palavra ignorando a tensão histórica e o peso da dinâmica de opressão/alteridade entre indígenas e brancos (jurupá/karai).",

        falante: "Anônimo",

        exemplos: ["Ko ywypory mbodjegwaru!"],

        traducao: ["Olha esse branco nojento/ imundo!"]

    },

    {

        palavra: "Kambá",

        tipo: "linguagem de rua / racismo cotidiano",

        significado: "Expressão de cunho racista usada na oralidade de campo para inferiorizar e estigmatizar alguém com base na cor da pele.",

        funcao: "Atribuir estereótipos negativos ou cobrar comportamentos pejorativos associados de forma preconceituosa.",

        uso_indevido: "Naturalizar a fala como se fosse apenas uma expressão comum, ignorando o peso do preconceito racial.",

        falante: "Anônimo",

        exemplos: ["Kambá reko etei."],

        traducao: ["Tem que ser preto mesmo / É bem o jeito de preto."]

    },

    {

        palavra: "Kyra",

        tipo: "linguagem de rua / ofensa corporal",

        significado: "Expressão em Nhandewa utilizada na oralidade para apontar, zombar ou constranger alguém com base no peso.",

        funcao: "Atacar ou ridicularizar a pessoa publicamente, unindo o verbo de deslocamento à ofensa física de forma direta.",

        uso_indevido: "Tratar a frase como uma simples descrição de movimento, ignorando a carga de provocação e o apelido pejorativo.",

        falante: "Anônimo",

        exemplos: ["Oata oudju kyra."],

        traducao: ["Lá vem o gordo / Ele vem caminhando aí, o gordo."]

    },

    {

        palavra: "Piru ",

        tipo: "linguagem de rua / ofensa corporal",

        significado: "Variação na ordem dos termos em Nhandewa utilizada na oralidade de campo para reforçar o ataque físico.",

        funcao: "Desferir um xingamento irônico e depreciativo, reorganizando os elementos da frase para intensificar o impacto da provocação no momento do conflito.",

        uso_indevido: "Desconsiderar o teor de hostilidade e o bullying por trás da zombaria com o corpo, tratando a estrutura como mera troca de palavras inofensiva.",

        falante: "Anônimo",

        exemplos: ["Txakeke ndepiru reo õtsé owewé."],

        traducao: ["Cuidado, seu seco / magrelo, você vai sair voando!"]

    },

    {

        palavra: "Djuruné",

        tipo: "linguagem de rua / ofensa corporal e higiene",

        significado: "Expressão em Nhandewa usada na oralidade de campo para afastar alguém e zombar de uma característica física ou condição de higiene pessoal, como o odor bucal.",

        funcao: "Rejeitar, ofender e ridicularizar publicamente a pessoa, unindo uma ordem de afastamento a um xingamento direto.",

        uso_indevido: "Tratar a frase como um convite amigável ou instrução neutra, ignorando a intenção de constrangimento e bullying.",

        falante: "Anônimo",

        exemplos: ["Õtsé ko'apy, ereko djurune."],

        traducao: ["Sai daqui, você tem bafo / boca fedida!"]

    },

    {

        palavra: "Neakã gwasu",

        tipo: "linguagem de rua / apelido e provocação leve",

        significado: "Expressão em Nhandewa formada por ne- (seu), akã (cabeça) e gwasu (grande), usada para se referir a alguém com a cabeça grande de forma zombeteira, mas sem a mesma carga agressiva de ofensas físicas mais pesadas.",

        funcao: "Apontar uma característica física de maneira brincalhona ou em tom de pilhéria leve entre conhecidos.",

        uso_indevido: "Tratar a expressão como um termo estritamente anatômico formal, ignorando seu uso vivo como apelido ou chacota leve do cotidiano.",

        falante: "Anônimo",

        exemplos: ["Neakã gwasu."],

        traducao: ["Cabeção / Você tem a cabeça grande."]

    },

    {

        palavra: "Hatĩ",

        tipo: "morfologia / radical de campo",

        significado: "Elemento Nhandewa associado a ponta ou chifre, utilizado em contextos pejorativos na oralidade para acusações ou ofensas de infidelidade.",

        funcao: "Compor termos de xingamento e provocações de cunho sexual ou conjugal no cotidiano.",

        uso_indevido: "Isolar o radical da estrutura da frase ou tratá-lo como um conceito formal desvinculado do uso pejorativo de campo.",

        falante: "Anônimo",

        exemplos: ["Nembireko emoĩ ohatĩ ndewe!."],

        traducao: ["Chifre / ponta (presente na frase: Sua mulher colocou chifre em você)."]

    },
    {
        palavra: "Mbii",
        tipo: "linguagem de rua / ofensa corporal e sexual",
        significado: "Elemento Nhandewa associado a pequeno, utilizado em contextos pejorativos na oralidade , para zombar e ridicularizar alguém com base no tamanho pequeno de suas partes íntimas.",
        funcao: "Ferir a masculinidade, desqualificar ou ridicularizar publicamente a pessoa na dinâmica de provocações e zoeiras pesadas.",
        uso_indevido: "Tratar a expressão como uma mera descrição física neutra, ignorando a intenção direta de constrangimento e bullying.",
        falante: "Anônimo",
        exemplos: ["Nembii nemba'e."],
        traducao: ["A sua coisa pequena."]
    }
    


];
