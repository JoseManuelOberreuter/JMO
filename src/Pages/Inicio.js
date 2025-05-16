import React from 'react';
import { Helmet } from 'react-helmet';
import { HeroBanner } from '../Components/HeroBanner';
import { CTASection } from '../Components/CTASection';
import { Testimonios } from '../Components/Testimonios';
import '../Css/Inicio.css';

export const Inicio = () => {    
    return (
        <>
            <Helmet>
                <title>Desarrollo Web Profesional | Diseño de Páginas Web | JMO</title>
                <meta name="description" content="Desarrollador web freelance especializado en crear sitios web profesionales, modernos y optimizados. Ofrezco servicios de diseño web, desarrollo frontend y backend para pequeñas y medianas empresas." />
                <meta name="keywords" content="desarrollo web, diseño web, programador freelance, páginas web profesionales, desarrollo frontend, desarrollo backend, SEO, sitios web responsive" />
                <meta property="og:title" content="Desarrollo Web Profesional | JMO" />
                <meta property="og:description" content="Desarrollo sitios web profesionales y modernos que ayudan a tu negocio a destacar en línea. Contacta para una consulta gratuita." />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://jmocode.com" />
            </Helmet>
            <main>
                <div className="section-container">
                    <HeroBanner />
                </div>
                <div className="section-container">
                    <CTASection />
                </div>
                <div className="section-container">
                    <Testimonios />
                </div>
            </main>
        </>
    )
} 