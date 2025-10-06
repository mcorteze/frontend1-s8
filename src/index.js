import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CarritoProvider } from "./context/CarritoContext";

import './App.css';
import './styles/layout.css';
import './styles/generales.css';
import './styles/particulares.css';
import './styles/responsivos.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </React.StrictMode>
);

// Para medir rendimiento
reportWebVitals();
