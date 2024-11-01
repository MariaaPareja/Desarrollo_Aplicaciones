import React from 'react';

function DataList({ data }) {
  const handleAddToCart = (nombre) => {
    alert(`${nombre} ha sido añadido al carrito.`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Lista de Productos</h2>
      <ul style={styles.list}>
        {data.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <h3 style={styles.itemTitle}>{item.nombre}</h3>
            <p style={styles.itemDescription}>Descripción: {item.descripcion}</p>
            <p style={styles.itemPrice}>Precio: ${item.precio}</p>
            
            <button 
              style={styles.button} 
              onClick={() => handleAddToCart(item.nombre)} 
            >
              Añadir al carrito
            </button>
          </li>	
        ))}
      </ul>
    </div>
  );
}
export default DataList;

