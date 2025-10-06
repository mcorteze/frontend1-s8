import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import Layout from "./components/Layout/Layout";
import Carrito from "./components/Carrito"
export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Landing sin Layout */}
        <Route path="/" element={<Landing />} />

        {/* Rutas con Layout */}
        <Route
          path="/inicio"
          element={
            <Layout>
              <Inicio />
            </Layout>
          }
        />
        <Route
          path="/productos"
          element={
            <Layout>
              <Productos />
            </Layout>
          }
        />
        <Route
          path="/contacto"
          element={
            <Layout>
              <Contacto />
            </Layout>
          }
        />
        <Route
          path="/carrito"
          element={
            <Layout>
              <Carrito />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
