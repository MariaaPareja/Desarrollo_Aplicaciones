import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
 
export const Contact = () => {
  const { username } = useContext(AppContext);
 
  return (
    <div>
      <h2>Contacto</h2>
      <p>Bienvenido, {username}</p>
    </div>
  );
};
