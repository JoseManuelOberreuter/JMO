import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Css/Header.css'; 

export const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.nav') && !event.target.closest('.menu-icon')) {
        setMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className={`header-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">JMO</Link>
          </div>
          
          <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <ul className={`nav ${menuOpen ? 'show' : ''}`}>
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                onClick={() => {
                  setMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/portfolio" 
                className={`nav-link ${activeLink === '/portfolio' ? 'active' : ''}`}
                onClick={() => {
                  setMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
              >
                Portafolio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/experience" 
                className={`nav-link ${activeLink === '/experience' ? 'active' : ''}`}
                onClick={() => {
                  setMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
              >
                Experiencia
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contacto" 
                className={`nav-link ${activeLink === '/contacto' ? 'active' : ''}`}
                onClick={() => {
                  setMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
              >
                Contacto
              </Link>
            </li>
            <li className="nav-item cta-button">
              <Link 
                to="/contacto" 
                className="btn-primary"
                onClick={() => {
                  setMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
              >
                Solicitar Presupuesto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
