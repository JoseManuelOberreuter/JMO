import React from 'react';

export const ContainerHeader = () => {
    return (
      <div className="container">
        <Header />
        <Categorias />
      </div>
    );
};

export const Header = () => {
  return (
    <header className="blog-header lh-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">

            <IconosRS />

            <div class="col-4 text-center">
                <h2>BLOG DE INFORMATICA</h2>
            </div>

            <SearchBar />

        </div>
    </header>
  );
};


export const Categorias = () => {
    return (
        <div className="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between">
                <a class="p-2 link-secondary" href="/html/blog_prox.html">Programación</a>
                <a class="p-2 link-secondary" href="/html/blog_prox.html">Computación en la nube</a>
                <a class="p-2 link-secondary" href="/html/blog_prox.html">Inteligencia artificial</a>
                <a class="p-2 link-secondary" href="/html/blog_prox.html">Softwares</a>
                <a class="p-2 link-secondary" href="/html/blog_prox.html">Ingeniería de propmt</a>
                <a class="p-2 link-secondary" href="/html/blog_prox.html">Tecnología</a>
            </nav>
        </div>
    );
};
  

// SOCIAL MEDIA ICONS DIRECTORY:  ./public/img/LosgosRedesSociales
export const IconosRS = () => {
  return (
    <div className="col-4 pt-1">
      <a target="_blank" href="https://github.com/JoseManuelOberreuter">
          <img className="ico_blog" src="/img/LogosRedesSociales/giticogrey.ico" alt="GitHub Icon" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/jos%C3%A9-manuel-oberreuter-492835225/">
          <img className="ico_blog" src="/img/LogosRedesSociales/linkicogrey.ico" alt="Linkedin Icon" />
      </a>
    </div>
  );
};










export const SearchBar = () => {
  const filterTitles = (value) => {
    // Aquí puedes implementar la lógica para filtrar títulos
  };

  return (
    <div className="col-4 d-flex justify-content-end align-items-center">
      <div className="search-container">
        <div className="menu d-block position-static pt-0 mx-0 rounded-3 overflow-hidden" data-bs-theme="light">
          <form className="d-flex">
            <input
              type="search"
              id="input_serch"
              className="form-control"
              autoComplete="off" // Cambiado a autoComplete en lugar de autocomplete
              placeholder="Buscar..."
              onInput={(event) => filterTitles(event.target.value)} // Cambiado oninput a onInput
            />
            <button type="submit" className="btn" id="ico_lupa">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mx-1"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </button>
          </form>
          <ul className="list-unstyled mb-0 dropdown-menu" id="dropdown-menu" style={{ display: 'none' }}></ul>
        </div>
      </div>
    </div>
  );
};


