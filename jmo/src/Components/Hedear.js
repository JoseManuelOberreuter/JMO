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




// Definimos un array de objetos que contiene datos de tarjetas con títulos y IDs.
const cardsData = [
  { id: 1, title: 'La revolución de la inteligencia artificial', route: '/PostRevolucionIA' },
  { id: 2, title: 'El futuro de la creación de imágenes: Una mirada a Midjourney', route: '/PostMidjourney' },
  { id: 3, title: 'Scrum: Un marco de trabajo para el desarrollo de software', route: '/PostScrum' },
  { id: 4, title: 'Introducción a Python y su entorno de desarrollo', route: '/PostPython1' },
  { id: 5, title: 'Variables, Tipos de Datos y Operaciones Básicas en Python', route: '/PostPython2' },
  { id: 6, title: 'Estructuras de control de Python: condicionales y bucles', route: '/PostPython3' },
  { id: 7, title: 'Listas, tuplas, conjuntos y diccionarios de Python', route: '/PostPython4' },
];

// Definimos un componente de React llamado "SearchBar" que toma una función "onSearch" como argumento.
const SearchBar = ({ onSearch }) => {
  
  // Definimos estados y referencias para el componente.
  const [searchQuery, setSearchQuery] = useState(''); // Estado para la consulta de búsqueda.
  const [searchResults, setSearchResults] = useState([]); // Estado para los resultados de la búsqueda.
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Estado para controlar la visibilidad de la lista desplegable.
  const searchBarRef = useRef(null); // Referencia para el elemento de entrada de búsqueda.

  // Función que maneja cambios en la entrada de búsqueda.
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Realizamos la búsqueda y actualizamos los resultados y la visibilidad de la lista desplegable.
    const results = query ? performSearch(query) : [];
    setSearchResults(results);
    setIsDropdownVisible(results.length > 0);
  };

  // Función que realiza la búsqueda en los datos de las tarjetas.
  const performSearch = (query) => {
    return cardsData.filter((card) => card.title.toLowerCase().includes(query.toLowerCase()));
  };

  const clearSearchResults = () => {
    setSearchQuery(''); // Borra el campo de búsqueda
    setSearchResults([]); // Borra los resultados
    setIsDropdownVisible(false); // Oculta la lista desplegable
  };

  // Calculamos el ancho del componente de búsqueda.
  const searchBarWidth = searchBarRef.current ? searchBarRef.current.offsetWidth : 'auto';

  return (
    // Componente de formulario de búsqueda con una entrada de texto y una lista desplegable.
    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 position-relative" role="search" style={{ zIndex: 2 }}>
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
        className={`dropdown-menu ${isDropdownVisible ? 'show' : ''} position-absolute w-100 `}
      >
        {searchResults.map((result) => (
          // Renderizamos los resultados de búsqueda como elementos de lista desplegable.
          <li key={result.id} >
            {/* Utilizamos Link para redirigir a la página correspondiente al elemento seleccionado. */}
            <Link to={result.route} className="dropdown-item" onClick={clearSearchResults}>{result.title}</Link>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default SearchBar; // Exportamos el componente "SearchBar".
