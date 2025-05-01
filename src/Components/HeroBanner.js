import React from 'react';
import '../Css/HeroBanner.css'
import { useTypewriterEffect } from './TextEffect'
import { Button } from './Button';

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
  getCSSVariable('--color-primary'),
];

export const HeroBanner = () => {
  const typingSpeed = 75;
  const deletingSpeed = 100;
  const pauseDuration = 1000;

  const { text, currentWordIndex } = useTypewriterEffect(words, typingSpeed, deletingSpeed, pauseDuration);

  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            José Manuel Oberreuter
            <br />
            <span className="hero-subtitle">
              Desarrollador <span className="dynamic-text" style={{ color: colors[currentWordIndex] }}>{text}</span>
            </span>
          </h1>
          <p className="hero-description">
            Creo experiencias digitales únicas y soluciones web personalizadas para tu negocio.
            Transformo tus ideas en realidad con código limpio y diseño moderno.
          </p>
          <div className="hero-cta">
            <Button to="/contacto" variant="primary" className="btn-pulse">
              Solicitar Presupuesto
            </Button>
            <Button to="/portfolio" variant="secondary">
              Ver Proyectos
            </Button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Proyectos Completados</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Clientes Satisfechos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Años de Experiencia</span>
          </div>
        </div>
      </div>
    </div>
  );
};



  