import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Portfolio.css';
import { ProyectPortfolio } from '../Components/ProyectPortfolio';

export const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1 className="portfolio-title">Mis Proyectos Destacados</h1>
        <p className="portfolio-subtitle">
          Explora mis proyectos más recientes y descubre cómo puedo ayudarte a crear tu próxima solución digital
        </p>
      </div>

      <div className="portfolio-container">
        <ProyectPortfolio />
      </div>

      <div className="portfolio-cta">
        <h2>¿Listo para comenzar tu proyecto?</h2>
        <p>Contáctame para discutir cómo puedo ayudarte a hacer realidad tus ideas</p>
        <Link to="/contacto" className="btn-primary">Solicitar Presupuesto</Link>
      </div>
    </div>
  );
};

