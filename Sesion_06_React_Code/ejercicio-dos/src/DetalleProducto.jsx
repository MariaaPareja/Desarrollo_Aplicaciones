import React from 'react';
import { useParams } from 'react-router-dom';
 
const DetalleProducto = () => {
  const { productId } = useParams();
 
  return <h2>Detalles del Producto {productId}</h2>;
};
 
export default DetalleProducto;
