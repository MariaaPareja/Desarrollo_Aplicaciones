import React from 'react';

const ProfileDetails = ({ nombre, apellido }) => {
    return (
      <div>
        <h3>Nombre: {nombre}</h3> 
        <h3>Apellido: {apellido}</h3> 
      </div>
    );
  };
  
  export default ProfileDetails;