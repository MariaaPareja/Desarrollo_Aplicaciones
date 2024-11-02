import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppProvider } from "./AppContext";
import { Home } from "./Screens/Home";
import { Contact } from "./Screens/Contact";
import Services from "./Screens/Services";
import './App.css';
 
function App() {
  return (
    <AppProvider>
      <Router>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/services">Servicios</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/*" element={<Services />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}
 
export default App;
