import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
 
export const Home = () => {
  const { username } = useContext(AppContext);
 
  return (
    <div>
      <h2>Inicio</h2>
      <p>Bienvenido a la página principal, {username}</p>
    </div>
  );
};
