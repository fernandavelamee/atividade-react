// Dados fictícios e locais: a aplicação funciona sem API, login ou banco de dados.
export const CATEGORIES = [
  "Todas",
  "Eletrônicos",
  "Casa",
  "Livros",
  "Esportes",
];

export const SORT_OPTIONS = [
  { value: "curadoria", label: "Nossa curadoria" },
  { value: "menor-preco", label: "Menor preço" },
  { value: "maior-preco", label: "Maior preço" },
  { value: "nome", label: "Nome (A–Z)" },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Fone sem fio Aura",
    category: "Eletrônicos",
    price: 289.9,
    kind: "headphones",
    background: "#e0e8da",
    color: "#40614d",
    badge: "Mais amado",
    description:
      "Uma pausa no ruído, um encontro com a sua música. O Aura combina formas leves e almofadas macias para acompanhar o seu ritmo.",
    specs: [
      "Conexão Bluetooth",
      "Autonomia ilustrativa de 24 horas",
      "Almofadas acolchoadas",
      "Peso: 220 g",
    ],
  },
  {
    id: 2,
    name: "Luminária Arco",
    category: "Casa",
    price: 159.9,
    kind: "lamp",
    background: "#f1ded3",
    color: "#af6245",
    badge: "Novo",
    description:
      "Um ponto de luz para dar novas ideias ao seu espaço. A Arco traz uma base estável, linhas curvas e uma presença acolhedora.",
    specs: [
      "Luz LED de tonalidade quente",
      "Altura: 32 cm",
      "Base de metal",
      "Alimentação USB",
    ],
  },
  {
    id: 3,
    name: "Livro Novas Ideias",
    category: "Livros",
    price: 59.9,
    kind: "book",
    background: "#e6e0ed",
    color: "#76638e",
    badge: "",
    description:
      "Um convite para olhar de novo para o cotidiano. Uma leitura fictícia sobre criatividade, pequenos projetos e novas possibilidades.",
    specs: [
      "Edição ilustrada",
      "Capa dura",
      "192 páginas",
      "Idioma: português",
    ],
  },
  {
    id: 4,
    name: "Caixa de som Onda",
    category: "Eletrônicos",
    price: 199.9,
    kind: "speaker",
    background: "#e8e5dd",
    color: "#6e7662",
    badge: "",
    description:
      "A trilha sonora dos seus bons momentos. Compacta e portátil, a Onda encontra lugar na mesa, na estante e na sua rotina.",
    specs: [
      "Conexão Bluetooth",
      "Autonomia ilustrativa de 8 horas",
      "Acabamento texturizado",
      "Dimensões: 16 × 9 × 9 cm",
    ],
  },
  {
    id: 5,
    name: "Garrafa Fluxo",
    category: "Esportes",
    price: 89.9,
    kind: "bottle",
    background: "#dfe9ed",
    color: "#5b7f91",
    badge: "Essencial",
    description:
      "Leve uma boa pausa com você. A Fluxo é uma garrafa reutilizável pensada para a mesa de trabalho e os caminhos do dia.",
    specs: [
      "Capacidade: 600 ml",
      "Aço inoxidável",
      "Tampa rosqueável",
      "Livre de BPA",
    ],
  },
  {
    id: 6,
    name: "Caderno Pauta Livre",
    category: "Livros",
    price: 39.9,
    kind: "notebook",
    background: "#eee8d7",
    color: "#b09451",
    badge: "",
    description:
      "Um lugar para o que ainda não ganhou forma. Anotações, esboços e ideias encontram espaço nas páginas do Pauta Livre.",
    specs: [
      "Formato A5",
      "80 folhas sem pauta",
      "Papel de 90 g/m²",
      "Elástico de fechamento",
    ],
  },
  {
    id: 7,
    name: "Fone Aura Areia",
    category: "Eletrônicos",
    price: 279.9,
    kind: "headphones",
    background: "#eee5d5",
    color: "#a48d63",
    badge: "Novo",
    description:
      "O conforto do Aura em um tom neutro e acolhedor. Para descobrir novos sons, estudar ou desacelerar.",
    specs: [
      "Conexão Bluetooth",
      "Autonomia ilustrativa de 24 horas",
      "Almofadas removíveis",
      "Peso: 220 g",
    ],
  },
  {
    id: 8,
    name: "Luminária Arco Sálvia",
    category: "Casa",
    price: 169.9,
    kind: "lamp",
    background: "#e2e9df",
    color: "#63806b",
    badge: "",
    description:
      "Luz suave e um toque de verde no seu canto favorito. A versão Sálvia combina com espaços de estudo e leitura.",
    specs: [
      "Luz LED quente",
      "Altura: 32 cm",
      "Base de metal",
      "Alimentação USB",
    ],
  },
  {
    id: 9,
    name: "Livro Design do Dia",
    category: "Livros",
    price: 69.9,
    kind: "book",
    background: "#f0dcd5",
    color: "#bc6854",
    badge: "",
    description:
      "Um título fictício sobre os objetos que nos cercam e as escolhas que simplificam a vida.",
    specs: [
      "Capa dura",
      "224 páginas",
      "Edição ilustrada",
      "Idioma: português",
    ],
  },
  {
    id: 10,
    name: "Caixa de som Onda Azul",
    category: "Eletrônicos",
    price: 209.9,
    kind: "speaker",
    background: "#e0e6ee",
    color: "#627c9a",
    badge: "",
    description:
      "Mais cor para a sua trilha sonora. A Onda Azul mantém o formato compacto com uma nova personalidade.",
    specs: [
      "Conexão Bluetooth",
      "Autonomia ilustrativa de 8 horas",
      "Alça de transporte",
      "Dimensões: 16 × 9 × 9 cm",
    ],
  },
  {
    id: 11,
    name: "Garrafa Fluxo Terracota",
    category: "Esportes",
    price: 94.9,
    kind: "bottle",
    background: "#efdfd6",
    color: "#b16d52",
    badge: "Mais amado",
    description:
      "Uma cor que aquece a rotina, uma garrafa para acompanhar seus movimentos.",
    specs: [
      "Capacidade: 600 ml",
      "Aço inoxidável",
      "Tampa rosqueável",
      "Livre de BPA",
    ],
  },
  {
    id: 12,
    name: "Caderno Horizonte",
    category: "Livros",
    price: 44.9,
    kind: "notebook",
    background: "#e2e3ed",
    color: "#6a719b",
    badge: "",
    description:
      "Abra espaço para planejar com calma. Um caderno para seus próximos projetos e descobertas.",
    specs: [
      "Formato A5",
      "96 folhas pautadas",
      "Capa flexível",
      "Elástico de fechamento",
    ],
  },
  {
    id: 13,
    name: "Fone Aura Noite",
    category: "Eletrônicos",
    price: 299.9,
    kind: "headphones",
    background: "#e4e5e5",
    color: "#444a4a",
    badge: "",
    description:
      "Uma versão sóbria do Aura, com linhas simples e conforto para ouvir por mais tempo.",
    specs: [
      "Conexão Bluetooth",
      "Autonomia ilustrativa de 24 horas",
      "Almofadas acolchoadas",
      "Peso: 220 g",
    ],
  },
  {
    id: 14,
    name: "Luminária Arco Creme",
    category: "Casa",
    price: 159.9,
    kind: "lamp",
    background: "#eee8da",
    color: "#ad956a",
    badge: "",
    description:
      "Um detalhe discreto que transforma a atmosfera. Ideal para o seu espaço de leitura.",
    specs: [
      "Luz LED quente",
      "Altura: 32 cm",
      "Base de metal",
      "Alimentação USB",
    ],
  },
  {
    id: 15,
    name: "Livro Menos e Melhor",
    category: "Livros",
    price: 54.9,
    kind: "book",
    background: "#dde6db",
    color: "#557259",
    badge: "Novo",
    description:
      "Uma obra fictícia sobre consumo consciente, organização e escolhas com propósito.",
    specs: [
      "Capa dura",
      "160 páginas",
      "Edição ilustrada",
      "Idioma: português",
    ],
  },
  {
    id: 16,
    name: "Caixa de som Onda Rosa",
    category: "Eletrônicos",
    price: 199.9,
    kind: "speaker",
    background: "#ebdfe3",
    color: "#a16b80",
    badge: "",
    description:
      "Som para os momentos leves. Uma versão com cor suave para acompanhar a sua rotina.",
    specs: [
      "Conexão Bluetooth",
      "Autonomia ilustrativa de 8 horas",
      "Acabamento texturizado",
      "Dimensões: 16 × 9 × 9 cm",
    ],
  },
  {
    id: 17,
    name: "Garrafa Fluxo Oliva",
    category: "Esportes",
    price: 89.9,
    kind: "bottle",
    background: "#e2e6d4",
    color: "#78864c",
    badge: "",
    description:
      "Hidratação com um toque natural. A Fluxo Oliva foi pensada para acompanhar os seus caminhos.",
    specs: [
      "Capacidade: 600 ml",
      "Aço inoxidável",
      "Tampa rosqueável",
      "Livre de BPA",
    ],
  },
  {
    id: 18,
    name: "Caderno Primeiro Passo",
    category: "Livros",
    price: 34.9,
    kind: "notebook",
    background: "#f0dfcd",
    color: "#b77c44",
    badge: "",
    description:
      "Toda ideia começa em algum lugar. Registre os primeiros passos do que você quer construir.",
    specs: [
      "Formato A5",
      "80 folhas pontilhadas",
      "Capa rígida",
      "Elástico de fechamento",
    ],
  },
];

export const FAQ_ITEMS = [
  {
    title: "Posso comprar os produtos desta página?",
    content:
      "Esta é uma loja fictícia criada para uma atividade de React.js. Você pode explorar, filtrar e montar uma seleção, mas não há pagamento, compra ou envio de produtos.",
  },
  {
    title: "Como encontro o que estou procurando?",
    content:
      "Use a busca pelo nome, escolha uma categoria e altere a ordenação. A paginação exibe seis produtos por vez. Ao mudar a busca ou a categoria, a listagem volta para a primeira página.",
  },
  {
    title: "Onde fica a minha seleção?",
    content:
      "Toque no botão de adicionar de um produto e abra “Minha seleção” no cabeçalho. Você pode conferir quantidades e valores, remover itens ou limpar a seleção. Os dados ficam apenas na memória e são reiniciados ao atualizar a página.",
  },
  {
    title: "Como funciona a barra de frete grátis?",
    content:
      "A barra acompanha o total dos produtos na sua seleção. A partir de R$ 200,00, ela chega a 100% e libera o benefício ilustrativo de frete grátis. Ao remover produtos ou limpar a seleção, o progresso é recalculado. Como esta é uma loja fictícia, não há compras ou entregas reais.",
  },
  {
    title: "Como navego usando o teclado?",
    content:
      "Use Tab para percorrer os controles, Enter ou Espaço para ativá-los e Escape para fechar a seleção ou um menu. Nos menus, use as setas para cima e para baixo. Nas abas, use as setas para a esquerda e para a direita, Home e End.",
  },
];

export const currency = (value) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    value,
  );
