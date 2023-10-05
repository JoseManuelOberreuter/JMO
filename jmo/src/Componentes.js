import React from 'react';

import { 
  // PostIA,
  PostMicrosoftIa0,
  PostMicrosoftAI900
  
} from './Posts';




export const Header = () => {
  return (
    <header className="border-bottom lh-1 py-2 mb-2">
        <div className="row flex-nowrap justify-content-between align-items-center">
    
            <IconosRS />

            <div class="col-4 text-center">
                <h2>Blog de programación</h2>
            </div>

            <SearchBar />

        </div>
    </header>
  );
};

// HEADER CATEGORIAS NO MOSTRADO
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


// HEADEAR SOCIAL MEDIA ICONS 
export const IconosRS = () => {
  return (
    <div className="col-4 pt-1">
      <a target="_blank" href="https://github.com/JoseManuelOberreuter">
          <img className="ico_blog" src="/img/rs-logos/giticogrey.ico" alt="GitHub Icon" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/jos%C3%A9-manuel-oberreuter-492835225/">
          <img className="ico_blog" src="/img/rs-logos/linkicogrey.ico" alt="Linkedin Icon" />
      </a>
      <a target="_blank" href="https://www.instagram.com/jmo.developer/">
          <img className="ico_blog" src="/img/rs-logos/instaicogrey.ico" alt="Linkedin Icon" />
      </a>
      <a target="_blank" href="https://www.facebook.com/profile.php?id=100083188934596">
          <img className="ico_blog" src="/img/rs-logos/fbicogrey.ico" alt="Linkedin Icon" />
      </a>
      <a target="_blank" href="https://twitter.com/jmo_developer">
          <img className="ico_blog" src="/img/rs-logos/twitericogrey.ico" alt="Linkedin Icon" />
      </a>
      <a target="_blank" href="https://www.youtube.com/channel/UCi1uX_qrjLD_pG-GNfho7dA ">
          <img className="ico_blog" src="/img/rs-logos/youtubeicogrey.ico" alt="Linkedin Icon" />
      </a>
    </div>
  );
};


// HEADEAR SEARCH BAR
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



// STICKY LOGO
export const LogoJmo = ()  => {
  return (
    
    <div className="col-4 pt-1">
          <img className="jmo_logo position-fixed" src="/img/ico-jmo/ico_jmo_fondoCirculo.ico" alt="GitHub Icon" />
    </div>

  );
};


// MAIN CONTENT 
export const Main = () => {
  return (
    <main>

        {/* <MainPost/>

        <SecondaryPost /> */}

      <div class="row g-5">


        {/*
        POSTS 

         <PostIA />
         <PostMicrosoftIa0 />
         
          */}

          

          <PostMicrosoftAI900/>



        <Sidebar />


      </div>



    </main>
  )
}



export const Sidebar = () => {
  return(
    <div class="col-md-4 ">

      <div class="sticky-top ">
        <div class="p-4 mb-3 bg-body-tertiary rounded">
          <h4 class="fst-italic">Sobre el blog:</h4>
          <p class="mb-0"> Dedicado a la difusión de información con fines educativos sobre programación. Aquí encontrarás una amplia variedad de temas relacionados con la programación y la tecnología, desde los conceptos básicos hasta las últimas tendencias.</p>
        </div>

        <div class="p-4">
          <h4 class="fst-italic">Archivos</h4>
          <ol class="list-unstyled mb-0">
            <li><a href="/html/blog_prox.html">Python</a></li>
            <li><a href="/html/blog_prox.html">Html</a></li>
            <li><a href="/html/blog_prox.html">Javascript</a></li>
            <li><a href="/html/blog_prox.html">Azure</a></li>
            <li><a href="/html/blog_prox.html">Sql</a></li>
            <li><a href="/html/blog_prox.html">Bootstrap</a></li>
          </ol>
        </div>


      </div>


    </div>
  );
}


// HERO BANER

export const MainPost = () => {
  return (
    <div class="p-4 p-md-4 mb-2 rounded text-bg-dark " id="blog_hero">
      <div class="col-md-6 px-0 ">
        <h1 class="display-4 "> <b>La revolución de la inteligencia artificial</b></h1>
        <p class="lead my-3">la inteligencia artificial está transformando la forma en que interactuamos con la tecnología y el mundo que nos rodea.</p>
        <p class="lead mb-0"><a href="/html/blog/revolucion_ia.html" class="text-white fw-bold">Seguir leyendo</a></p>
      </div>
    </div>

  );
}

export const SecondaryPost = () => {
  return (

    <div class="row mb-2 ">
      

        <ScrumCard />

        <MidjourneyCard />


    </div>

  );
}


// CARDS

export const ScrumCard = () => {
  return(
    <div class="col-md-6">
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
          <image href="/img/img-articles/scrum_blog.png" class="img_articulo" width="100%" height="100%"  />
        </svg>
      </div>
    </div>
  </div>
  );
};



export const MidjourneyCard = () => {
  return (
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Ingeniería de prompt</strong>
          <h3 class="mb-0 h4">El futuro de la creación de imágenes: Una mirada a Midjourney.</h3>
          <div class="mb-1 text-body-secondary">13 Junio</div>
          <p class="card-text mb-auto">La IA de Midjourney puede generar imágenes sorprendentes y visualmente impactantes. En este post veremos cómo aprovechar esta herramienta.</p>
          <a href="/html/blog/midjourney1.html" class="stretched-link">Seguir leyendo</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img px-3"  width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Midjourney</title>
            <image href="/img/img-articles/mj_portada_art.png" class="img_articulo" width="100%" height="100%"  />
          </svg>
        </div>
      </  div>
    </div>
  )
}




// PREVIEW DE POST 

export const PreviewRecentPosts = () => {
  return(
    <div class="col-md-8 ">
          
      <h3 class="pb-1 mb-4 border-bottom h4">
        Publicaciones recientes:
      </h3>

      {/* PREVIEW DE ARTICULOS*/}

      <PreviewPython2 />

      <PreviewPython1 />

      <PreviewSrcum1 />

      <PreviewMj1 />

      <PreviewIa1 />



    </div>
  )
}
 
export const PreviewPython4 = () => {
  return(
    <div>
        <article className="text-justify border-bottom pb-2 my-2">
          <h2>Listas, tuplas, conjuntos y diccionarios de Python</h2>
          <p class="blog-post-meta">Julio 3</p>
          <p>En el mundo de la programación, las estructuras de datos son fundamentales para organizar y manipular información de manera eficiente. Python, como un lenguaje de programación versátil y popular, proporciona varias estructuras de datos incorporadas que son ampliamente utilizadas en el desarrollo de aplicaciones. En este artículo, exploraremos las listas, tuplas, conjuntos y diccionarios en Python, y discutiremos cómo aprovechar al máximo cada una de ellas en nuestros proyectos. Además, proporcionaremos ejemplos de código prácticos para ilustrar su uso.</p>
          <p>Cada una de estas estructuras tiene sus propias características y se utiliza en diferentes situaciones. Las listas nos permiten almacenar elementos ordenados y modificarlos fácilmente, las tuplas son inmutables y útiles cuando queremos asegurarnos de que los datos no cambien, los conjuntos son ideales para almacenar elementos únicos sin importar el orden, y los diccionarios nos permiten asociar valores con claves para acceder a ellos eficientemente.</p>
          <a href="/html/blog/python4.html">Seguir leyendo...</a>
        </article>
    </div>
  )
}




export const PreviewPython3 = () => {
  return(
    <div>
        <article className="text-justify border-bottom pb-2 my-2">
          <h2>Estructuras de control de Python: condicionales y bucles</h2>
          <p class="blog-post-meta">Junio 30</p>


          <p>En el mundo de la programación, las estructuras de control desempeñan un papel fundamental al permitirnos controlar el flujo de ejecución de un programa. Dos de las estructuras de control más utilizadas son las condicionales y los bucles. Estas herramientas nos permiten tomar decisiones y repetir acciones en función de ciertas condiciones, lo que a su vez nos brinda mayor flexibilidad y poder en el desarrollo de software.</p>
          <p>Las estructuras de control condicionales nos permiten ejecutar un bloque de código si se cumple una condición determinada. En Python, esto se logra utilizando la declaración if.</p>
          <p>Los bucles nos permiten repetir un bloque de código varias veces. Esto es especialmente útil cuando queremos realizar una tarea similar varias veces o cuando necesitamos recorrer una colección de elementos, como una lista o un conjunto de datos.</p>

          <a href="/html/blog/python3.html">Seguir leyendo...</a>
        </article>
    </div>
  )
}



export const PreviewPython2 = () => {
  return(
    <div>
        <article className="text-justify border-bottom pb-2 my-2">
          <h2>Variables, Tipos de Datos y Operaciones Básicas en Python</h2>
          <p class="blog-post-meta">Junio 27</p>


          <p>Python es un lenguaje de programación ampliamente utilizado y apreciado por su sencillez y legibilidad. Es ideal tanto para principiantes como para programadores experimentados debido a su enfoque intuitivo y su amplia gama de aplicaciones. Una de las bases fundamentales de la programación en Python es comprender las variables, los tipos de datos y las operaciones básicas. En este artículo, exploraremos estos conceptos clave para ayudarte a dar tus primeros pasos en Python.</p>
          <p>En Python, las variables se utilizan para almacenar valores. Puedes pensar en ellas como contenedores que mantienen información que puede cambiar a lo largo del programa. Para crear una variable en Python, solo necesitas asignarle un nombre y un valor utilizando el operador de asignación "=".</p>

          <a href="/html/blog/python2.html">Seguir leyendo...</a>
        </article>
    </div>
  )
}



export const PreviewPython1 = () => {
  return(
    <div>
        <article className="text-justify border-bottom pb-2 my-2">
          <h2>Introducción a Python y su entorno de desarrollo</h2>
          <p class="blog-post-meta">Junio 26</p>
          <p>Python se ha convertido en uno de los lenguajes de programación más populares y versátiles del mundo. Con su sintaxis simple y legible, es ideal tanto para principiantes como para expertos en programación. Si estás interesado en aprender Python y aprovechar todo su potencial, es importante comprender no solo el lenguaje en sí, sino también el entorno de desarrollo adecuado para trabajar de manera eficiente y productiva.</p>
          <p>En este artículo, te introduciré al fascinante mundo de Python y te mostraré cómo configurar tu entorno de desarrollo para comenzar a programar </p>
          <a href="/html/blog/python1.html">Seguir leyendo...</a>
        </article>
    </div>
  )
}



export const PreviewSrcum1 = () => {
  return(
    <div>
        <article className="text-justify border-bottom pb-2 my-2">
          <h2>Scrum: Un marco de trabajo para el desarrollo de software</h2>
          <p class="blog-post-meta">Junio 23</p>
          <p>En un mundo en constante evolución, la tecnología continúa abriendo nuevas puertas y posibilidades en todas las áreas de nuestra vida. Una de esas áreas es la creación de imágenes, y una inteligencia artificial en particular ha estado captando la atención de artistas, diseñadores, creadores de contenido y programadores por igual : <b>Midjourney</b>.</p>
          <p>La IA de Midjourney se basa en algoritmos de aprendizaje profundo, que han sido entrenados con una amplia variedad de datos visuales y estéticos. Esto permite a Midjourney generar imágenes sorprendentes y visualmente impactantes que desafían las convenciones tradicionales y empujan los límites de lo posible. Desde paisajes surrealistas hasta retratos abstractos, <b>Midjourney</b> es capaz de crear obras de arte únicas.</p>
          <p>No debemos olvidar que, Midjourney es solo una inteligencia artificial que <b>analiza, observa y copia imágenes </b> de los artistas de todo el mundo y de todas las épocas. A través de su capacidad de aprendizaje profundo, Midjourney analiza y absorbe las obras maestras creadas por los grandes artistas de la historia, desentrañando sus técnicas y estilos únicos.</p>
          <a href="/html/blog/scrum.html">Seguir leyendo...</a>
        </article>
    </div>
  )
}


export const PreviewMj1 = () => {
  return(
    <div>
        <article className="text-justify border-bottom pb-2 my-2">
          <h2>El futuro de la creación de imágenes: Una mirada a Midjourney</h2>
          <p class="blog-post-meta">Junio 15</p>
          <p>En un mundo en constante evolución, la tecnología continúa abriendo nuevas puertas y posibilidades en todas las áreas de nuestra vida. Una de esas áreas es la creación de imágenes, y una inteligencia artificial en particular ha estado captando la atención de artistas, diseñadores, creadores de contenido y programadores por igual : <b>Midjourney</b>.</p>
          <p>La IA de Midjourney se basa en algoritmos de aprendizaje profundo, que han sido entrenados con una amplia variedad de datos visuales y estéticos. Esto permite a Midjourney generar imágenes sorprendentes y visualmente impactantes que desafían las convenciones tradicionales y empujan los límites de lo posible. Desde paisajes surrealistas hasta retratos abstractos, <b>Midjourney</b> es capaz de crear obras de arte únicas.</p>
          <p>No debemos olvidar que, Midjourney es solo una inteligencia artificial que <b>analiza, observa y copia imágenes </b> de los artistas de todo el mundo y de todas las épocas. A través de su capacidad de aprendizaje profundo, Midjourney analiza y absorbe las obras maestras creadas por los grandes artistas de la historia, desentrañando sus técnicas y estilos únicos.</p>
          <a href="/html/blog/midjourney1.html">Seguir leyendo...</a>
        </article>
    </div>
  )
}

export const PreviewIa1 = () => {
  return(
    <div>
      <article className="text-justify pb-2 my-2">

        <h2>La revolución de la inteligencia artificial</h2>
        <p className="blog-post-meta">Mayo 23</p>
        <p>
          La inteligencia artificial (IA) ha emergido como una de las tecnologías más disruptivas de nuestro tiempo, transformando rápidamente la forma en que vivimos y trabajamos. Con avances significativos en áreas como el aprendizaje automático, el procesamiento del lenguaje natural y la visión por computadora, la IA está desencadenando una revolución en diversas industrias, desde la atención médica y la manufactura hasta el transporte y el comercio minorista. En este artículo, exploraremos cómo la inteligencia artificial está redefiniendo nuestro mundo y cómo estas innovaciones están impulsando el futuro.
        </p>
        
        <p>
          La inteligencia artificial está superando los límites de lo que era considerado posible en el pasado. Algoritmos complejos y modelos de IA están permitiendo avances en campos como el reconocimiento de voz y la comprensión del lenguaje natural, lo que ha llevado al desarrollo de asistentes virtuales y chatbots capaces de interactuar con los usuarios de manera más natural y efectiva. Estas tecnologías están revolucionando la forma en que nos comunicamos y accedemos a la información, facilitando tareas cotidianas y mejorando la experiencia del usuario en múltiples plataformas y dispositivos.
        </p>
        
        <p>
          Con cada nueva aplicación y avance en inteligencia artificial, nuestro mundo se vuelve más conectado y sofisticado. La revolución de la IA no solo está impulsando mejoras en la eficiencia y la productividad, sino que también está creando oportunidades para el descubrimiento científico, la innovación tecnológica y el mejoramiento de la calidad de vida. A medida que nos sumergimos en este emocionante futuro impulsado por la inteligencia artificial, es crucial comprender y adaptarnos a los cambios que se avecinan, aprovechando las oportunidades que nos brinda y trabajando en conjunto para desarrollar y aplicar esta tecnología de manera ética y responsable.
        </p>
        <a href="/html/blog/revolucion_ia.html">Seguir leyendo...</a>
        
      </article>
    </div>
  )
}







export function Footer() {
  return (
    <div className="container border-top">
      <footer className="py-5">
        <div className="row ">


          <div className="col-6 col-md-2 mb-3">
            <h5>JMO</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Portafolio</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Sobre mi</a></li>
            </ul>
          </div>



          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Comunícate Conmigo</h5>
              <p>Por favor, ingresa tu consulta a continuación y te responderé a la brevedad.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Escríbeme un mensaje</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Escríbeme un mensaje" />
                <button className="btn btn-primary" type="button">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

