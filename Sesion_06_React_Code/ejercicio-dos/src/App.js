import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import SobreTienda from "./components/SobreTienda/SobreTienda";
import ListaProductos from "./components/ListaProductos/ListaProductos";
import DetalleProducto from "./components/DetalleProducto/DetalleProducto";
import RutaPrivada from "./components/RutaPrivada/RutaPrivada";
 
const isAuthenticated = false; // Cambia a true para acceder a las rutas protegidas
 
const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre la Tienda</Link>
        <Link to="/productos">Productos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<SobreTienda />} />
        <Route
          path="/productos"
          element={
            <RutaPrivada isAuthenticated={isAuthenticated}>
              <ListaProductos />
            </RutaPrivada>
          }
        />
        <Route path="/productos/:productId" element={<DetalleProducto />} />
      </Routes>
    </Router>
  );
};
 
export default App;
