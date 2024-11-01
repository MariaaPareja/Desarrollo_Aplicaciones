
import React, { useState } from 'react';
import PizzaMenu from './components/PizzaMenu';
import OrderSummary from './components/OrderSummary';

function App() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [toppings, setToppings] = useState([]);

  const handlePizzaSelect = (pizza) => {
    setSelectedPizza(pizza);
  };

  const handleToppingToggle = (topping) => {
    setToppings((prevToppings) => 
      prevToppings.includes(topping) 
      ? prevToppings.filter(t => t !== topping) 
      : [...prevToppings, topping]
    );
  };

  return (
    <div className="App">
      <h1>¡Ordena tu Pizza!</h1>
      <PizzaMenu onPizzaSelect={handlePizzaSelect} onToppingToggle={handleToppingToggle} />
      <OrderSummary pizza={selectedPizza} toppings={toppings} />
    </div>
  );
}

export default App;
