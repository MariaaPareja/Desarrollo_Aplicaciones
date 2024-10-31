import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Header from './Header';
import Content from './Content';
import Footer from './Footer/Footer';
import DataList from './DataList'; 
import ToggleButton from './ToggleButton/ToggleButton';
import Boton from './UseState/Boton';
import Efecto from './UseEffect/Efecto';

function App() {
  const productos = [
    { nombre: 'Camiseta', descripcion: 'Camiseta de algodón 100%', precio: 20 },
    { nombre: 'Pantalón', descripcion: 'Pantalón de mezclilla ajustado', precio: 40 },
    { nombre: 'Zapatos', descripcion: 'Zapatos deportivos ligeros', precio: 60 },
    { nombre: 'Chaqueta', descripcion: 'Chaqueta impermeable con capucha', precio: 80 },
  ];

  return (
    <Router>
      <div className="App">
        <Header title="Mi Aplicación de Tienda" />
        <nav style={navStyles}>
          <Link to="/" style={linkStyles}>Inicio</Link>
          <Link to="/productos" style={linkStyles}>Productos</Link>
          <Link to="/toggle" style={linkStyles}>Toggle</Link>
          <Link to="/boton" style={linkStyles}>Botón</Link>
          <Link to="/efecto" style={linkStyles}>Efecto</Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
