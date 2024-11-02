import React from 'react';

const FlowerItem = ({ flower, addToCart }) => {
  return (
    <div className="flower-item">
      <h3>{flower.name}</h3>
      <p>Precio: ${flower.price}</p>
      <button onClick={() => addToCart(flower)}>Añadir al Carrito</button>
    </div>
  );
};

export default FlowerItem;