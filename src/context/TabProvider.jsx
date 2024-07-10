import React, { createContext, useState, useContext } from 'react';

// Create the context
const TabContext = createContext();

// Create the provider component
export const TabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
};

// Create a custom hook to use the TabContext
export const useTabContext = () => {
  return useContext(TabContext);
};

