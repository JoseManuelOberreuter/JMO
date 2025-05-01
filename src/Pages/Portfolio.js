import React from 'react';
import '../Css/Portfolio.css';
import { ProyectPortfolio } from '../Components/ProyectPortfolio';
import { CTASection } from '../Components/CTASection';

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

      <CTASection 
        title="¿Listo para comenzar tu proyecto?"
        description="¿Te gusta lo que ves? Contáctame para discutir cómo puedo ayudarte a hacer realidad tus ideas y crear una experiencia digital única para tu negocio."
        features={[
          "Enfoque personalizado en tus necesidades",
          "Comunicación clara durante todo el proceso",
          "Atención al detalle en cada etapa",
          "Soluciones optimizadas y escalables"
        ]}
        primaryButtonText="Solicitar Presupuesto"
      />
    </div>
  );
};

