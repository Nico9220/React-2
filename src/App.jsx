import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header';
import { Routes } from 'react-router-dom';
import Consumo from './pages/Cartas';
import Footer from './Components/Footer/Footer';
import './i18n';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Banner />
      <Consumo />
      <main className='flex-grow'>
        <Routes>
          {/** Acá irían las rutas */}
        </Routes>
      </main>
        
      <Footer />
    </div>
  );
}

export default App;

