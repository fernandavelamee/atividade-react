import { useId, useState } from "react";
import Icon from "../Icon.jsx";
import styles from "./Accordion.module.css";

// Recebe os itens por props. Um único índice garante no máximo um painel aberto.
export default function Accordion({ items, defaultOpen = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div className={styles.item} key={item.title}>
            <h3 className={styles.heading}>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={styles.trigger}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.title}</span>
                <span
                  className={`${styles.symbol} ${isOpen ? styles.openSymbol : ""}`}
                >
                  <Icon name="plus" size={18} />
                </span>
              </button>
            </h3>
            {/* inert impede foco e leitura no painel fechado sem remover a animação. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              inert={!isOpen}
              className={`${styles.panel} ${isOpen ? styles.openPanel : ""}`}
            >
              <div className={styles.inner}>
                <div className={styles.content}>{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
