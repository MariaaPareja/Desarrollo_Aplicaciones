import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import WebDevelopment from "./WebDevelopment";
import AppDevelopment from "./AppDevelopment";
 
function Services() {
  return (
    <div>
      <h1>Servicios</h1>
      <nav>
        <Link to="web">Desarrollo Web</Link>
        <Link to="app">Desarrollo de Apps</Link>
      </nav>
 
      <Routes>
        <Route path="web" element={<WebDevelopment />} />
        <Route path="app" element={<AppDevelopment />} />
      </Routes>
    </div>
  );
}
 
export default Services;
