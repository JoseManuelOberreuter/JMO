import React from 'react';
import { Helmet } from 'react-helmet';
import FormContacto from '../Components/Form';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../Css/Contacto.css';

export const Contacto = () => {
    return (
        <>
            <Helmet>
                <title>Contacta con JMO | Desarrollador Web Freelance | Diseño Web Profesional</title>
                <meta name="description" content="¿Necesitas una página web profesional? Contáctame para crear tu sitio web personalizado. Ofrezco servicios de desarrollo web, diseño responsive y optimización SEO para hacer crecer tu negocio online." />
                <meta name="keywords" content="contacto desarrollador web, contratar programador freelance, desarrollo web profesional, diseño web personalizado, presupuesto página web, servicios desarrollo web" />
                <meta property="og:title" content="Contacta con JMO | Desarrollador Web Freelance" />
                <meta property="og:description" content="Solicita una consulta gratuita para tu proyecto web. Desarrollo sitios web profesionales y modernos que ayudan a tu negocio a destacar en línea." />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://jmocode.com/contacto" />
            </Helmet>
            <main className="contacto-main">
                <div className="contacto-card">
                    <div className="contacto-content">
                        <h1 className="contacto-titulo">¡Hablemos de tu Proyecto Web!</h1>
                        <p className="contacto-subtitulo">
                            ¿Buscas un desarrollador web profesional para tu proyecto? 
                            Estoy aquí para ayudarte a crear una presencia online exitosa. 
                            Contáctame para una consulta gratuita y convierte tus ideas en realidad.
                        </p>
                        
                        <div className="contact-info">
                            <h3>También puedes encontrarme en:</h3>
                            <div className="social-links">
                                <a 
                                    href="https://github.com/JoseManuelOberreuter" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="GitHub Profile"
                                >
                                    <FaGithub />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/jos%C3%A9-manuel-oberreuter-492835225/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="LinkedIn Profile"
                                >
                                    <FaLinkedin />
                                </a>
                                <a 
                                    href="https://www.facebook.com/profile.php?id=100083188934596"
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    className="social-link"
                                    aria-label="Facebook Profile"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="https://www.instagram.com/jmo.developer/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Instagram Profile"
                                >
                                    <FaInstagram />
                                </a>
                                <a 
                                    href="mailto:jmo.programador@gmail.com"
                                    className="social-link"
                                    aria-label="Email Contact"
                                >
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contacto-form-section">
                        <h2>Solicita una consulta gratuita</h2>
                        <FormContacto />
                    </div>
                </div>
            </main>
        </>
    );
};
