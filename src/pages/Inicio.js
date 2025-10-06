import { Link } from "react-router-dom";
import styles from "./Inicio.module.css";

export default function Inicio() {
  return (
    <main id="inicio" className={styles.main}>
      <div className="container">
        {/* Qué es */}
        <section className={styles.sectionIntro}>
          <div className={styles.sectionIntroText}>
            <h2 className="section-title">¿Qué es Prontera Store?</h2>
            <p className="text-description">
              Prontera Store es un proyecto inspirado en el universo de{" "}
              <strong>Ragnarok Online</strong>. Aquí encontrarás información,
              devlogs y contenido sobre nuestros videojuegos temáticos, clases
              favoritas, arte conceptual y eventos de la comunidad.
            </p>
            <p>
              Conoce nuestros productos en{" "}
              <Link to="/productos" className="links-oscuro">
                Ver productos
              </Link>
              .
            </p>
          </div>

          <div className={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/2L4JnYor8pM"
              title="YouTube video"
              allowFullScreen
            />
          </div>
        </section>

        {/* Cómo funciona */}
        <section>
          <h3 className="section-title">Cómo funciona</h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h5>1) Explora el universo</h5>
              <p>Lee sobre clases, mapas y referencias del clásico RO.</p>
            </div>
            <div className={styles.card}>
              <h5>2) Sigue los devlogs</h5>
              <p>Actualizaciones de desarrollo, arte y prototipos.</p>
            </div>
            <div className={styles.card}>
              <h5>3) Visita la tienda</h5>
              <p>
                Revisa <Link to="/productos">Productos</Link> para ver lo
                disponible.
              </p>
            </div>
          </div>
        </section>

        {/* Noticias */}
        <section>
          <h3 className="section-title">Noticias destacadas</h3>
          <div className={styles.cards}>
            <article className={styles.card}>
              <img
                src={require("../assets/img/noticias1.jpg")}
                alt="Foto grupal en Prontera"
              />
              <h5>Prontera se llena de vida</h5>
              <p>Reunión masiva de jugadores en la capital de Ragnarok.</p>
              <Link to="/articulo-prontera-grupal" className="links-claro">
                Leer
              </Link>
            </article>
            <article className={styles.card}>
              <img
                src={require("../assets/img/noticias2.jpg")}
                alt="Nuevo servidor Brasil 2025"
              />
              <h5>Nuevo servidor en Brasil</h5>
              <p>Servidor 2025 con eventos únicos y comunidad en expansión.</p>
              <Link to="/articulo-servidor-brasil" className="links-claro">
                Leer
              </Link>
            </article>
            <article className={styles.card}>
              <img
                src={require("../assets/img/noticias3.jpeg")}
                alt="Mapa inspirado en Río de Janeiro"
              />
              <h5>Río llega a Rune-Midgard</h5>
              <p>Mapa vibrante inspirado en Río con paisajes y desafíos.</p>
              <Link to="/articulo-mapa-rio" className="links-claro">
                Leer
              </Link>
            </article>
          </div>
        </section>

        {/* Artículos relacionados */}
        <section>
          <h3 className="section-title">Artículos relacionados</h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h6>Poster “Bosque de Prontera”</h6>
              <p>Ilustración edición limitada.</p>
              <Link to="/productos#poster-Prontera">Ver</Link>
            </div>
            <div className={styles.card}>
              <h6>OST Lo-Fi de Prontera</h6>
              <p>Selección musical inspirada.</p>
              <Link to="/productos#ost-prontera">Ver</Link>
            </div>
            <div className={styles.card}>
              <h6>Pin “Arco de Cazador”</h6>
              <p>Colección Clases — Hunter.</p>
              <Link to="/productos#pin-hunter">Ver</Link>
            </div>
          </div>
          <p>
            Para comprar, visita{" "}
            <Link to="/productos" className="links-oscuro">
              Productos
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link to="/productos" className="btn btn-lg btn-primary">
            Ir a Productos →
          </Link>
        </section>
      </div>
    </main>
  );
}
