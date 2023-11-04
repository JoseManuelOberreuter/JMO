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
      
  
        <div className="p-4 p-md-4 mb-2 rounded text-bg-dark " id="blog_hero">
          <div className="col-md-6 px-0 ">
            <h1 className="display-4 "><b>JMO Tech Blog: aprende y desarrolla conmigo.</b></h1>
            <p className="lead my-3">Acompáñame en un emocionante viaje de descubrimiento tecnológico e informático a través de mis publicaciones.</p>
            <a href="#publicaciones-recientes" >
              Publicaciones recientes
            </a>
          </div>
        </div>
      
  
  
    );
  }
  
  export const SecondaryPost = () => {
    return (
  
      <div className="row mb-2 ">
        
  
          <Portafolio />
  
          <About />
  
  
      </div>
  
    );
  }
  
  
  
  
  
  // CARDS
  export const Portafolio = () => {
    return(
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative">
              
        <div className="col p-4 d-flex flex-column position-static">
        <h3 className="mb-0 h4">Descubre mi Portafolio Profesional</h3>
        <div className="mb-1 text-body-secondary">Explora mis habilidades en desarrollo web y tecnología.</div>
        <p className="card-text mb-auto">En esta sección podrán conocer más acerca de mis habilidades, experiencia y pasiones en el mundo del desarrollo web y la tecnología.</p>
        <div>
          <Link to="/portfolio">Acerca de mi </Link>
        </div>
          
        </div>
  
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img px-3"  width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Portafolio</title>
            <img  className="img_articulo" width="100%" height="100%" />
          </svg>
        </div>
      </div>
    </div>
    );
  };
  
  
  
  export const About = () => {
    return (
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative">
          <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0 h4">Descubre Más Acerca de JMO</h3>
            <div className="mb-1 text-body-secondary">Mi nombre es José Manuel Oberreuter y soy desarrollador de software.</div>
            <p className="card-text mb-auto">Soy un estudiante en Ingeniería Informática, comprometido con el autoaprendizaje constante y la mejora de habilidades en programación.</p>
            <Link to="/about">Más información</Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <svg className="bd-placeholder-img px-3"  width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>About me</title>
              <img href="./img/portada-about.png"  className="img_articulo" width="100%" height="100%"  />
            </svg>
          </div>
        </  div>
      </div>
    )
  }
  


  