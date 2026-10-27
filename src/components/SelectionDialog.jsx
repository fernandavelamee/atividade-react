import { useEffect, useRef } from "react";
import Icon from "./Icon.jsx";
import ProductArt from "./ProductArt.jsx";
import { currency } from "../data/content.js";
import ShippingProgress from "./ShippingProgress.jsx";
import { useToast } from "../context/ToastContext.jsx";

export default function SelectionDialog({
  isOpen,
  onClose,
  items,
  total,
  onRemove,
  onClear,
}) {
  const dialogRef = useRef(null);
  const { showToast } = useToast();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
    if (!isOpen) return undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="selection-dialog"
      aria-labelledby="selection-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="selection-dialog__inner">
        <div className="selection-dialog__header">
          <div>
            <span className="eyebrow">SUA CURADORIA</span>
            <h2 id="selection-title">Minha seleção</h2>
          </div>
          <button
            type="button"
            className="icon-button"
            aria-label="Fechar seleção"
            onClick={onClose}
          >
            <Icon name="close" />
          </button>
        </div>
        {items.length ? (
          <>
            <ul className="selection-list">
              {items.map((item) => (
                <li key={item.id}>
                  <div
                    className="selection-art"
                    style={{ backgroundColor: item.background }}
                  >
                    <ProductArt kind={item.kind} color={item.color} />
                  </div>
                  <div className="selection-item-info">
                    <h3>{item.name}</h3>
                    <p>
                      {item.quantity} × {currency(item.price)}
                    </p>
                    <button
                      type="button"
                      className="text-button"
                      onClick={() => {
                        onRemove(item.id);
                        showToast(
                          "info",
                          `${item.name} removido da sua seleção.`,
                        );
                      }}
                      aria-label={`Remover ${item.name} da seleção`}
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="selection-total">
              <span>Total ilustrativo</span>
              <strong>{currency(total)}</strong>
            </div>
            <ShippingProgress total={total} compact />
            <button
              type="button"
              className="button button--green"
              onClick={() => {
                onClear();
                showToast("info", "Sua seleção foi limpa.");
              }}
            >
              Limpar seleção
            </button>
          </>
        ) : (
          <div className="empty-selection">
            <Icon name="bag" size={44} />
            <h3>Sua próxima descoberta está lá fora.</h3>
            <p>Adicione os seus favoritos para encontrá-los aqui.</p>
            <button
              type="button"
              className="button button--green"
              onClick={onClose}
            >
              Explorar coleção
              <Icon name="arrow" size={18} />
            </button>
          </div>
        )}
        <p className="selection-note">
          Loja fictícia. Não há compras ou cobranças.
        </p>
      </div>
    </dialog>
  );
}
