import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Css/Header.css'; 

export const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="container header-custom">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className='nav-link px-2 fs-5' >
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className='nav-link px-2 fs-5' >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className='nav-link px-2 fs-5' >
              Portafolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className='nav-link px-2 fs-5' >
              Acerca de Mí
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contacto" className='nav-link px-2 fs-5' >
              Contactame
            </Link>
          </li>
        </ul>
    </header>
  );
};