import React, { useState } from 'react';
import './App.css';
import { SelectedMenuProvider } from './context/SelectedMenuContext';
import HomeLayout from './Layout/HomeLayout';
import { TodoContextProvider } from './context/TodoContext';
import { MenuProvider } from './context/MenuContext';

function App() {
  return (
    <SelectedMenuProvider>
      <MenuProvider>
        <TodoContextProvider>
          <div className='App'>
            <HomeLayout />
          </div>
        </TodoContextProvider>
      </MenuProvider>
    </SelectedMenuProvider>
  );
}

export default App;
