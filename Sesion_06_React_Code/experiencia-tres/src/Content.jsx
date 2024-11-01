import React from 'react';

function Content() {
  return (
    <main style={styles.container}>
      <section style={styles.introSection}>
        <h2 style={styles.heading}>Explora un Mundo de Belleza</h2>
        <p style={styles.paragraph}>
          Nuestra aplicación te lleva en un viaje visual lleno de paisajes impresionantes, momentos inspiradores y
          diseños creativos. Déjate envolver por la magia de lo visual y encuentra inspiración en cada rincón.
        </p>
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2MjkzNzkxNzc&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Paisaje inspirador"
          style={styles.image}
        />
      </section>

      <section style={styles.quoteSection}>
        <blockquote style={styles.quote}>
          "La belleza es el arte de ver lo extraordinario en lo ordinario." — <span style={styles.quoteAuthor}>Anónimo</span>
        </blockquote>
      </section>

      <section style={styles.cardSection}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Creatividad Sin Límites</h3>
          <p style={styles.cardText}>
            No hay barreras para la imaginación. Crea, innova y explora nuevas formas de expresión.
          </p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Naturaleza en su Máxima Expresión</h3>
          <p style={styles.cardText}>
            La naturaleza siempre tiene algo nuevo que mostrar. Admira sus colores, formas y vida en cada momento.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Content;
