import React from 'react';
import { Link } from 'react-router-dom';
 
const ListaProductos = () => {
  const productos = [
    { id: 1, name: 'Producto A' },
    { id: 2, name: 'Producto B' },
    { id: 3, name: 'Producto C' },
  ];
 
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>{producto.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default ListaProductos;
