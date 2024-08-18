import React from 'react';

import dataScreen from './img/portafolio/data_screen.png'
import houseBeach from './img/portafolio/house_beach.png'
import kinePaula from './img/portafolio/kinepaula.png'



export const ProyectPortfolio1 = () => {
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


export const ProyectPortfolio2 = () => {
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



export const ProyectPortfolio3 = () => {
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