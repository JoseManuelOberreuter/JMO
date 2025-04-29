import React from 'react';
import { Link } from 'react-router-dom';
import icofb from './img/ico/fbicogrey.ico'
import icogit from './img/ico/giticogrey.ico'
import icolink from './img/ico/linkicogrey.ico'
import icoig from './img/ico/instaicogrey.ico'
import '../Css/Footer.css';

export function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">JMO Developer</h3>
            <p className="footer-description">
              Creando experiencias digitales únicas y soluciones web personalizadas para tu negocio.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Servicios</h3>
            <ul className="footer-links">
              <li><Link to="/portfolio">Desarrollo Web</Link></li>
              <li><Link to="/portfolio">Aplicaciones Web</Link></li>
              <li><Link to="/portfolio">Diseño UI/UX</Link></li>
              <li><Link to="/portfolio">Consultoría</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contacto</h3>
            <ul className="footer-links">
              <li><Link to="/contacto">Solicitar Presupuesto</Link></li>
              <li><a href="tel:+56990569880">+56 990569880</a></li>
              <li><a href="mailto:jmo.programador@gmail.com">jmo.programador@gmail.com</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Redes Sociales</h3>
            <div className="social-links">
              <a target="_blank" rel="noreferrer" href="https://github.com/JoseManuelOberreuter">
                <img className="icono-rs" src={icogit} alt="GitHub Icon" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jos%C3%A9-manuel-oberreuter-492835225/">
                <img className="icono-rs" src={icolink} alt="Linkedin Icon" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jmo.developer/">
                <img className="icono-rs" src={icoig} alt="Instagram Icon" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100083188934596">
                <img className="icono-rs" src={icofb} alt="Facebook Icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JMO Developer. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
  

