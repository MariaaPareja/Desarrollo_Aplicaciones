import React, { useState } from 'react';
 
const DoubleIncrementFunction = () => {
  const [count, setCount] = useState(0);
 
  const increment = () => {
    setCount(count + 2);
  };
 
  return (
    <div>
      <h2>Contador con Incremento Doble (Funcional)</h2>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar en 2</button>
    </div>
  );
};
 
export default DoubleIncrementFunction;

