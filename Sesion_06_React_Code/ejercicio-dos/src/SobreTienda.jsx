import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
 
const SobreTienda = () => {
  return (
    <div>
      <Header title="Sobre la Tienda" />
      <main>Información sobre nuestra tienda y misión.</main>
      <Footer year={2024} />
    </div>
  );
};
 
export default SobreTienda;
