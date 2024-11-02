import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
 
export default function WebDevelopment() {
  const { username } = useContext(AppContext);
 
  return (
    <div>
      <h2>Servicio de Desarrollo Web</h2>
      <p>Hola, {username}. Este es nuestro servicio de desarrollo web.</p>
    </div>
  );
}
