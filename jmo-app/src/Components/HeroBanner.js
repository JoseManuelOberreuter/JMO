import React from 'react';
import '../Css/HeroBanner.css'

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
  const typingSpeed = 75; // Tiempo en milisegundos
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



  