import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import Toast from "../components/Toast/Toast.jsx";
import styles from "../components/Toast/Toast.module.css";

const ToastContext = createContext(null);

// Desafio extra: App, ProductCard e SelectionDialog usam o mesmo estado global.
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const nextId = useRef(0);

  const removeToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  // A referência estável impede que os efeitos dos consumidores reiniciem timers.
  const showToast = useCallback((type, message) => {
    const id = ++nextId.current;
    setToasts((current) => [...current.slice(-3), { id, type, message }]);
  }, []);

  const contextValue = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {/* As regiões permanecem montadas para anunciar mensagens adicionadas. */}
      <div className={styles.container}>
        <div
          role="status"
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions text"
          className={styles.stack}
        >
          {toasts
            .filter((toast) => toast.type !== "error")
            .map((toast) => (
              <Toast key={toast.id} {...toast} onClose={removeToast} />
            ))}
        </div>
        <div
          role="alert"
          aria-live="assertive"
          aria-atomic="false"
          aria-relevant="additions text"
          className={styles.stack}
        >
          {toasts
            .filter((toast) => toast.type === "error")
            .map((toast) => (
              <Toast key={toast.id} {...toast} onClose={removeToast} />
            ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error("useToast precisa estar dentro de ToastProvider.");
  return context;
}
