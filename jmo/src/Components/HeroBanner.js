// MAIN CONTENT 
import { PreviewRecentPosts } from "./PreviewPost";
import { Sidebar } from "./SideBar";
import { Link } from "react-router-dom";

export const MainBlog = () => {


    return (
      <main>
        <div>
  
            <div>
              <MainPost onSeguirLeyendoClick/>
              <SecondaryPost />
              <div className="row g-5">
                <PreviewRecentPosts />
                <Sidebar />
              </div>
            </div>
        
        </div>
      </main>
    );
  };
  
  
  
  
  
  // HERO BANER
  const MainPost = () => {
  
    
  
    return (
      
  
        <div class="p-4 p-md-4 mb-2 rounded text-bg-dark " id="blog_hero">
          <div class="col-md-6 px-0 ">
            <h1 class="display-4 "><b>Blog JMO: aprende y desarrolla conmigo.</b></h1>
            <p class="lead my-3">Acompáñame en un emocionante viaje de descubrimiento tecnológico e informático a través de mis publicaciones.</p>
            <a href="#publicaciones-recientes" >
              Publicaciones recientes
            </a>
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
          <h3 class="mb-0 h4">Scrum: Un marco de trabajo para el desarrollo de software</h3>
          <div class="mb-1 text-body-secondary">23 Junio</div>
          <p class="card-text mb-auto">En el mundo del desarrollo de software, seleccionar la metodología adecuada es crucial para aumentar las posibilidades de éxito de un proyecto.</p>
          <div>
            <Link to="/PostScrum">Seguir leyendo</Link>
          </div>
          
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
            <h3 class="mb-0 h4">El futuro de la creación de imágenes: Una mirada a Midjourney.</h3>
            <div class="mb-1 text-body-secondary">13 Junio</div>
            <p class="card-text mb-auto">La IA de Midjourney puede generar imágenes sorprendentes y visualmente impactantes. En este post veremos cómo aprovechar esta herramienta.</p>
            <div>
              <Link to="/PostMidjourney" className='button-link'>Seguir leyendo</Link>
            </div>
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
  