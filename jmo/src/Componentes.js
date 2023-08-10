import React from 'react';

// HEADEAR
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
                <h2>BLOG JMO</h2>
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
      <a target="_blank" href="https://www.instagram.com/jmo.developer/">
          <img className="ico_blog" src="/img/LogosRedesSociales/instaicogrey.ico" alt="Linkedin Icon" />
      </a>
      <a target="_blank" href="https://www.facebook.com/profile.php?id=100083188934596">
          <img className="ico_blog" src="/img/LogosRedesSociales/fbicogrey.ico" alt="Linkedin Icon" />
      </a>
      <a target="_blank" href="https://twitter.com/jmo_developer">
          <img className="ico_blog" src="/img/LogosRedesSociales/twitericogrey.ico" alt="Linkedin Icon" />
      </a>
      <a target="_blank" href="https://www.youtube.com/channel/UCi1uX_qrjLD_pG-GNfho7dA ">
          <img className="ico_blog" src="/img/LogosRedesSociales/youtubeicogrey.ico" alt="Linkedin Icon" />
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















export const LogoJmo = ()  => {
  return (
    
    <div className="col-4 pt-1">
          <img className="jmo_logo" src="/img/IconosJmo/ico_jmo_fondoCirculo.ico" alt="GitHub Icon" />
    </div>

  );
};
















export const Main = () => {
  return (
    <main class="container">
      <MainPost/>
    </main>
  )
}

export const MainPost = () => {
  return (
    <div class="p-4 p-md-5 mx-5 mb-4 rounded text-bg-dark" id="blog_hero">
      <div class="col-md-6 px-0 ">
        <h1 class="display-4 "> <b>La revolución de la inteligencia artificial</b></h1>
        <p class="lead my-3">la inteligencia artificial está transformando la forma en que interactuamos con la tecnología y el mundo que nos rodea.</p>
        <p class="lead mb-0"><a href="/html/blog/revolucion_ia.html" class="text-white fw-bold">Seguir leyendo</a></p>
      </div>
    </div>

  );
}

export const MainPostSecondary = () => {
  return (

    <div class="row mb-2">
      <div class="col-md-6">

        <ScrumPost />

      </div>

      
      
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">Ingeniería de prompt</strong>
            <h3 class="mb-0 h4">El futuro de la creación de imágenes: Una mirada a Midjourney.</h3>
            <div class="mb-1 text-body-secondary">13 Junio</div>
            <p class="mb-auto">La IA de Midjourney puede generar imágenes sorprendentes y visualmente impactantes.</p>
            <a href="/html/blog/midjourney1.html" class="stretched-link">Seguir leyendo</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img px-3"  width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Planificación de campañas publicitarias</title>
              <image href="/img/imgblog/mj_portada_art.png" class="img_articulo" width="100%" height="100%"  />
            </svg>
          </div>
        </  div>
      </div>

    </div>

  );
}



export const ScrumPost = () => {
  return(
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative">
          
    <div class="col p-4 d-flex flex-column position-static">
      <strong class="d-inline-block mb-2 text-primary">Programación</strong>
      <h3 class="mb-0 h4">Scrum: Un marco de trabajo para el desarrollo de software</h3>
      <div class="mb-1 text-body-secondary">23 Junio</div>
      <p class="card-text mb-auto">En el mundo del desarrollo de software, seleccionar la metodología adecuada es crucial para aumentar las posibilidades de éxito de un proyecto.</p>
      <a href="/html/blog/scrum.html" class="stretched-link">Seguir leyendo</a>
    </div>

    <div class="col-auto d-none d-lg-block">
      <svg class="bd-placeholder-img px-3"  width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Scrum</title>
        <image href="/img/imgblog/scrum_blog.png" class="img_articulo" width="100%" height="100%"  />
      </svg>
    </div>


  </div>
  );
};

