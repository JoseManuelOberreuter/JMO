import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={primaryButtonLink} className="btn-primary">{primaryButtonText}</Link>
          <Link to={secondaryButtonLink} className="btn-secondary">{secondaryButtonText}</Link>
        </div>
      </div>
    </section>
  );
}; 