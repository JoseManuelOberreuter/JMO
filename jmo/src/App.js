import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { Header } from './Components/Hedear';
import { MainPortafolios } from './Components/Portafolios';
import { MainAboutMe } from './Components/AboutMe';



import './App.css';
import   {
  LogoJmo,
  MainBlog,
  Footer

} from './Components/Componentes'


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

          {/* INDEX */}
          <Route path="/" element={<MainBlog />} />

          {/* BLOG  */}
          <Route path="/blog" element={<MainBlog />} />
+
          <Route path="/portfolio" element={<MainPortafolios/>} />
          
          <Route path="/about" element={<MainAboutMe/>} />

        </Routes>
        <LogoJmo />
        <Footer />
      </div>
    </Router>



  );
}

export default App;
