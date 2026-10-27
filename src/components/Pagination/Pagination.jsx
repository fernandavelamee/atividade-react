import Icon from "../Icon.jsx";
import styles from "./Pagination.module.css";

// A página atual pertence ao App; este componente apenas solicita sua alteração.
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages < 1) return null;
  return (
    <nav className={styles.pagination} aria-label="Páginas de produtos">
      <button
        type="button"
        className={styles.direction}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Página anterior"
      >
        <Icon name="left" size={18} />
        <span>Anterior</span>
      </button>
      <div className={styles.numbers}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              type="button"
              key={page}
              className={styles.page}
              aria-label={`Página ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ),
        )}
      </div>
      <button
        type="button"
        className={styles.direction}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Próxima página"
      >
        <span>Próxima</span>
        <Icon name="right" size={18} />
      </button>
    </nav>
  );
}
