import React, { useEffect } from 'react';
import { BrowserRouter as Router,useLocation, Link , Route, Routes } from 'react-router-dom';


import { Header } from './Components/Hedear';
import { MainPortafolios } from './Components/Portafolios';
import { MainAboutMe } from './Components/AboutMe';
import { Footer } from './Components/Footer';
import { LogoJmo } from './Components/Logo';



import {
  PostPython1,
  PostPython2,
  PostScrum,
  PostMidjourney,
  PostRevolucionIA,
} from './Components/Posts'

import './App.css';

import   {
  MainBlog,
} from './Components/HeroBanner'




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
- FIX BUG OF HEADER BOLD WHEN THE USER CLIC ON THE LOGO
*/

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



function App() {

  
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop /> 
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
          <Route path="/PostMidjourney" element={<PostMidjourney/>} />
          <Route path="/PostPython1" element={<PostPython1/>} />
          <Route path="/PostPython2" element={<PostPython2/>} />

          

        </Routes>
        <LogoJmo />
        <Footer />
      </div>
    </Router>



  );
}

export default App;
