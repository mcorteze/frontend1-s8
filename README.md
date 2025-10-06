Prontera Store - README

Descripción
Prontera Store es una aplicación web desarrollada con React que simula una tienda virtual basada en el universo de Ragnarok Online. Permite visualizar productos, agregarlos o eliminarlos del carrito y mantener los datos del carrito mediante localStorage.

Tecnologías utilizadas
• React 18
• React Router DOM
• CSS Modules
• LocalStorage (persistencia del carrito)

Funcionalidades principales
• Listado dinámico de productos cargados desde un archivo productos.json.
• Agregar y eliminar productos del carrito.
• Contador dinámico de productos en el menú de navegación.
• Renderizado condicional (mensaje cuando el carrito está vacío, búsqueda sin resultados, etc.).
• Persistencia del carrito incluso al recargar la página.
• Estructura modular con componentes reutilizables y contexto global (CarritoContext).

Estructura principal
src/
 ├── components/
 │   ├── Carrito/
 │   ├── Layout/
 │   ├── Navbar/
 │   ├── Header/
 │   ├── Footer/
 │   └── Hero/
 ├── context/
 │   └── CarritoContext.jsx
 ├── pages/
 │   ├── Landing.jsx
 │   ├── Inicio.jsx
 │   ├── Productos.jsx
 │   └── Contacto.jsx
 ├── data/
 │   └── productos.json
 ├── App.jsx
 └── index.jsx

Instalación y ejecución
1. Clonar el repositorio:
   git clone https://github.com/tu-usuario/prontera-store.git
2. Instalar dependencias:
   npm install
3. Iniciar servidor local:
   npm start

Autor
Manuel Cortez
2025

