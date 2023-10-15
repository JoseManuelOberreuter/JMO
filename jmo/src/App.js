import React, { useState } from 'react';

import './App.css';
import   {
  Header,
  LogoJmo,
  MainBlog,
  Footer

} from './Componentes'


/*
TO DO:
- MEJORAR LINKS 
- HACER SOBRE MI 
- HACER PORTAFOLIOS
*/



function App() {

  
  return (
    <div>



      <div className="App">
        
        <Header />

        <MainBlog />

        <LogoJmo />


      </div>

      <Footer/>

    </div>
  );
}

export default App;
