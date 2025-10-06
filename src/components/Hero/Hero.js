import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Prontera Store <br />
          <span className={styles.muted}>Videojuegos basados en Ragnarok Online</span>
        </h1>
        <p className={styles.subtitle}>
          Explora coleccionables inspirados en el juego clásico.
        </p>
        <a href="/inicio" className={styles.cta}>Ver catálogo</a>
      </div>
    </section>
  );
}
