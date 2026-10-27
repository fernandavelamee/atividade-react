# Forma · Atividade React.js

Aplicação web responsiva de uma loja fictícia, desenvolvida com **React, Vite e CSS** para uma atividade de Engenharia de Software da UCSAL. O projeto implementa seis componentes visuais e utiliza a **Context API** para compartilhar o estado das notificações.

## Executar o projeto

É necessário ter **Node.js 22.12 ou superior** e **npm** instalados. A configuração do GitHub Codespaces utiliza Node.js 24.

No terminal, dentro da pasta que contém o arquivo `package.json`, execute:

```bash
npm ci
npm run dev
```

Na sua máquina, abra o endereço informado pelo Vite.

No GitHub Codespaces, abra o endereço da porta **5173** na aba **Ports**. A instalação das dependências também é executada automaticamente na criação do ambiente configurado em `.devcontainer`.

### Versão de produção

```bash
npm run build
npm run preview
```

O comando `build` gera os arquivos de produção na pasta `dist`. O comando `preview` permite testar essa versão na porta **4173**.

No Codespaces, encaminhe a porta 4173 pela aba **Ports** caso utilize o preview.

As pastas `node_modules` e `dist` estão no `.gitignore` e não precisam ser enviadas ao repositório.

## Funcionalidades

- Catálogo com 18 produtos fictícios e paginação de seis itens por página.
- Busca por nome, com ou sem acentos, sem diferenciar maiúsculas de minúsculas.
- Filtro por categoria e ordenação por curadoria, preço ou nome.
- Detalhes de cada produto organizados em abas.
- Seleção de produtos com quantidades, total, remoção de itens e limpeza.
- Barra de progresso para frete grátis, com meta ilustrativa de **R$ 200,00**.
- Perguntas frequentes em acordeão.
- Notificações temporárias de sucesso, erro e informação.

Ao alterar a busca, a categoria ou a ordenação, o catálogo retorna à primeira página. Quando não há resultados, a interface apresenta uma mensagem e permite limpar os filtros.

## Componentes obrigatórios

| Componente | Aplicação | Funcionamento |
| --- | --- | --- |
| `Accordion` | Perguntas frequentes | Recebe os itens por props e permite manter, no máximo, uma pergunta aberta por vez. |
| `Pagination` | Navegação pelo catálogo | Recebe a página atual, o total de páginas e um callback. Destaca a página ativa e desabilita os botões nos limites. |
| `ProgressBar` | Progresso para frete grátis | Recebe `value` e `label`, limita o percentual entre 0 e 100 e ajusta o preenchimento da barra. |
| `Tabs` | Detalhes do produto | Recebe os títulos e conteúdos por props e controla internamente a aba selecionada. |
| `Dropdown` | Categoria e ordenação | Controla a abertura da lista e fecha ao selecionar uma opção, clicar fora, mover o foco para fora ou pressionar Escape. |
| `Toast` | Feedback das ações | Exibe mensagens temporárias com fechamento automático ou manual. |

## Barra de frete grátis

O `App` calcula o total dos produtos selecionados e o passa por props para `ShippingProgress`, exibido na página e no modal **Minha seleção**.

O cálculo em `src/utils/shipping.js` utiliza centavos para evitar diferenças de arredondamento. O percentual é arredondado para baixo e limitado a 100%, de modo que a barra só fica completa quando o total atinge **R$ 200,00**.

Adicionar produtos aumenta o progresso; remover itens ou limpar a seleção recalcula o valor. O benefício é apenas ilustrativo, pois a aplicação não realiza compras ou entregas.

## Desafio extra: Context API

O `ToastProvider`, definido em `src/context/ToastContext.jsx`, armazena a lista de notificações com `useState` e disponibiliza a função `showToast` pelo contexto.

Os componentes `App`, `ProductCard` e `SelectionDialog` acessam essa função com o hook `useToast()`. Assim, os cartões do catálogo e o modal da seleção publicam notificações no mesmo local, sem repassar a função por vários níveis de props.

Cada notificação desaparece após cinco segundos ou pode ser fechada pelo usuário. O temporizador é suspenso enquanto o mouse ou o foco permanece dentro da mensagem e reinicia ao sair. Os efeitos fazem a limpeza dos temporizadores com `useEffect`.

## Organização do projeto

| Caminho | Responsabilidade |
| --- | --- |
| `src/main.jsx` | Inicializa a aplicação com `StrictMode` e `ToastProvider`. |
| `src/App.jsx` | Organiza a página e controla filtros, paginação, produto ativo e seleção. |
| `src/components/` | Contém os seis componentes obrigatórios e os componentes auxiliares. |
| `src/context/ToastContext.jsx` | Compartilha o estado e as ações das notificações. |
| `src/data/content.js` | Define produtos, categorias, opções de ordenação e perguntas frequentes. |
| `src/utils/shipping.js` | Define a meta de frete grátis e calcula o progresso. |
| `src/index.css` | Define cores, estilos globais e utilitários. |
| `src/App.css` | Define o layout da página e as adaptações para diferentes telas. |
| `.devcontainer/devcontainer.json` | Configura o ambiente do GitHub Codespaces. |

Os componentes obrigatórios possuem seus próprios arquivos de estilo com CSS Modules. As ilustrações e os ícones utilizam SVG local.

## Responsividade e acessibilidade

O layout utiliza Grid, Flexbox e media queries para adaptar o catálogo, os filtros e as seções a celulares, tablets e computadores.

A interface inclui:

- HTML semântico.
- Rótulos nos controles.
- Indicadores visuais de foco.
- Link para pular ao conteúdo.
- Atributos ARIA para comunicar estados.
- Navegação por teclado nos menus e nas abas.
- Regiões de status e alerta nas notificações.
- Animações que respeitam `prefers-reduced-motion`.

O modal utiliza `<dialog>` e `showModal()` para conter o foco, permitir o fechamento por Escape e devolver o foco ao acionador.

## Limites da demonstração

Os produtos, preços e especificações são fictícios. Não há backend, autenticação, pagamentos ou persistência de dados.

A seleção e os filtros são reiniciados ao atualizar a página.