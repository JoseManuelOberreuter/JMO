import React from 'react';
import { HeroBanner } from '../Components/HeroBanner';
import { ProyectPortfolio } from '../Components/ProyectPortfolio';


export const Inicio = () => {    
    return (
        <main>
            <HeroBanner />
            
            {/* Sección de Proyectos Destacados */}
            <section className="featured-projects-section">
                <div className="container">
                    <h2 className="section-title">Proyectos Destacados</h2>
                    <p className="section-description">
                        Estos son algunos de mis proyectos más recientes. 
                        Cada proyecto representa mi compromiso con la calidad y la atención al detalle.
                    </p>
                    <ProyectPortfolio featured={true} limit={3} />
                    
                    <div className="section-cta">
                        <a href="/portfolio" className="btn-secondary">Ver todos los proyectos</a>
                    </div>
                </div>
            </section>
        </main>
    )
} 