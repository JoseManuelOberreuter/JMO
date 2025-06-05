import React from 'react';
import '../Css/HeroBanner.css';
import { Button } from './Button';
import logo from '../Assets/logo.png';
import { Helmet } from 'react-helmet';

export const HeroBanner = () => {
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
        <div className="hero-content hero-banner-flex">
          {/* Columna izquierda: texto */}
          <div className="hero-text hero-banner-left">
            <h1 className="hero-title" style={{marginBottom: '0.5rem'}}>Hola! Soy</h1>
            <h2 className="hero-title" style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem'}}>José Manuel Oberreuter</h2>
            <h3 className="hero-subtitle" style={{letterSpacing: '1px', color: 'var(--color-pink)', fontWeight: 600, marginBottom: '1.2rem'}}>DESARROLLADOR WEB FULLSTACK</h3>
            <p className="hero-description" style={{maxWidth: 500}}>
              Estudiante de Ingeniería Informática y programador enfocado al Desarrollo Web Fullstack. Como persona amante a los desafíos intuitivos y estéticamente agradables, busco crear proyectos que brinden la mejor experiencia para el usuario.
            </p>
            <div className="hero-cta" style={{gap: '1rem', marginTop: '2rem'}}>
              <Button 
                to="/portfolio" 
                variant="secondary" 
                aria-label="Ver Portafolio" 
                style={{minWidth: 150}}
              >
                VER PORTAFOLIO
              </Button>
              <Button 
                to="/contacto" 
                variant="primary" 
                className="btn-pulse"
                aria-label="Solicitar Presupuesto" 
                style={{minWidth: 150}}
              >
                SOLICITAR PRESUPUESTO
              </Button>
            </div>
          </div>
          {/* Columna derecha: imagen */}
          <div className="hero-banner-right">
            <div className="hero-banner-img-bg">
              <img 
                src={logo} 
                alt="Logo JMO" 
                className="hero-banner-img" 
                style={{
                  width: '220px', 
                  height: '220px', 
                  objectFit: 'contain',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)'
                }} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



  