import { useState } from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext"; // importar contexto
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { carrito } = useCarrito();

  const cantidad = carrito.reduce((acc, p) => acc + p.cantidad, 0);

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <button
          className={styles.toggle}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
        <ul className={`${styles.menu} ${open ? styles.open : ""}`}>
          <li>
            <Link to="/inicio" onClick={() => setOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" onClick={() => setOpen(false)}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setOpen(false)}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/carrito" onClick={() => setOpen(false)}>
              🛒 Carrito ({cantidad})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
