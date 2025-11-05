# React App Layout y Routes
#

En la clase de hoy vamos a diseñar y constrír la estructura de nuestra página para e-commerce.
En primer lugar vamos a trabajar con el concepto de Layout (estructura) y luego vamos a incorporar el ruteo a las diferentes vistas de la página

# Layout
#

Un layout en React es un componente contenedor que define la estructura visual y organizacional compartida entre múltiples páginas o vistas de una aplicación. Actúa como una plantilla que envuelve el contenido variable, proporcionando elementos consistentes como navegación, encabezados, pies de página, barras laterales, etc.

Los layouts resuelven el problema de repetición de código e inconsistencia visual al centralizar la estructura común de la interfaz. En lugar de duplicar el mismo navbar, sidebar o footer en cada página, estos elementos son definidos una sola vez en el layout y es renderizado con el contenido específico de cada ruta dentro de él.

## Utilidades Principales
- Reutilización de código: Evitas duplicar componentes estructurales (header, nav, footer) en cada vista.
- Consistencia visual: Garantizas que todas las páginas mantengan la misma estructura y estilos base.
- Mantenibilidad: Los cambios en elementos comunes se hacen en un solo lugar, no en cada página individual.
- Separación de responsabilidades: El layout maneja la estructura general, mientras que las páginas se enfocan en su contenido específico.
- Layouts condicionales: Puedes tener diferentes layouts según el contexto (autenticado/no autenticado, admin/usuario, móvil/desktop).


## Implementacion de Layout

Estructura de Layout básica, con componentes header, footer y contenedor principal.

Primero creamos el componente Layout
```jsx
// layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
```

```css
/* Layout.module.css */
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
```

Luego creamos los componentes Header y Footer

```jsx
// Header.jsx
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Your Brand</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
```
```css
/* Header.module.css */
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.header nav a {
  text-decoration: none;
  color: #333;
}

.header nav a:hover {
  color: #666;
}
```
```jsx
// Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; 2023 Your Brand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
```
```css
/* Footer.module.css */
.footer {
  background-color: #f5f5f5;
  padding: 2rem 0;
  margin-top: auto;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}
```

Para utilizar este Layout debemos envolver nuestra app con el componente Layout

```jsx
// App.js
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      {/* Your page content goes here */}
      <h1>Welcome to our store!</h1>
    </Layout>
  );
}

export default App;
```

# Routes
#

Las rutas (routing) en React son el mecanismo que permite crear aplicaciones de múltiples páginas (SPA - Single Page Application) donde diferentes URLs muestran diferentes contenidos sin recargar completamente la página. Es el sistema que mapea URLs específicas a componentes específicos de React.

A diferencia de las aplicaciones web tradicionales donde cada URL requiere una petición al servidor que devuelve un HTML completo, en React las rutas funcionan del lado del cliente (client-side routing). Esto significa que JavaScript intercepta los cambios de URL y renderiza dinámicamente el componente correspondiente sin recargar la página completa.

## Ventajas
- Navegación sin recargas: Permite cambiar entre "páginas" instantáneamente manteniendo el estado de la aplicación.
- Experiencia de usuario mejorada: Transiciones más fluidas y aplicaciones más rápidas.
- Organización del código: Estructura lógica que separa diferentes funcionalidades en componentes distintos.
- URLs significativas: Cada vista tiene una URL única que puede ser compartida, guardada en favoritos o indexada por buscadores.
- Historial del navegador: Los botones de atrás/adelante funcionan correctamente.

## React Router: La Biblioteca Estándar
React no incluye routing de forma nativa, por lo que se utiliza React Router, la biblioteca más popular y mantenida para este propósito.

```bash
npm install react-router-dom
```

## Componentes Principales
### 1. BrowserRouter

Envuelve toda la aplicación y habilita el sistema de routing. Utiliza la API de historial del navegador HTML5.

```jsx
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
```

### 2. Routes y Route

Routes es el contenedor que agrupa todas las rutas. Route define una correspondencia entre una URL y un componente.

```jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default AppRoutes;
```

### 3. Link y NavLink

Componentes para crear enlaces de navegación sin recargar la página.

```jsx
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* Link básico */}
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de</Link>
      
      {/* NavLink con estilos activos */}
      <NavLink 
        to="/products" 
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Productos
      </NavLink>
    </nav>
  );
}
```

Link es para navegación simple, mientras que NavLink registra cuándo está activo, útil para resaltar la página actual en el menú.

## Tipos de Rutas
### Rutas Estáticas

URLs fijas que siempre muestran el mismo componente:

```jsx
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
```

### Rutas Dinámicas (con Parámetros)

URLs que incluyen valores variables, como IDs:
```jsx
<Route path="/user/:userId" element={<UserProfile />} />
<Route path="/products/:category/:id" element={<ProductDetail />} />
```

Acceso a los parámetros usando el hook useParams:

```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <h1>Perfil del usuario: {userId}</h1>;
}
```

### Ruta 404 (Catch-all)

Captura todas las URLs que no coinciden con ninguna ruta definida:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```