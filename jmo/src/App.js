import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { Header } from './Components/Hedear';
import { MainPortafolios } from './Components/Portafolios';
import { MainAboutMe } from './Components/AboutMe';
import { Footer } from './Components/Footer';

import {
  PostRevolucionIA,
  PostScrum,
} from './Components/Posts'

import './App.css';
import   {
  LogoJmo,
  MainBlog,
} from './Components/Componentes'


/*
TO DO:
- LINKS TO POSTS
- LINKS TO ARCHIVOS 
- LINKS TO SEGUIR LEYENDO

- ADD ANIMATION TO THE LOGO
- ADD ESTUDIOS IN ABOUT ME
- ADD PROYECTS TO PORTFOLIOS
- IMPLEMENT BACKEND TO SERCHBAR 
- DO BUILD ON GITHUB 
- DO DEPLOY ON AZURE
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
          {/* PORTAFOLIOS */}
          <Route path="/portfolio" element={<MainPortafolios/>} />
          
          {/* ABOUT ME */}
          <Route path="/about" element={<MainAboutMe/>} />

          {/* POSTS ROUTES */}
          <Route path="/PostRevolucionIA" element={<PostRevolucionIA/>} />

          <Route path="/PostScrum" element={<PostScrum/>} />


          

        </Routes>
        <LogoJmo />
        <Footer />
      </div>
    </Router>



  );
}

export default App;
