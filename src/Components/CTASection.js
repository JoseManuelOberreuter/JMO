import React from 'react';
import { Button } from './Button';
import '../Css/Proyects.css';

export const CTASection = ({ 
  title = "¿Necesitas una página web profesional?",
  description = "Diseño y desarrollo sitios web a medida que destacan tu marca y conectan con tu audiencia. Desde landing pages hasta aplicaciones web completas, transformo tus ideas en experiencias digitales excepcionales.",
  features = [
    "Diseño moderno y responsive",
    "Optimización para buscadores",
    "Rendimiento de alta velocidad",
    "Experiencia de usuario intuitiva"
  ],
  primaryButtonText = "Solicitar Cotización",
  primaryButtonLink = "/contacto",
  secondaryButtonText = "Ver Proyectos",
  secondaryButtonLink = "/portfolio"
}) => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-description">{description}</p>
        <div className="cta-features">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <span className="feature-icon">✓</span>
              <span className="feature-text">{feature}</span>
            </div>
          ))}
        </div>
        <div className="cta-buttons">
          <Button to={primaryButtonLink} variant="primary" className="btn-pulse">{primaryButtonText}</Button>
          <Button to={secondaryButtonLink} variant="secondary">{secondaryButtonText}</Button>
        </div>
      </div>
    </section>
  );
}; 