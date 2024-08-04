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
    <header className="lh-1 py-3 mb-2 header-custom">
      <div className="container">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link px-2 fs-5 ${activeLink === '/Inicio' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/Inicio')}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className={`nav-link px-2 fs-5 ${activeLink === '/blog' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/blog')}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className={`nav-link px-2 fs-5 ${activeLink === '/portfolio' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/portfolio')}
                >
                  Portafolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link px-2 fs-5 ${activeLink === '/about' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/about')}
                >
                  Acerca de Mí
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Contacto"
                  className={`nav-link px-2 fs-5 ${activeLink === '/Contacto' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/Contacto')}
                >
                  Contactame
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};