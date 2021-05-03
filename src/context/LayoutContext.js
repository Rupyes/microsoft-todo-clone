import { createContext, useContext, useState } from 'react';

export const LayoutContext = createContext();

export const LayoutContextProvider = ({ children }) => {
  const [hideSider, setHideSider] = useState(true);
  return (
    <LayoutContext.Provider value={{ hideSider, setHideSider }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutValue = () => useContext(LayoutContext);
