import React from 'react';
import FormContacto from '../Components/Form';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
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
                            href="https://github.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub />
                        </a>
                        <a 
                            href="https://linkedin.com/in/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin />
                        </a>
                        <a 
                            href="mailto:your.email@example.com"
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
