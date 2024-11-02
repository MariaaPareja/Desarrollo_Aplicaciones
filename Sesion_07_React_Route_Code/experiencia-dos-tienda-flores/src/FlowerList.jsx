import React, { useContext } from 'react';
import { FlowerContext } from '../context/FlowerContext';
import FlowerItem from './FlowerItem';

const flowers = [
  { id: 1, name: 'Rosa', price: 10 },
  { id: 2, name: 'Tulipán', price: 8 },
  { id: 3, name: 'Lirio', price: 12 },
];

const FlowerList = () => {
  const { addToCart } = useContext(FlowerContext);

  return (
    <div>
      <h2>Flores Disponibles</h2>
      <div className="flower-list">
        {flowers.map((flower) => (
          <FlowerItem key={flower.id} flower={flower} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default FlowerList;