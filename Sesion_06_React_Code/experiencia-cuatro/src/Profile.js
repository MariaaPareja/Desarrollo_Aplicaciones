import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ProfileDetails from './ProfileDetails'; // Importa el componente de detalles
import ProfileSettings from './ProfileSettings'; // Importa el componente de ajustes

const Profile = () => {
  return (
    <div>
      <h2>Perfil</h2>
      <nav>
        <ul>
          <li>
            <Link to="/profile/details">Detalles</Link> {/* Enlace a detalles */}
          </li>
          <li>
            <Link to="/profile/settings">Ajustes</Link> {/* Enlace a ajustes */}
          </li>
        </ul>
      </nav>
      
      {/* Rutas anidadas para el perfil */}
      <Switch>
        <Route path="/profile/details" component={ProfileDetails} />
        <Route path="/profile/settings" component={ProfileSettings} />
      </Switch>
    </div>
  );
};

export default Profile;