import { useEffect, useState } from "react";
import Icon from "../Icon.jsx";
import styles from "./Toast.module.css";

const TITLES = {
  success: "Tudo certo",
  error: "Algo deu errado",
  info: "Só para avisar",
};
const ICONS = { success: "check", error: "error", info: "info" };

export default function Toast({
  id,
  type = "info",
  message,
  onClose,
  duration = 5000,
}) {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setTimeout(() => onClose(id), duration);
    return () => window.clearTimeout(timer);
  }, [id, onClose, duration, isPaused]);

  return (
    <div
      className={`${styles.toast} ${styles[type] || styles.info}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setIsPaused(false);
      }}
    >
      <span className={styles.icon}>
        <Icon name={ICONS[type] || "info"} size={20} />
      </span>
      <div className={styles.text}>
        <strong>{TITLES[type] || TITLES.info}</strong>
        <p>{message}</p>
      </div>
      <button
        type="button"
        aria-label="Fechar notificação"
        onClick={() => onClose(id)}
        className={styles.close}
      >
        <Icon name="close" size={16} />
      </button>
    </div>
  );
}
