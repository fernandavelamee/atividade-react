import ProductArt from "./ProductArt.jsx";
import Icon from "./Icon.jsx";
import { currency } from "../data/content.js";
import { useToast } from "../context/ToastContext.jsx";

export default function ProductCard({ product, onSelect, onAdd }) {
  const { showToast } = useToast();

  const handleAdd = () => {
    onAdd(product);
    showToast("success", `${product.name} adicionado à sua seleção.`);
  };

  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__art"
        style={{ backgroundColor: product.background }}
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${product.name}`}
      >
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
        <ProductArt kind={product.kind} color={product.color} />
        <span className="product-card__peek">
          Ver detalhes <Icon name="arrow" size={16} />
        </span>
      </button>
      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3>
          <button type="button" onClick={() => onSelect(product)}>
            {product.name}
          </button>
        </h3>
        <div className="product-card__bottom">
          <p>{currency(product.price)}</p>
          <button
            type="button"
            className="product-card__add"
            aria-label={`Adicionar ${product.name} à seleção`}
            onClick={handleAdd}
          >
            <Icon name="plus" size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}
