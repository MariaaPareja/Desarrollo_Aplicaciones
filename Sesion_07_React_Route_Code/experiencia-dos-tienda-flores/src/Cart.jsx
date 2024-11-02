import React, { useContext } from 'react';
import { FlowerContext } from '../context/FlowerContext';

const Cart = () => {
  const { cart } = useContext(FlowerContext);

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay flores en el carrito.</p>
      ) : (
        <ul>
          {cart.map((flower, index) => (
            <li key={index}>{flower.name} - ${flower.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;