import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header';
import Consumo from './pages/Cartas';
import Footer from './Components/Footer/Footer';
import './i18n';
import Banner from './Components/Banner/Banner';
import Detalles from './pages/Detalles';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/404.jsx';
import Favoritos from './pages/Favoritos.jsx';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      
      <main className='flex-grow min-h-screen'>
        <Routes>
        <Route path="/" element={<Navigate to="/cartas" />} />
          <Route 
            path= "/cartas"
            element={
              <>
                <Banner />
                <Consumo />
              </>
            }
          />
          
          <Route path="/cartas/:id" element={<Detalles />} />
          <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<NotFound/>}/>
           
        </Routes>
      </main>
        
      <Footer />
    </div>
  );
}

export default App;

