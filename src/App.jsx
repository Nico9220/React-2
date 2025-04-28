import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-grow'>
        <Routes>
          {/** Acá irían las rutas */}
        </Routes>
      </main>

      {/* Más adelante iría el Footer */}
    </div>
  );
}

export default App;

