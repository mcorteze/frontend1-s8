import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <main id="inicio" className={styles.heroFull}>
      <img
        className={styles.heroBg}
        src="https://d1lss44hh2trtw.cloudfront.net/assets/editorial/2019/09/ragnorak-gif.gif"
        alt="Ragnarok Online"
      />
      <img className={styles.heroOverlay} src="/assets/img/tv.gif" alt="" />
      <span className={styles.heroVignette} aria-hidden="true"></span>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Prontera Store
          <br />
          <span>Videojuegos basados en Ragnarok Online</span>
        </h1>
        <p className={styles.heroSub}>
          Explora coleccionables inspirados en el juego clásico.
        </p>
        <Link to="/inicio" className={styles.heroCta}>
          Inicio
        </Link>
      </div>
    </main>
  );
}
