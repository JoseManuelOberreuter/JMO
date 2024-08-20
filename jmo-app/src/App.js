import React, { useEffect } from 'react';
import { useLocation , Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { MainPortafolios } from './Components/ProyectPortfolio';
import { Thanks } from './Components/Thanks';
import { ArchivosPythos, ArchivosMetodosAgiles, ArchivosIA } from './Components/SideBar'
import { PostPython4, PostPython3, PostPython1, PostPython2, PostScrum, PostMidjourney, PostRevolucionIA } from './Components/Posts'
import { MicrosoftIgniteAzureML2 } from './Components/posts/Microsoft_IgniteAzureML2'
// import {PostMicrosoftIA900} from './Components/posts/Post_IA900_1'
// import {MicrosoftIgniteAzureML1} from './Components/posts/Microsoft_IgniteAzureML1'

import { Inicio } from './Pages/Inicio'
import { Contacto } from './Pages/Contacto'
import { AboutMe } from './Pages/AboutMe'
import { Portfolio } from './Pages/Portfolio'
import { Blog } from './Pages/Blog'


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
          <Route path="/blog" element={<Blog />} />

          {/* <Route path="/Thanks" element={<Thanks/>} />
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
          <Route path="/Prueba" element={<MicrosoftIgniteAzureML2/>} /> */}
          
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
