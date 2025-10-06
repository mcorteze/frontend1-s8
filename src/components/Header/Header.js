import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.title}>Ragnarok Online - Tienda Virtual</h1>
        <p className={styles.subtitle}>
          Juegos inspirados en las mejores clases de Ragnarok Online clásico.
        </p>
      </div>
    </header>
  );
}
