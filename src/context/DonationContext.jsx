import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for authentication
const ActiavtionContext = createContext();

export const useActivation = () => useContext(ActiavtionContext);

export const ActivationProvider = ({ children }) => {
  const [activated, setActivated] = useState(false);

  return (
    <ActiavtionContext.Provider value={{ activated, setActivated }}>
      {children}
    </ActiavtionContext.Provider>
  );
};