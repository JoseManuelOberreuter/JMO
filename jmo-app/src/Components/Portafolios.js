import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import dataScreen from './img/portafolio/data_screen.png'
import houseBeach from './img/portafolio/house_beach.png'
import kinePaula from './img/portafolio/kinepaula.png'


// TO DO:
// 

export const MainPortafolios = () => {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Bienvenidos a mi portafolio</h1>
            <p className="lead text-body-secondary">
              Bienvenidos a mi portafolio de tecnología e informática, donde podrán conocer más acerca de mis habilidades, experiencia y pasiones en el mundo del desarrollo web y la tecnología.
            </p>
            <p>
              <ScrollLink to="form-footer" smooth={true} duration={500} className="btn btn-primary my-2 mx-2">Contactarme</ScrollLink>
              <Link to="/about" className="btn btn-secondary my-2 mx-2">Acerca de mí</Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 mb-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


          <CardPortafolios1 />
          <CardPortafolios2 />
          <CardPortafolios3 />


          </div>
        </div>
      </div>

    </main>
  );
};


const CardPortafolios1 = () => {
  const projectLink = "https://josemanueloberreuter.github.io/Binance_API/";

  return (
    <div className="col">
      <a href={projectLink} className='text-decoration-none' target="_blank" rel="noreferrer">
        <div className="card shadow-sm">
          <img
            src={dataScreen}
            alt="Data Screen"
            className="card-img-top"
          />
          <div className="card-body">
            <p className="card-text">
              App React JS para seguimiento en tiempo real de las 10 principales criptomonedas en Binance, con gráficos precisos mediante la API de Binance.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <a href={projectLink} className="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                  Ver
                </a>
              </div>
              <small className="text-body-secondary">Agosto 2023</small>
            </div>
          </div>
      </div>
      </a>
    </div>
  );
};


const CardPortafolios2 = () => {
  const projectLink = "https://josemanueloberreuter.github.io/Webapp_kinenesiologia/index.html";

  return (
    <div className="col">
      <a href={projectLink} className='text-decoration-none' target="_blank" rel="noreferrer" >
        <div className="card shadow-sm">
          <img
            src={kinePaula}
            alt="Data Screen"
            className="card-img-top"
          />
          <div className="card-body">
            <p className="card-text">
              Página web de una fisioterapeuta profesional con formularios para programar sesiones, diseñada con estilo Bootstrap.            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <a href={projectLink} className="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                  Ver
                </a>
              </div>
              <small className="text-body-secondary">Julio 2023</small>
            </div>
          </div>
      </div>
      </a>
    </div>
  );
};



const CardPortafolios3 = () => {
  const projectLink = "https://josemanueloberreuter.github.io/Arquitectos/";

  return (
    <div className="col">
      <a href={projectLink} className='text-decoration-none' target="_blank" rel="noreferrer">
        <div className="card shadow-sm">
          <img
            src={houseBeach} 
            alt="Data Screen"
            className="card-img-top"
          />
          <div className="card-body">
            <p className="card-text">
              Página web para estudio de arquitectura con diseño personalizado en CSS y un formulario interactivo para solicitar presupuestos.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <a href={projectLink} className="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                  Ver
                </a>
              </div>
              <small className="text-body-secondary">Enero 2023</small>
            </div>
          </div>
      </div>
      </a>
    </div>
  );
};