// src/App.js
import React from 'react';
import { FlowerProvider } from './context/FlowerContext';
import Navbar from './components/Navbar';
import FlowerList from './components/FlowerList';
import Cart from './components/Cart';

function App() {
  return (
    <FlowerProvider>
      <Navbar />
      <div className="container">
        <FlowerList />
        <Cart />
      </div>
    </FlowerProvider>
  );
}

export default App;
