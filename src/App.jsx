import { useMemo, useRef, useState } from "react";
import Accordion from "./components/Accordion/Accordion.jsx";
import Dropdown from "./components/Dropdown/Dropdown.jsx";
import Pagination from "./components/Pagination/Pagination.jsx";
import Tabs from "./components/Tabs/Tabs.jsx";
import ProductArt from "./components/ProductArt.jsx";
import ProductCard from "./components/ProductCard.jsx";
import SelectionDialog from "./components/SelectionDialog.jsx";
import ShippingProgress from "./components/ShippingProgress.jsx";
import Icon from "./components/Icon.jsx";
import { useToast } from "./context/ToastContext.jsx";
import {
  CATEGORIES,
  FAQ_ITEMS,
  PRODUCTS,
  SORT_OPTIONS,
  currency,
} from "./data/content.js";

const PAGE_SIZE = 6;

// Orquestra os componentes e mantém o estado usado por mais de uma seção.
export default function App() {
  const [category, setCategory] = useState("Todas");
  const [sortBy, setSortBy] = useState("curadoria");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selection, setSelection] = useState([]);
  const [selectionOpen, setSelectionOpen] = useState(false);
  const detailsTitleRef = useRef(null);
  const { showToast } = useToast();

  const filteredProducts = useMemo(() => {
    // A normalização também permite buscar "luminaria" sem acento.
    const normalize = (text) =>
      text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("pt-BR");
    const search = normalize(query.trim());
    const list = PRODUCTS.filter(
      (product) =>
        (category === "Todas" || product.category === category) &&
        normalize(product.name).includes(search),
    );
    if (sortBy === "menor-preco") return list.sort((a, b) => a.price - b.price);
    if (sortBy === "maior-preco") return list.sort((a, b) => b.price - a.price);
    if (sortBy === "nome")
      return list.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    return list;
  }, [category, query, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );
  const selectionCount = selection.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  const selectionTotal =
    selection.reduce(
      (sum, item) => sum + Math.round(item.price * 100) * item.quantity,
      0,
    ) / 100;
  const firstItem = filteredProducts.length
    ? (currentPage - 1) * PAGE_SIZE + 1
    : 0;
  const lastItem = Math.min(currentPage * PAGE_SIZE, filteredProducts.length);

  const addToSelection = (product) => {
    setSelection((current) =>
      current.some((item) => item.id === product.id)
        ? current.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...current, { ...product, quantity: 1 }],
    );
  };

  const selectProduct = (product) => {
    setSelectedProduct(product);
    // Título estável: o foco acompanha a mudança para usuários de teclado.
    detailsTitleRef.current?.focus({ preventScroll: true });
    document.getElementById("detalhes")?.scrollIntoView({
      block: "start",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const resetFilters = () => {
    setCategory("Todas");
    setQuery("");
    setSortBy("curadoria");
    setCurrentPage(1);
    showToast("info", "Filtros limpos. Explore toda a coleção.");
  };

  const detailTabs = [
    {
      label: "Sobre o produto",
      content: (
        <>
          <p>{selectedProduct.description}</p>
          <p>
            Um essencial da coleção Forma, pensado para combinar com o seu dia.
          </p>
        </>
      ),
    },
    {
      label: "Especificações",
      content: (
        <ul>
          {selectedProduct.specs.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
      ),
    },
    {
      label: "Entrega e cuidados",
      content: (
        <>
          <p>
            <strong>Informações demonstrativas:</strong> em uma loja real, este
            painel apresentaria o prazo de entrega, as condições de troca e a
            garantia.
          </p>
          <p>
            Todos os produtos, preços e características desta atividade são
            fictícios. Não há entregas ou transações.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="announcement">
        Objetos com propósito. Uma experiência demonstrativa.
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="Forma, início">
            forma<span>✳</span>
          </a>
          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#colecao">Coleção</a>
            <a href="#frete-gratis">Frete grátis</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <button
            type="button"
            className="selection-trigger"
            onClick={() => setSelectionOpen(true)}
            aria-label={`Minha seleção, ${selectionCount} ${selectionCount === 1 ? "item" : "itens"}`}
          >
            <Icon name="bag" size={20} />
            <span>Minha seleção</span>
            <span className="selection-count">{selectionCount}</span>
          </button>
        </div>
      </header>

      <main id="conteudo">
        <section
          id="inicio"
          className="container hero"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="tiny-dot" />
              ESSENCIAIS, DO SEU JEITO
            </span>
            <h1 id="hero-title">
              Pequenos detalhes.
              <br />
              Novas <em>possibilidades.</em>
            </h1>
            <p>
              Uma curadoria de objetos que simplificam a rotina e dão
              personalidade ao seu dia.
            </p>
            <a href="#colecao" className="button button--green">
              Explore a coleção
              <Icon name="arrow" size={18} />
            </a>
            <div className="hero-footnote">
              <span className="overlap-circles">
                <i />
                <i />
                <i />
              </span>
              <span>
                Menos excesso.
                <br />
                <strong>Mais do que faz sentido.</strong>
              </span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-circle" />
            <span className="hero-stamp">
              ESCOLHAS
              <br />
              <strong>com propósito</strong>
              <Icon name="sparkle" size={28} />
            </span>
            <ProductArt className="hero-headphones" color="#496452" />
            <div className="hero-mini">
              <ProductArt kind="notebook" color="#b28452" />
              <span>
                Espaço para
                <br />
                <strong>novas ideias.</strong>
              </span>
            </div>
            <span className="hero-art-label">
              o seu dia merece
              <br />
              uma nova forma.
            </span>
          </div>
        </section>

        <div className="benefits-strip">
          <div className="container benefits-inner">
            <span>
              <Icon name="leaf" />
              Design com intenção
            </span>
            <span>
              <Icon name="sparkle" />
              Escolhas para o cotidiano
            </span>
            <span>
              <Icon name="shield" />
              Explore com tranquilidade
            </span>
          </div>
        </div>

        <section
          id="colecao"
          className="container collection section-space"
          aria-labelledby="collection-title"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">MENOS EXCESSO. MAIS ESCOLHAS.</span>
              <h2 id="collection-title">
                Encontre a sua forma<span className="title-dot">.</span>
              </h2>
            </div>
            <span className="collection-tag">
              {PRODUCTS.length} pequenas descobertas
              <Icon name="sparkle" size={17} />
            </span>
          </div>
          <div className="catalog-toolbar">
            <label className="search-field">
              <Icon name="search" size={19} />
              <span className="sr-only">Buscar produtos</span>
              <input
                type="search"
                value={query}
                placeholder="O que combina com você?"
                onChange={(event) => {
                  setQuery(event.target.value);
                  setCurrentPage(1);
                }}
              />
            </label>
            <div className="catalog-filters">
              <Dropdown
                label="Categoria"
                selectedValue={category}
                options={CATEGORIES.map((value) => ({ value, label: value }))}
                onChange={(value) => {
                  setCategory(value);
                  setCurrentPage(1);
                  showToast("info", `Categoria selecionada: ${value}.`);
                }}
              />
              <Dropdown
                label="Ordenar por"
                options={SORT_OPTIONS}
                selectedValue={sortBy}
                onChange={(value) => {
                  setSortBy(value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          <div className="catalog-summary">
            <p role="status">
              {filteredProducts.length
                ? `Mostrando ${firstItem}–${lastItem} de ${filteredProducts.length} produtos`
                : "Nenhum produto encontrado"}
            </p>
            {(category !== "Todas" || query || sortBy !== "curadoria") && (
              <button
                type="button"
                className="text-button"
                onClick={resetFilters}
              >
                Limpar filtros
                <Icon name="close" size={14} />
              </button>
            )}
          </div>
          {visibleProducts.length ? (
            <ul className="product-grid">
              {visibleProducts.map((product) => (
                <li key={product.id}>
                  <ProductCard
                    product={product}
                    onSelect={selectProduct}
                    onAdd={addToSelection}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-catalog">
              <Icon name="search" size={36} />
              <h3>Essa descoberta ainda não está por aqui.</h3>
              <p>Tente outro nome ou explore uma nova categoria.</p>
              <button
                type="button"
                className="button button--green"
                onClick={resetFilters}
              >
                Ver toda a coleção
                <Icon name="arrow" size={18} />
              </button>
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={changePage}
          />
        </section>

        <div className="container">
          <ShippingProgress total={selectionTotal} />
        </div>

        <section
          id="detalhes"
          className="container product-detail"
          aria-labelledby="details-title"
        >
          <div
            className="detail-visual"
            style={{ backgroundColor: selectedProduct.background }}
          >
            <span className="eyebrow">UM OLHAR MAIS DE PERTO</span>
            <ProductArt
              kind={selectedProduct.kind}
              color={selectedProduct.color}
            />
            <span className="detail-visual__caption">
              Detalhes que fazem a diferença.
            </span>
          </div>
          <div className="detail-content">
            <span className="eyebrow">{selectedProduct.category}</span>
            <h2 id="details-title" tabIndex={-1} ref={detailsTitleRef}>
              {selectedProduct.name}
            </h2>
            <p className="detail-price">
              {currency(selectedProduct.price)}
              <span>Valor ilustrativo</span>
            </p>
            <Tabs
              key={selectedProduct.id}
              tabs={detailTabs}
              ariaLabel={`Informações de ${selectedProduct.name}`}
            />
            <button
              type="button"
              className="button button--green"
              onClick={() => {
                addToSelection(selectedProduct);
                showToast(
                  "success",
                  `${selectedProduct.name} adicionado à sua seleção.`,
                );
              }}
            >
              Adicionar à minha seleção
              <Icon name="plus" size={18} />
            </button>
          </div>
        </section>

        <section
          id="duvidas"
          className="container faq-section"
          aria-labelledby="faq-title"
        >
          <div className="faq-copy">
            <span className="eyebrow">ANTES DA SUA PRÓXIMA DESCOBERTA</span>
            <h2 id="faq-title">
              Bom saber<span className="title-dot">.</span>
            </h2>
            <p>Respostas simples para aproveitar cada parte da experiência.</p>
            <span className="faq-decoration" aria-hidden="true">
              ✳
            </span>
          </div>
          <Accordion items={FAQ_ITEMS} defaultOpen={0} />
        </section>

        <section
          className="container feedback-section"
          aria-labelledby="feedback-title"
        >
          <div>
            <span className="eyebrow">FEEDBACK QUE ACOMPANHA VOCÊ</span>
            <h2 id="feedback-title">Uma mensagem na hora certa.</h2>
            <p>Experimente os três tipos de notificação temporária.</p>
          </div>
          <div className="feedback-actions">
            <button
              type="button"
              onClick={() =>
                showToast(
                  "success",
                  "Sua coleção foi salva com sucesso! Esta é uma demonstração.",
                )
              }
            >
              <Icon name="check" size={17} />
              Sucesso
            </button>
            <button
              type="button"
              onClick={() =>
                showToast(
                  "error",
                  "Não foi possível salvar. Erro simulado para demonstrar o feedback.",
                )
              }
            >
              <Icon name="error" size={17} />
              Erro
            </button>
            <button
              type="button"
              onClick={() =>
                showToast(
                  "info",
                  "Você está explorando uma experiência demonstrativa em React.",
                )
              }
            >
              <Icon name="info" size={17} />
              Informação
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#inicio" className="brand" aria-label="Voltar ao início">
            forma<span>✳</span>
          </a>
          <p>Pequenas escolhas. Novas possibilidades.</p>
          <span>Projeto acadêmico · React.js · UCSAL</span>
        </div>
        <div className="container footer-bottom">
          <span>Conteúdo fictício. Sem transações reais.</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>

      <SelectionDialog
        isOpen={selectionOpen}
        onClose={() => setSelectionOpen(false)}
        items={selection}
        total={selectionTotal}
        onRemove={(id) => {
          setSelection((current) => current.filter((item) => item.id !== id));
        }}
        onClear={() => {
          setSelection([]);
        }}
      />
    </>
  );
}
