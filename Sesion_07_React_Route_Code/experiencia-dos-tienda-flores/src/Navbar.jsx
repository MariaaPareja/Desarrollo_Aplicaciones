import React, { useContext } from 'react';
import { FlowerContext } from '../context/FlowerContext';

const Navbar = () => {
  const { cart } = useContext(FlowerContext);

  return (
    <nav>
      <h1>Tienda de Flores</h1>
      <div>Carrito: {cart.length} flores</div>
    </nav>
  );
};

export default Navbar;