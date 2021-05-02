import React, { useState } from 'react';
import './App.css';
import HomeLayout from './Layout/HomeLayout';
import { TodoContextProvider } from './TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <div className='App'>
        <HomeLayout />
      </div>
    </TodoContextProvider>
  );
}

export default App;
