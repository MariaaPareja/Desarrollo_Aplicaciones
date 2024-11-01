import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Componente de Ruta Privada
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} /> // Se simula la autenticación
        ) : (
          <Redirect to="/Home" /> // Redirige a la página de home si no está autenticado
        )
      }
    />
  );
};

export default PrivateRoute;