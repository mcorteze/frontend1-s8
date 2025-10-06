import { createContext, useContext, useState, useEffect } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Persistencia con localStorage
  useEffect(() => {
    const saved = localStorage.getItem("carrito");
    if (saved) setCarrito(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  function agregar(producto) {
    setCarrito((prev) => {
      const existente = prev.find((p) => p.id === producto.id);
      if (existente) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  }

  function eliminar(id) {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  }

  function vaciar() {
    setCarrito([]);
  }

  const total = carrito.reduce(
    (acc, p) => acc + p.precioOferta * p.cantidad,
    0
  );

  return (
    <CarritoContext.Provider
      value={{ carrito, agregar, eliminar, vaciar, total }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContext);
}
