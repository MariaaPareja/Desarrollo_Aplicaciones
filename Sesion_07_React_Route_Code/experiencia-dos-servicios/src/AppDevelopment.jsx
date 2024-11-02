import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
 
export default function AppDevelopment() {
  const { username } = useContext(AppContext);
 
  return (
    <div>
      <h2>Servicio de Desarrollo de Apps</h2>
      <p>Hola, {username}. Este es nuestro servicio de desarrollo de apps.</p>
    </div>
  );
}
