import React from 'react';
import { Link, Switch } from 'react-router-dom';
import ProfileDetails from './ProfileDetails'; // Importa el componente de detalles
import ProfileSettings from './ProfileSettings'; // Importa el componente de ajustes
import PrivateRoute from './PrivateRoute'; // Importa el componente de ruta privada

const Profile = () => {
  // Simula el estado de autenticación
  const isAuthenticated = true; // Cambia esto según la lógica de autenticación real

  return (
    <div>
      <h2>Perfil</h2>
      <nav>
        <ul>
          <li>
            <Link to="/profile/details">Detalles</Link>
          </li>
          <li>
            <Link to="/profile/settings">Ajustes</Link>
          </li>
        </ul>
      </nav>

      {/* Rutas privadas para el perfil */}
      <Switch>
        <PrivateRoute 
          path="/profile/details" 
          component={ProfileDetails} 
          isAuthenticated={isAuthenticated} 
        />
        <PrivateRoute 
          path="/profile/settings" 
          component={ProfileSettings} 
          isAuthenticated={isAuthenticated} 
        />
      </Switch>
    </div>
  );
};

export default Profile;