import { useEffect, useId, useRef, useState } from "react";
import Icon from "../Icon.jsx";
import styles from "./Dropdown.module.css";

export default function Dropdown({ label, options, selectedValue, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const optionRefs = useRef([]);
  const menuId = useId();
  const selectedIndex = options.findIndex(
    (option) => option.value === selectedValue,
  );
  const selected = options[selectedIndex];

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOutside);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) optionRefs.current[activeIndex]?.focus();
  }, [isOpen, activeIndex]);

  const openMenu = (index = Math.max(0, selectedIndex)) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const chooseOption = (option) => {
    onChange?.(option.value);
    option.onSelect?.(option.value);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const handleMenuKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex(
        (current) => (current + step + options.length) % options.length,
      );
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setActiveIndex(event.key === "Home" ? 0 : options.length - 1);
    } else if (event.key === "Tab") {
      // Move o foco para o acionador antes do Tab nativo sair do componente.
      buttonRef.current?.focus();
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.dropdown} ref={containerRef}>
      <button
        type="button"
        ref={buttonRef}
        className={`${styles.trigger} ${isOpen ? styles.open : ""}`}
        aria-label={`${label}: ${selected?.label || "Selecionar"}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => (isOpen ? setIsOpen(false) : openMenu())}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            openMenu(
              event.key === "ArrowUp"
                ? options.length - 1
                : Math.max(0, selectedIndex),
            );
          }
        }}
      >
        <span>
          <span className={styles.label}>{label}</span>
          {selected?.label || "Selecionar"}
        </span>
        <Icon name="chevron" size={16} />
      </button>
      {isOpen && (
        <ul
          id={menuId}
          role="listbox"
          aria-label={label}
          className={styles.menu}
          onKeyDown={handleMenuKeyDown}
        >
          {options.map((option, index) => (
            <li key={option.value} role="none">
              <button
                type="button"
                role="option"
                aria-selected={option.value === selectedValue}
                tabIndex={-1}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                onFocus={() => setActiveIndex(index)}
                onClick={() => chooseOption(option)}
                className={styles.option}
              >
                <span>{option.label}</span>
                {option.value === selectedValue && (
                  <Icon name="check" size={16} />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
