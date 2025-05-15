import React, { useState, useEffect } from 'react';
import '../Css/HeroBanner.css'
import { useTypewriterEffect } from './TextEffect';
import { Button } from './Button';
import { Helmet } from 'react-helmet';

// Funcion para traer las variables de css
const getCSSVariable = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};
  
// Define the names for the typewriter effect
const nameWords = ['JMO', 'José Manuel Oberreuter'];

export const HeroBanner = () => {
  const fullStackColor = getCSSVariable('--color-pink'); // Using the color that was associated with 'FullStack'
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Configure typewriter effect for the name
  const typingSpeed = 100;
  const deletingSpeed = 70;
  const pauseDuration = 1500;
  
  const { text: nameText } = useTypewriterEffect(nameWords, typingSpeed, deletingSpeed, pauseDuration);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Calculate height based on the longest word
  const longestWord = nameWords.reduce((a, b) => a.length > b.length ? a : b, '');
  
  // Style for hero title container to maintain consistent height
  const heroTitleStyle = {
    height: '3.5rem', // Fixed height that accommodates the largest text
    display: 'flex',
    alignItems: 'center'
  };

  // Style for text container 
  const titleContainerStyle = {
    height: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    position: 'relative'
  };

  // Dynamic text styles
  const dynamicTextStyle = {
    display: 'inline-block'
  };

  // Cursor styles
  const cursorStyle = {
    display: 'inline-block',
    opacity: cursorVisible ? 1 : 0,
    marginLeft: '2px'
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="José Manuel Oberreuter - Desarrollador Fullstack. Creo experiencias digitales únicas y soluciones web personalizadas para tu negocio." />
        <meta name="keywords" content="desarrollador fullstack, desarrollo web, soluciones web, José Manuel Oberreuter, JMO" />
        <meta property="og:title" content="José Manuel Oberreuter - Desarrollador Fullstack" />
        <meta property="og:description" content="Creo experiencias digitales únicas y soluciones web personalizadas para tu negocio." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="José Manuel Oberreuter - Desarrollador Fullstack" />
        <meta name="twitter:description" content="Creo experiencias digitales únicas y soluciones web personalizadas para tu negocio." />
      </Helmet>
      <section className="hero-banner" aria-label="Presentación principal">
        <div className="hero-content">
          <header className="hero-text">
            <h1 className="hero-title" style={heroTitleStyle}>
              <div style={titleContainerStyle}>
                <span style={dynamicTextStyle} className="dynamic-text">{nameText}</span>
                <span className="cursor-effect" style={cursorStyle}>|</span>
              </div>
            </h1>
            <h2 className="hero-subtitle">
              Desarrollador <span style={{ color: fullStackColor }}>Fullstack</span>
            </h2>
            <p className="hero-description">
              Creo experiencias digitales únicas y soluciones web personalizadas para tu negocio.
              Transformo tus ideas en realidad con código limpio y diseño moderno.
            </p>
            <div className="hero-cta">
              <Button to="/contacto" variant="primary" className="btn-pulse" aria-label="Solicitar presupuesto">
                Solicitar Presupuesto
              </Button>
              <Button to="/portfolio" variant="secondary" aria-label="Ver proyectos">
                Ver Proyectos
              </Button>
            </div>
          </header>
          <aside className="hero-stats">
            <div className="stat-item">
              <span className="stat-number" aria-label="Más de 5 proyectos completados">5+</span>
              <span className="stat-label">Proyectos Completados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" aria-label="100 por ciento de clientes satisfechos">100%</span>
              <span className="stat-label">Clientes Satisfechos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" aria-label="Más de 3 años de experiencia">3+</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};



  