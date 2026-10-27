import { useId } from "react";
import ProgressBar from "./ProgressBar/ProgressBar.jsx";
import Icon from "./Icon.jsx";
import { currency } from "../data/content.js";
import { getShippingProgress } from "../utils/shipping.js";

// O total vem do App. Adicionar ou remover produtos recalcula a barra sem timers.
export default function ShippingProgress({ total, compact = false }) {
  const titleId = useId();
  const shipping = getShippingProgress(total);

  return (
    <section
      id={compact ? undefined : "frete-gratis"}
      className={compact ? "shipping-compact" : "shipping-section"}
      aria-labelledby={compact ? undefined : titleId}
      aria-label={compact ? "Frete grátis da seleção" : undefined}
    >
      {!compact && (
        <div className="shipping-copy">
          <span className="eyebrow">SUA PRÓXIMA VANTAGEM</span>
          <h2 id={titleId}>
            Suas escolhas rendem
            <br />
            <em>frete grátis.</em>
          </h2>
          <p>
            Monte sua seleção e acompanhe o benefício. A partir de{" "}
            {currency(shipping.goal)} em produtos, o frete é por nossa conta.
          </p>
          <a href="#colecao" className="text-button">
            Continuar escolhendo
            <Icon name="arrow" size={16} />
          </a>
          <span className="shipping-note">
            Benefício ilustrativo desta loja demonstrativa.
          </span>
        </div>
      )}
      <div
        className={`shipping-card ${shipping.eligible ? "shipping-card--complete" : ""}`}
      >
        <div className="shipping-summary">
          <span className="shipping-icon">
            <Icon name={shipping.eligible ? "check" : "truck"} size={24} />
          </span>
          <div>
            <span>Total da sua seleção</span>
            <strong>{currency(shipping.total)}</strong>
          </div>
          <span className="shipping-goal">
            Meta de
            <br />
            <strong>{currency(shipping.goal)}</strong>
          </span>
        </div>
        <ProgressBar
          value={shipping.percentage}
          label="Progresso para frete grátis"
        />
        <div className="shipping-message" role="status" aria-atomic="true">
          {shipping.eligible ? (
            <>
              <strong>Frete grátis liberado!</strong>
              <p>Sua seleção atingiu a meta de {currency(shipping.goal)}.</p>
            </>
          ) : (
            <>
              <strong>
                Faltam {currency(shipping.remaining)} para liberar frete grátis.
              </strong>
              <p>
                {shipping.total === 0
                  ? "Adicione seus favoritos para começar."
                  : "Cada escolha deixa você mais perto."}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
