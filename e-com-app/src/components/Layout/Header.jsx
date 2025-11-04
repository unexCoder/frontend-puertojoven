import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>e-comm-app</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Productos</a></li>
            <li><a href="/cart">Carrito</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;