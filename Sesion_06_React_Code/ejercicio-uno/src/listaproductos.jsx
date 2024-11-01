import React from 'react';
import { Link } from 'react-router-dom';
 
const listaproductos = () => {
    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                <li><Link to="producto/1">Producto 1</Link></li>
                <li><Link to="producto/2">Producto 2</Link></li>
                <li><Link to="producto/3">Producto 3</Link></li>
            </ul>
        </div>
    );
};
 
export default ProductList;
