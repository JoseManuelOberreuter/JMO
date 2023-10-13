import React, { useState } from 'react';

import './App.css';
import   {
  Header,
  LogoJmo,
  Main,
  ScrumCard,
  MidjourneyCard,
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

        <Main />

        <LogoJmo />


      </div>

      <Footer/>

    </div>
  );
}

export default App;
