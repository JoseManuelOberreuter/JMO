import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Thanks } from './Components/Thanks';
import { WhatsAppButton } from './Components/WhatsAppButton';

import { Inicio } from './Pages/Inicio'
import { Contacto } from './Pages/Contacto'
import { Experience } from './Pages/Experience'
import { Portfolio } from './Pages/Portfolio'

import { ScrollToTop } from './Components/ScrollTop'
import { Footer } from './Components/Footer';

import './App.css';

function App() {  
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<Inicio />} /> 
        <Route path='/contacto' element={<Contacto />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />          
        <Route path="/thanks" element={<Thanks />} />          
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
