/* eslint-disable react/prop-types */
// CalculationContext.js
import React, { createContext, useState } from "react";

// Create the context
const CalculateContext = createContext();

// Create a provider component
export const CalculateProvider = ({ children }) => {
  // State variables
  const [bill, setBill] = useState(0);
  const [tipValue, setTipValue] = useState(0);
  const [people, setPeople] = useState(0);

  return (
    <CalculateContext.Provider
      value={{
        bill,
        setBill,
        tipValue,
        setTipValue,
        people,
        setPeople,
      }}>
      {children}
    </CalculateContext.Provider>
  );
};

// Create a custom hook for using the context
export const useCalculateContext = () => {
  const context = React.useContext(CalculateContext);
  if (!context) {
    throw new Error("useCalculateContext must be used within an CalculateProvider");
  }
  return context;
};
