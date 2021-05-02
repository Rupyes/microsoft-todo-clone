import { createContext, useContext } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  return (
    <MenuContext.Provider value={'Hello'}>{children}</MenuContext.Provider>
  );
};

export const useMenuValue = () => useContext(MenuContext);
