
import React from 'react';

function Header({ title }) { 
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1 style={styles.logoText}>{title}</h1> 
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#home" style={styles.navLink}>Inicio</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>Acerca de</a></li>
          <li style={styles.navItem}><a href="#services" style={styles.navLink}>Servicios</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
