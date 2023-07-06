import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.css';
import {HeaderBlog} from './App';
import {PostPrincipal} from './App';
import {PostColumna1} from './App';
import {PostColumna2} from './App';
import {ArticuloResumido1,ArticuloResumido2, ArticuloResumido3,ArticuloResumido4,ArticuloResumido5,ArticuloResumido6,ArticuloResumido7} from './App';
import {SobreBlog, Archivos} from './App';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <div>
    <HeaderBlog/>
    <main class="container">
      <PostPrincipal/>
      <div class="row mb-2">
        
        <PostColumna1/>
        <PostColumna2/>

      </div>

      <div class="row g-5">
        <div class="col-md-8 ">
          <h3 class="pb-4 mb-4 border-bottom h4">Publicaciones recientes</h3>
          <ArticuloResumido7/>
          <ArticuloResumido6/>
          <ArticuloResumido5/>
          <ArticuloResumido4/>
          <ArticuloResumido3/>
          <ArticuloResumido2/>
          <ArticuloResumido1/>

          {/* BARRA LATERAL */}
          <div class="col-md-4">
            <div class="position-sticky">

              <SobreBlog/>
              <Archivos/>

            </div>
          </div>
        </div>
      </div>
    </main>
  </div>


);


reportWebVitals();
