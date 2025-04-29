import React from 'react';
import FormContacto from '../Components/Form';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../Css/Contacto.css';

export const Contacto = () => {
    return (
        <main className="contacto-main">
            <div className="contacto-card">
                <h1 className="contacto-titulo">¡Hablemos!</h1>
                <p className="contacto-subtitulo">
                    Estoy siempre interesado en nuevos proyectos y oportunidades.
                    No dudes en contactarme para cualquier consulta.
                </p>
                
                <FormContacto />
                
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
        </main>
    );
};
