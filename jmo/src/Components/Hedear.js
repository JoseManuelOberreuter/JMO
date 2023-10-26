import React, { useState, useEffect, useRef  } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { 
  CardMidjourney,
  CardPython1,
  CardPython2,
  CardPython3,
  CardPython4,
  CardRevolucionIA,
  CardScrum
} from './Cards';


export const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/'); // Establece el enlace activo en la ruta raíz por defecto

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  useEffect(() => {
    // Establece el enlace activo en la ruta raíz ("/") al iniciar la aplicación
    if (location.pathname === '/') {
      setActiveLink('/blog');
    }
  }, [location.pathname]);

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

            <SearchBar/>
          </div>
        </div>
      </div>
    </header>
  );
};


const cardsData = [
  { id: 1, title: 'La revolución de la inteligencia artificial' },
  { id: 2, title: 'El futuro de la creación de imágenes: Una mirada a Midjourney' },
  { id: 3, title: 'Scrum: Un marco de trabajo para el desarrollo de software' },
  { id: 4, title: 'Introducción a Python y su entorno de desarrollo' },
  { id: 5, title: 'Variables, Tipos de Datos y Operaciones Básicas en Python' },
  { id: 6, title: 'Estructuras de control de Python: condicionales y bucles' },
  { id: 7, title: 'Listas, tuplas, conjuntos y diccionarios de Python' },
];



const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchBarRef = useRef(null);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const results = query ? performSearch(query) : [];
    setSearchResults(results);
    setIsDropdownVisible(results.length > 0);
  };

  const performSearch = (query) => {
    return cardsData.filter((card) => card.title.toLowerCase().includes(query.toLowerCase()));
  };

  const searchBarWidth = searchBarRef.current ? searchBarRef.current.offsetWidth : 'auto';

  return (
    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 position-relative" role="search">
      <input
        type="search"
        className="form-control form-control-dark"
        placeholder="Search..."
        aria-label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        ref={searchBarRef}
      />
      <ul
        className={`dropdown-menu ${isDropdownVisible ? 'show' : ''} position-absolute start-0 w-100`}
      >
        {searchResults.map((result) => (
          <li key={result.id}><a className="dropdown-item" href="#">{result.title}</a></li>
        ))}
      </ul>
    </form>
  );
};

export default SearchBar;
