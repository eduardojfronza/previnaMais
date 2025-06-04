export const disasters = [
  {
    id: 1,
    type: "Inundação",
    description: "Aprenda como se manter seguro durante enchentes",
    questions: [
      {
        question: "O que você deve fazer durante um alerta de inundação?",
        options: [
          "Ficar em casa e esperar passar",
          "Ir imediatamente para um local mais alto",
          "Dirigir por estradas alagadas para escapar",
          "Ir para o porão para se proteger",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Ir para um local mais alto é a opção mais segura durante uma inundação. Nunca dirija por áreas alagadas ou permaneça em locais baixos.",
      },
      {
        question: "Quanta água em movimento pode te derrubar ao andar?",
        options: ["15 cm", "30 cm", "45 cm", "60 cm"],
        correctAnswerIndex: 0,
        explanation:
          "Apenas 15 cm de água em movimento podem te derrubar. A força da água é muito maior do que parece.",
      },
      {
        question: "O que você deve fazer se seu carro for pego em uma enchente?",
        options: [
          "Continuar dirigindo para passar rápido",
          "Dar meia-volta e buscar outra rota",
          "Ficar no carro e ligar para ajuda",
          "Sair do carro e empurrá-lo",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Dê meia-volta, não se afogue! Sempre é mais seguro encontrar outra rota do que arriscar atravessar a enchente.",
      },
      {
        question: "Qual desses sinais pode indicar risco de inundação?",
        options: [
          "Céu limpo e seco",
          "Água subindo nas ruas ou rios transbordando",
          "Pouca chuva durante dias",
          "Grama mais verde que o normal",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Rios transbordando e água nas ruas são sinais claros de risco de inundação. Fique atento e busque abrigo.",
      },
    ],
  },
  {
    id: 2,
    type: "Terremoto",
    description: "Dicas essenciais de segurança e preparação para terremotos",
    questions: [
      {
        question: "O que você deve fazer imediatamente ao sentir um terremoto?",
        options: [
          "Correr para fora o mais rápido possível",
          "Ficar parado em uma porta",
          "Abaixar, Cobrir e Segurar",
          "Se esconder debaixo de uma mesa e ficar lá",
        ],
        correctAnswerIndex: 2,
        explanation:
          "Abaixe-se, cubra-se sob uma mesa resistente e segure firme até o tremor parar. Isso reduz o risco de ferimentos com objetos que caem.",
      },
      {
        question: "Qual o lugar mais seguro durante um terremoto se você estiver dentro de casa?",
        options: [
          "Debaixo de uma mesa resistente",
          "Em uma porta",
          "Contra uma parede interna",
          "Perto de uma janela",
        ],
        correctAnswerIndex: 0,
        explanation:
          "Estar debaixo de uma mesa resistente protege contra objetos que caem. Evite portas e janelas.",
      },
      {
        question: "O que você deve fazer depois que o terremoto parar?",
        options: [
          "Voltar imediatamente à rotina normal",
          "Verificar ferimentos e riscos, e evacuar se necessário",
          "Correr para fora imediatamente",
          "Ligar todos os eletrodomésticos para testar",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Após o tremor, verifique se há feridos, vazamentos de gás ou danos estruturais antes de tomar qualquer decisão.",
      },
      {
        question: "Qual item NÃO é essencial no kit de emergência para terremotos?",
        options: [
          "Lanterna",
          "Rádio portátil",
          "Alimentos não perecíveis",
          "Televisão de tela plana",
        ],
        correctAnswerIndex: 3,
        explanation:
          "Uma televisão não é necessária em emergências. Foque em itens úteis como lanternas, comida, água e rádios para comunicação.",
      },
    ],
  },
  {
    id: 3,
    type: "Furacão",
    description: "Medidas de preparação e segurança contra furacões",
    questions: [
      {
        question: "Quando você deve evacuar por causa de um furacão?",
        options: [
          "Apenas quando o furacão atingir a terra",
          "Quando autoridades locais emitirem ordens de evacuação",
          "Quando você perceber os primeiros ventos",
          "Nunca, é mais seguro ficar em casa",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Sempre siga as ordens de evacuação das autoridades. Elas têm as melhores informações sobre a tempestade.",
      },
      {
        question: "Quais suprimentos você deve ter para enfrentar um furacão?",
        options: [
          "Apenas comida e água",
          "Somente lanterna e pilhas",
          "Água, comida, medicamentos, lanterna, rádio e pilhas para pelo menos 3 dias",
          "Nada especial, as lojas continuarão abertas",
        ],
        correctAnswerIndex: 2,
        explanation:
          "Você deve ter suprimentos para pelo menos 3 dias, incluindo água (4L por pessoa por dia), alimentos, medicamentos e equipamentos de emergência.",
      },
      {
        question: "O que fazer com janelas durante um furacão?",
        options: [
          "Abrir todas para equalizar a pressão",
          "Deixar como estão",
          "Cobri-las com madeira compensada ou venezianas",
          "Quebrá-las para permitir a ventilação",
        ],
        correctAnswerIndex: 2,
        explanation:
          "Cobrir as janelas ajuda a evitar que objetos voadores entrem durante o furacão, protegendo os ocupantes da casa.",
      },
    ],
  },
  {
    id: 4,
    type: "Incêndio Florestal",
    description: "Procedimentos de segurança e evacuação durante incêndios florestais",
    questions: [
      {
        question: "O que fazer se um incêndio florestal estiver se aproximando?",
        options: [
          "Ficar e tentar defender sua propriedade",
          "Seguir imediatamente as ordens de evacuação",
          "Esperar para ver se chega perto",
          "Molhar o telhado da casa com mangueira",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Evacue imediatamente quando as autoridades solicitarem. Incêndios se movem rapidamente e mudam de direção com o vento.",
      },
      {
        question: "Como preparar sua casa para a temporada de incêndios?",
        options: [
          "Plantar mais árvores ao redor",
          "Criar espaço defensável limpando a vegetação",
          "Instalar mais luzes externas",
          "Construir cercas mais altas",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Espaço defensável é uma zona sem vegetação seca ao redor da casa. Isso reduz o risco de propagação do fogo.",
      },
      {
        question: "Quais roupas são mais adequadas durante um incêndio florestal?",
        options: [
          "Shorts e camiseta",
          "Roupas leves e de tecido sintético",
          "Roupas de algodão, mangas compridas e calças",
          "Roupas de banho para aguentar o calor",
        ],
        correctAnswerIndex: 2,
        explanation:
          "Roupas de algodão de mangas compridas e calças protegem melhor contra calor e brasas. Evite tecidos sintéticos.",
      },
    ],
  },
]

export const mockUsers = [
  { name: "Maria Santos", age: 25, totalScore: 80 },
  { name: "João Silva", age: 30, totalScore: 100 },
  { name: "Ana Oliveira", age: 22, totalScore: 90 },
  { name: "Carlos Souza", age: 28, totalScore: 70 },
  { name: "Juliana Lima", age: 35, totalScore: 95 },
  { name: "Pedro Chen", age: 26, totalScore: 85 },
  { name: "Larissa Andrade", age: 29, totalScore: 75 },
]
