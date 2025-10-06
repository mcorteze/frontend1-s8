import { useState, useEffect } from "react";
import { useCarrito } from "../context/CarritoContext";
import styles from "./Productos.module.css";
import data from "../data/productos.json";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const { agregar } = useCarrito();
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setProductos(data);
  }, []);

  const filtrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  function handleAgregar(producto) {
    agregar(producto);
    setMensaje(`✅ ${producto.nombre} agregado al carrito`);
    setTimeout(() => setMensaje(""), 2000);
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.intro}>
          <h2>Bienvenido al catálogo</h2>
          <p>
            Aquí encontrarás nuestras selecciones destacadas de 2025: aventuras,
            expansiones y experiencias temáticas inspiradas en Ragnarok Online.
          </p>
        </section>

        {/* Buscador */}
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Buscar producto..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>

        {/* Mensaje */}
        {mensaje && <div className={styles.mensaje}>{mensaje}</div>}

        {/* Lista de productos */}
        <ul className={styles.productos}>
          {filtrados.length > 0 ? (
            filtrados.map((p) => (
              <li key={p.id} className={styles.producto}>
                <figure className={styles.media}>
                  <img src={p.imagen} alt={p.alt} />
                </figure>
                <div className={styles.info}>
                  <h3>{p.nombre}</h3>
                  <p>{p.descripcion}</p>
                  <p className={styles.meta}>
                    <em>Género:</em> {p.genero} • <em>Enfoque:</em> {p.enfoque}
                  </p>
                  <p className={styles.precio}>
                    <span className={styles.precioNormal}>
                      ${p.precioNormal.toLocaleString("es-CL")}
                    </span>{" "}
                    <span className={styles.precioOferta}>
                      ${p.precioOferta.toLocaleString("es-CL")}
                    </span>
                  </p>
                  <button
                    className={styles.btn}
                    onClick={() => handleAgregar(p)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className={styles.vacio}>No se encontraron productos</li>
          )}
        </ul>
      </div>
    </main>
  );
}
