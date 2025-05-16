import React from 'react';
import { Helmet } from 'react-helmet';
import '../Css/Portfolio.css';
import { ProyectPortfolio } from '../Components/ProyectPortfolio';
import { CTASection } from '../Components/CTASection';

export const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio de Desarrollo Web | Proyectos y Casos de Éxito | JMO</title>
        <meta name="description" content="Explora mi portfolio de desarrollo web profesional. Casos de éxito y proyectos personalizados para empresas. Desarrollo sitios web modernos, landing pages y aplicaciones web que generan resultados." />
        <meta name="keywords" content="portfolio desarrollo web, proyectos web, diseño web profesional, desarrollo frontend, desarrollo backend, landing pages, aplicaciones web, programador freelance" />
        <meta property="og:title" content="Portfolio de Desarrollo Web Profesional | JMO" />
        <meta property="og:description" content="Descubre cómo he ayudado a empresas a crecer online con sitios web profesionales y optimizados. Solicita una consulta gratuita para tu proyecto." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://jmocode.com/portfolio" />
      </Helmet>

      <main className="portfolio-page">
        <div className="portfolio-header">
          <h1 className="portfolio-title">
            Portfolio de Desarrollo Web
            <span className="accent-text"> Profesional</span>
          </h1>
          <p className="portfolio-subtitle">
            Desarrollo sitios web personalizados y optimizados que ayudan a las empresas a destacar en el mercado digital. Cada proyecto está diseñado para maximizar conversiones y generar resultados medibles.
          </p>
        </div>

        <div className="portfolio-container">
          <ProyectPortfolio />
        </div>

        <CTASection 
          title="¿Necesitas un sitio web que genere resultados?"
          description="Transformo ideas en sitios web profesionales que atraen clientes y generan ventas. Contáctame para una consulta gratuita y descubre cómo puedo ayudarte a destacar en el mundo digital."
          features={[
            "Diseño web profesional y personalizado",
            "Optimización SEO para mayor visibilidad",
            "Sitios web que convierten visitantes en clientes",
            "Soporte técnico continuo y mantenimiento"
          ]}
          primaryButtonText="Solicitar Consulta Gratuita"
        />
      </main>
    </>
  );
};
