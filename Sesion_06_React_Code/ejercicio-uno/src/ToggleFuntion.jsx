import React, { useState } from 'react';
 
const ToggleFunction = () => {
  const [isOn, setIsOn] = useState(false);
 
  const toggle = () => {
    setIsOn(!isOn);
  };
 
  return (
    <div>
      <h2>Interruptor (Funcional)</h2>
      <p>Estado: {isOn ? 'Encendido' : 'Apagado'}</p>
      <button onClick={toggle}>Cambiar Estado</button>
    </div>
  );
};
 
export default ToggleFunction;
