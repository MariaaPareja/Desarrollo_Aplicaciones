import React from 'react';

const OrderSummary = ({ pizza, toppings }) => {
  if (!pizza) return <p>No has seleccionado ninguna pizza.</p>;

  const total = pizza.basePrice + toppings.length; 

  return (
    <div>
      <h2>Resumen del Pedido</h2>
      <p>Pizza: {pizza.name}</p>
      <p>Ingredientes adicionales: {toppings.join(', ') || 'Ninguno'}</p>
      <p>Total: ${total}</p>
    </div>
  );
};

export default OrderSummary;