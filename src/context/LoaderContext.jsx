import React, { createContext, useState, useContext } from 'react';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  const showLoader = () => {
    setCounter(prev => prev + 1);
    setLoading(true);
  };

  const hideLoader = () => {
    setCounter(prev => {
      if (prev <= 1) {
        setLoading(false);
        return 0;
      }
      return prev - 1;
    });
  };

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {children}
      {loading && <GlobalLoader />}
    </LoaderContext.Provider>
  );
};

const GlobalLoader = () => (
  <div className="loader-overlay">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export const useLoader = () => useContext(LoaderContext);