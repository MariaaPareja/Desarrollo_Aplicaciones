import React, { useState } from 'react';

const ProfileSettings = () => {
  // Estados para la contraseña y el color de pantalla
  const [password, setPassword] = useState('');
  const [screenColor, setScreenColor] = useState('#ffffff'); // Color por defecto: blanco

  // Envío formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto 
    //Simulamos la funcionalidad básica
    alert(`Contraseña actualizada a: ${password}\nColor de pantalla: ${screenColor}`);
  };

  return (
    <div>
      <h3>Ajustes del perfil</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nueva Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado con la nueva contraseña
              required
            />
          </label>
        </div>
        <div>
          <label>
            Color de pantalla:
            <input
              type="color"
              value={screenColor}
              onChange={(e) => setScreenColor(e.target.value)} // Actualiza el estado con el nuevo color
            />
          </label>
        </div>
        <button type="submit">Guardar Ajustes</button>
      </form>
    </div>
  );
};

export default ProfileSettings;