import React, { useState, useEffect } from 'react';
import './ToggleButton.css';

function Boton() {
  const [encendido, setEncendido] = useState(false);

  const toggleEncendido = () => {
    setEncendido(prevEncendido => !prevEncendido);
  };

  // useEffect 
  useEffect(() => {
    if (encendido) {
      console.log('El botón está encendido');
    } else {
      console.log('El botón está apagado');
    }
  }, [encendido]); // This runs whenever 'encendido' changes

  useEffect(() => {
    localStorage.setItem('encendido', JSON.stringify(encendido));
  }, [encendido]); // Este efecto también se ejecuta cuando 'encendido' cambia

  // Recuperar el estado de localStorage al cargar el componente
  useEffect(() => {
    const storedEncendido = localStorage.getItem('encendido');
    if (storedEncendido) {
      setEncendido(JSON.parse(storedEncendido));
    }
  }, []); // Este efecto solo se ejecuta una vez al montar el componente
  
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

