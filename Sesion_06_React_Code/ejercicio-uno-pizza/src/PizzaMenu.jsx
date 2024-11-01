import React from 'react';

const pizzas = [
  { id: 1, name: 'Margarita', basePrice: 8 },
  { id: 2, name: 'Pepperoni', basePrice: 10 },
  // Otras pizzas...
];

const PizzaMenu = ({ onPizzaSelect}) => {
  return (
    <div>
      <h2>Menú de Pizzas</h2>
      {pizzas.map(pizza => (
        <div key={pizza.id}>
          <h3>{pizza.name} - ${pizza.basePrice}</h3>
          <button onClick={() => onPizzaSelect(pizza)}>Seleccionar</button>
        </div>
      ))}
    </div>
  );
};

export default PizzaMenu;