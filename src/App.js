import React, { useState } from 'react';
import './App.css';
import { SelectedMenuProvider } from './context/SelectedMenuContext';
import HomeLayout from './Layout/HomeLayout';
import { TodoContextProvider } from './context/TodoContext';
import { MenuProvider } from './context/MenuContext';
import { LayoutContextProvider } from './context/LayoutContext';

function App() {
  return (
    <LayoutContextProvider>
      <SelectedMenuProvider>
        <MenuProvider>
          <TodoContextProvider>
            <div className='App'>
              <HomeLayout />
            </div>
          </TodoContextProvider>
        </MenuProvider>
      </SelectedMenuProvider>
    </LayoutContextProvider>
  );
}

export default App;
