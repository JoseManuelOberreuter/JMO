import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { Header } from './Components/Hedear';
import './App.css';
import   {
  LogoJmo,
  MainBlog,
  Footer

} from './Componentes'


/*
TO DO:
- MEJORAR LINKS 
- HACER ACERCA DE MI 
- HACER PORTAFOLIOS
*/



function App() {

  
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainBlog />} />
          <Route path="/blog" element={<MainBlog />} />
          {/* <Route path="/portfolio" element={} /> */}
          {/* <Route path="/about" element={} /> */}
        </Routes>
        <LogoJmo />
        <Footer />
      </div>
    </Router>



  );
}

export default App;
