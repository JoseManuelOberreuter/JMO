import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
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
                <FaGithub className="icono-rs" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jos%C3%A9-manuel-oberreuter-492835225/">
                <FaLinkedin className="icono-rs" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jmo.developer/">
                <FaInstagram className="icono-rs" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100083188934596">
                <FaFacebook className="icono-rs" />
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
  

