import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Thanks } from './Components/Thanks';

import { Inicio } from './Pages/Inicio'
import { Contacto } from './Pages/Contacto'
import { AboutMe } from './Pages/AboutMe'
import { Portfolio } from './Pages/Portfolio'

import { ScrollToTop } from './Components/ScrollTop'
import { Footer } from './Components/Footer';
import { CursorEffect } from './Components/CursorEffect'


import './App.css';




function App() {  

  return (
    <div className="App">
      <CursorEffect />
      <ScrollToTop />
      <Header />

        <Routes>
          <Route path="/" element={<Inicio />} /> 
          <Route path='/contacto' element = {<Contacto />} />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/portfolio" element={<Portfolio/>} />          

        </Routes>

      <Footer />
    </div>
  );
}

export default App;
