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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
