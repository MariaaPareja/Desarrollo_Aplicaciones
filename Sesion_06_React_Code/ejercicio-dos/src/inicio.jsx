import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
 
const Inicio = () => {
  return (
    <div>
      <Header title="Inicio - Tienda" />
      <main>Bienvenido a nuestra tienda en línea.</main>
      <Footer year={2024} />
    </div>
  );
};
 
export default Inicio;
