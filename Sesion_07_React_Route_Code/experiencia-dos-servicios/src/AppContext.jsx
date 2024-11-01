import React, { createContext, useState } from 'react';
 
// Creamos el contexto
export const AppContext = createContext();
 
export const AppProvider = ({ children }) => {
  const [username, setUsername] = useState("Usuario");
 
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      {children}
    </AppContext.Provider>
  );
};
