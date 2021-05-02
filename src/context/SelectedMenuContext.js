import { createContext, useContext, useState } from 'react';

export const SelectedMenuContext = createContext();

export const SelectedMenuProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState({});
  return (
    <SelectedMenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </SelectedMenuContext.Provider>
  );
};

export const useSelectedMenuValue = () => useContext(SelectedMenuContext);
