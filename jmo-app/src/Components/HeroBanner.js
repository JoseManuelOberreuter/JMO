import React, { useState, useEffect } from 'react';
import '../Css/HeroBanner.css'

// MAIN CONTENT 
import { PreviewRecentPosts } from "./PreviewPost";
import { Sidebar } from "./SideBar";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import imgPortfolio from './img/portafolio/portafolio.png';
import imgAbout from './img/portafolio/AboutMe.png';

import { useTypewriterEffect } from './TextEffect'

// Funcion para traer las variables de css
const getCSSVariable = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

const words = [ 
  'Web',
  'FullStack', 
  'FrontEnd', 
  'BackEnd',
];

const colors = [
  getCSSVariable('--color-green'),
  getCSSVariable('--color-pink'),
  getCSSVariable('--color-mustard'),
  getCSSVariable('--color-blue'),
];

export const HeroBanner = () => {
  const typingSpeed = 150; // Tiempo en milisegundos
  const deletingSpeed = 100; // Tiempo en milisegundos
  const pauseDuration = 1000; // Tiempo en milisegundos

  const { text, currentWordIndex } = useTypewriterEffect(words, typingSpeed, deletingSpeed, pauseDuration);

  return (
    <div className="hero-banner">
      <div className="content">
        <h1>
          José Manuel Oberreuter
          <br />
          Programador <span className="dynamic-text" style={{ color: colors[currentWordIndex] }}>{text}</span>
        </h1>
        <div className="more-info">
          <p>Explora mi trabajo y trayectoria en tecnología</p>
        </div>
      </div>
    </div>
  );
};

export const MainBlog = () => {
  return (
    <main>
      <div>
          <div>
            <MainPost onSeguirLeyendoClick/>
            <SecondaryPost />
            <div className="row g-5">
              <PreviewRecentPosts />
              <Sidebar />
            </div>
          </div>
      </div>
    </main>
  );
};

// HERO BANER
const MainPost = () => {
  return (
      <div className="p-4 p-md-4 mb-2 rounded text-bg-dark " id="blog_hero">
        <div className="col-md-6 px-0 ">
          <h1 className="display-4 "><b>JMO Tech Blog: aprende y desarrolla conmigo.</b></h1>
          <p className="lead my-3">Acompáñame en un emocionante viaje de descubrimiento tecnológico e informático a través de mis publicaciones.</p>
          <ScrollLink to="publicaciones-recientes" smooth={true} duration={500} className="button-link">
            Publicaciones recientes
          </ScrollLink>
        </div>
      </div>
  );
}
  
export const SecondaryPost = () => {
  return (
    <div className="row mb-2 ">
        <Portafolio />
        <About /> 
    </div>
  );
}
  
// CARDS
export const Portafolio = () => {
  return(
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0 h4">Descubre mi Portafolio Profesional</h3>
          <div class="mb-1 text-body-secondary">Explora mis habilidades en desarrollo web y tecnología.</div>
          <p class="card-text mb-auto">En esta sección podrán conocer más acerca de mis habilidades, experiencia y pasiones en el mundo del desarrollo web y la tecnología.</p>
          <div>
            <Link to="/portfolio">Acerca de mi </Link>
          </div>
        </div>
        <div class="col-auto d-none d-lg-flex align-items-center justify-content-center px-3">
          <title>Portafolio</title>
          <img src={imgPortfolio} class="img_articulo rounded" width="200" height="200" alt="Imagen Portafolio JMO" />
        </div>
      </div>
    </div>
  );
};
  
export const About = () => {
  return (
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0 h4">Descubre Más Acerca de JMO</h3>
          <div class="mb-1 text-body-secondary">Mi nombre es José Manuel Oberreuter y soy desarrollador de software.</div>
          <p class="card-text mb-auto">Soy un estudiante en Ingeniería Informática, comprometido con el autoaprendizaje constante y la mejora de habilidades en programación.</p>
          <Link to="/about">Más información</Link>
        </div>
        <div class="col-auto d-none d-lg-flex align-items-center justify-content-center px-3">
          <title>About me</title>
          <img src={imgAbout} class="img_articulo rounded" width="200" height="200" alt="Imagen Inteligencia Artificial JMO" />
        </div>
      </div>
    </div>
  )
}
  


  