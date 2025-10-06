import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Logo / Marca */}
        <div className={styles.brand}>
          <h4>Prontera Store</h4>
          <p>“Tu conexión al mundo de Rune-Midgard”</p>
          <p className={styles.lore}>📍 Plaza Central de Prontera, junto a la estatua de la diosa</p>
        </div>

        {/* Navegación rápida */}
        <div>
          <h5>Navegación</h5>
          <ul>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><Link to="/devlogs">Devlogs</Link></li>
            <li><Link to="/comunidad">Comunidad</Link></li>
          </ul>
        </div>

        {/* Comunidad */}
        <div>
          <h5>Comunidad</h5>
          <p>Únete a las Kafras y aventureros de Midgard:</p>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
            <a href="https://discord.com" target="_blank" rel="noopener">Discord</a>
          </div>
        </div>

        {/* Créditos / Contacto */}
        <div>
          <h5>Contacto</h5>
          <p>📧 kafra.support@prontera-store.com</p>
          <p>☎️ (02) 9876-RO-MMO</p>
          <p className={styles.small}>
            © {new Date().getFullYear()} Prontera Store.  
            Inspirado en Ragnarok Online.
          </p>
        </div>

      </div>
    </footer>
  );
}
