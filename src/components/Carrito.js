import { useCarrito } from "../context/CarritoContext";
import styles from "./Carrito.module.css";

export default function Carrito() {
  const { carrito, eliminar, vaciar, total } = useCarrito();

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>🛒 Mi Carrito</h2>

        {carrito.length === 0 ? (
          <p className={styles.vacio}>El carrito está vacío</p>
        ) : (
          <>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((p) => (
                  <tr key={p.id}>
                    <td>{p.nombre}</td>
                    <td>{p.cantidad}</td>
                    <td>${p.precioOferta.toLocaleString("es-CL")}</td>
                    <td>
                      <button
                        className={styles.btnEliminar}
                        onClick={() => eliminar(p.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.resumen}>
              <p>
                <strong>Total:</strong> ${total.toLocaleString("es-CL")}
              </p>
              <button className={styles.btnVaciar} onClick={vaciar}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
