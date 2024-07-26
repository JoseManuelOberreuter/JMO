// TO DO:
// - FIX BUG HEADEAR LINKS 
// - ADD MORE PROYECTS ON PYTHON 
// - POST NEW POSTS
// - UPDATE SIDEBAR, ADD LINK MICROSOFT

import React, { useEffect } from 'react';
import { useLocation , Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { MainPortafolios } from './Components/Portafolios';
import { MainAboutMe } from './Components/AboutMe';
import { Footer } from './Components/Footer';
import { Thanks } from './Components/Thanks';
import { ArchivosPythos, ArchivosMetodosAgiles, ArchivosIA } from './Components/SideBar'
import { PostPython4, PostPython3, PostPython1, PostPython2, PostScrum, PostMidjourney, PostRevolucionIA } from './Components/Posts'
import { MicrosoftIgniteAzureML2 } from './Components/posts/Microsoft_IgniteAzureML2'
import { MainBlog, HeroBanner } from './Components/HeroBanner'
// import {PostMicrosoftIA900} from './Components/posts/Post_IA900_1'
// import {MicrosoftIgniteAzureML1} from './Components/posts/Microsoft_IgniteAzureML1'

import { Main } from './Pages/Main'
import { ScrollToTop } from './Components/ScrollTop'

import './App.css';
import './css/CursorEffect.css';



function App() {  

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorEffect = document.querySelector('.cursor-effect');
      if (cursorEffect) {
        cursorEffect.style.left = `${e.clientX}px`;
        cursorEffect.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
      <div className="App">
      <div className="cursor-effect"></div>
      <ScrollToTop />

      <Header />

        <Routes>
          <Route path="/" element={<Main />} /> 
          
          <Route path="/blog" element={<MainBlog />} />
          <Route path="/portfolio" element={<MainPortafolios/>} />
          <Route path="/about" element={<MainAboutMe/>} />
          <Route path="/Thanks" element={<Thanks/>} />
          <Route path="/PostRevolucionIA" element={<PostRevolucionIA/>} />
          <Route path="/PostScrum" element={<PostScrum/>} />
          <Route path="/PostMidjourney" element={<PostMidjourney/>} />
          <Route path="/PostPython1" element={<PostPython1/>} />
          <Route path="/PostPython2" element={<PostPython2/>} />
          <Route path="/PostPython3" element={<PostPython3/>} />
          <Route path="/PostPython4" element={<PostPython4/>} />
          <Route path="/ArchivosIA" element={<ArchivosIA />} />
          <Route path="/ArchivosMetodosAgiles" element={<ArchivosMetodosAgiles />} />
          <Route path="/ArchivosPythos" element={<ArchivosPythos />} />
          <Route path="/Prueba" element={<MicrosoftIgniteAzureML2/>} />
        </Routes>
      </div>
  );
}

export default App;
