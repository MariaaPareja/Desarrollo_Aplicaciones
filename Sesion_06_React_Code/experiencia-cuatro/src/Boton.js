import React, { useState } from 'react';
import './ToggleButton.css';

function Boton() {
  const [encendido, setEncendido] = useState(false);

  const toggleEncendido = () => {
    setEncendido(!encendido);
  };

  const backgroundColor = encendido ? '#fff' : '#4586a0';
  const textColor = encendido ? '#4586a0' : '#fff';

  return (
    <div className="toggle-button-container" style={{ backgroundColor: backgroundColor, color: textColor }}>
      <p>{encendido ? 'Encendido' : 'Apagado'}</p>
      <button onClick={toggleEncendido} className="toggle-button">
        {encendido ? 'Apagar' : 'Encender'}
      </button>
    </div>
  );
}

export default Boton;
