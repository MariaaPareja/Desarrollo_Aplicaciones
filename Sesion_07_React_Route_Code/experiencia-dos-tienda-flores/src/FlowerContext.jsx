import React, { createContext, useState } from 'react';

export const FlowerContext = createContext();

export const FlowerProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState('');

  const addToCart = (flower) => {
    setCart((prevCart) => [...prevCart, flower]);
  };

  return (
    <FlowerContext.Provider value={{ cart, addToCart, username, setUsername }}>
      {children}
    </FlowerContext.Provider>
  );
};