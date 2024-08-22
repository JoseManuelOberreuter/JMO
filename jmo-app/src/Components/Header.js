import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Css/Header.css'; 

export const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container header-custom">
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav ${menuOpen ? 'show' : ''}`}>
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link px-2 fs-5 ${activeLink === '/' ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/blog" 
            className={`nav-link px-2 fs-5 ${activeLink === '/blog' ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/portfolio" 
            className={`nav-link px-2 fs-5 ${activeLink === '/portfolio' ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            Portafolio
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/about" 
            className={`nav-link px-2 fs-5 ${activeLink === '/about' ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            Acerca de Mí
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/contacto" 
            className={`nav-link px-2 fs-5 ${activeLink === '/contacto' ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            Contactame
          </Link>
        </li>
      </ul>
    </header>
  );
};
