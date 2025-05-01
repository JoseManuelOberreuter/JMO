import React from 'react';
import { HeroBanner } from '../Components/HeroBanner';
import { Link } from 'react-router-dom';


export const Inicio = () => {    
    return (
        <main>
            <HeroBanner />
            
            {/* Sección CTA para cotización */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-title">¿Necesitas una página web profesional?</h2>
                    <p className="cta-description">
                        Diseño y desarrollo sitios web a medida que destacan tu marca y conectan con tu audiencia.
                        Desde landing pages hasta aplicaciones web completas, transformo tus ideas en experiencias digitales excepcionales.
                    </p>
                    <div className="cta-features">
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span className="feature-text">Diseño moderno y responsive</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span className="feature-text">Optimización para buscadores</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span className="feature-text">Rendimiento de alta velocidad</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span className="feature-text">Experiencia de usuario intuitiva</span>
                        </div>
                    </div>
                    <div className="cta-buttons">
                        <Link to="/contacto" className="btn-primary">Solicitar Cotización</Link>
                        <Link to="/portfolio" className="btn-secondary">Ver Proyectos</Link>
                    </div>
                </div>
            </section>
        </main>
    )
} 