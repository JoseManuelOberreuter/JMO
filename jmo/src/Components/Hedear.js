import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="lh-1 py-2 mb-2 border-bottom">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li className="nav-item">
                <Link
                  to="/blog"
                  className={`nav-link px-2 fs-5 ${
                    activeLink === '/blog' ? 'text-black text-strong' : 'text-secondary'
                  }`}
                  onClick={() => handleLinkClick('/blog')}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className={`nav-link px-2 fs-5 ${
                    activeLink === '/portfolio' ? 'text-black text-strong' : 'text-secondary'
                  }`}
                  onClick={() => handleLinkClick('/portfolio')}
                >
                  Portafolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link px-2 fs-5 ${
                    activeLink === '/about' ? 'text-black text-strong' : 'text-secondary'
                  }`}
                  onClick={() => handleLinkClick('/about')}
                >
                  Acerca de Mí
                </Link>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
