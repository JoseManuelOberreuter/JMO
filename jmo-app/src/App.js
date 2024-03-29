// TO DO:
// - FIX BUG HEADEAR LINKS 
// - ADD MORE PROYECTS ON PYTHON 
// - POST NEW POSTS
// - UPDATE SIDEBAR, ADD LINK MICROSOFT




import React, { useEffect } from 'react';
import { HashRouter as Router,useLocation , Route, Routes } from 'react-router-dom';


import { Header } from './Components/Hedear';
import { MainPortafolios } from './Components/Portafolios';
import { MainAboutMe } from './Components/AboutMe';
import { Footer } from './Components/Footer';
import { Thanks } from './Components/Thanks';


import {
  ArchivosPythos,
  ArchivosMetodosAgiles,
  ArchivosIA,
} from './Components/SideBar'

// POSTS 
import {
  PostPython4,
  PostPython3,
  PostPython1,
  PostPython2,
  PostScrum,
  PostMidjourney,
  PostRevolucionIA,
} from './Components/Posts'

import {PostMicrosoftIA900} from './Components/posts/Post_IA900_1'
import {MicrosoftIgniteAzureML1} from './Components/posts/Microsoft_IgniteAzureML1'
import {MicrosoftIgniteAzureML2} from './Components/posts/Microsoft_IgniteAzureML2'

import './App.css';

import   {
  MainBlog,
} from './Components/HeroBanner'





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

          {/* THANKS*/}
          <Route path="/Thanks" element={<Thanks/>} />

          {/* POSTS ROUTES */}
          <Route path="/PostRevolucionIA" element={<PostRevolucionIA/>} />
          <Route path="/PostScrum" element={<PostScrum/>} />
          <Route path="/PostMidjourney" element={<PostMidjourney/>} />
          <Route path="/PostPython1" element={<PostPython1/>} />
          <Route path="/PostPython2" element={<PostPython2/>} />
          <Route path="/PostPython3" element={<PostPython3/>} />
          <Route path="/PostPython4" element={<PostPython4/>} />





          {/* SIDEBAR ROUTES */}
          <Route path="/ArchivosIA" element={<ArchivosIA />} />
          <Route path="/ArchivosMetodosAgiles" element={<ArchivosMetodosAgiles />} />
          <Route path="/ArchivosPythos" element={<ArchivosPythos />} />

          {/* Ruta de pueba */}
          <Route path="/Prueba" element={<MicrosoftIgniteAzureML2/>} />

        </Routes>
        <Footer />
      </div>
    </Router>



  );
}

export default App;
