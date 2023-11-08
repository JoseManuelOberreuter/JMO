import { Link } from 'react-router-dom';

import imgPython4 from './img/articles/portada_python3.png'
import imgPython3 from './img/articles/portada_python2.png'
import imgPython2 from './img/articles/portada_python1.png'
import imgPython1 from './img/articles/portada_python.png'
import imgScrum from './img/articles/scrum_blog.png'
import imgMidjourney from './img/articles/mj_portada_art.png'
import imgIa from './img/articles/ia_cyber.png'

export const CardRevolucionIA = () => {



    return (
      <div className="col ">
        <Link to="/PostRevolucionIA"  className='text-decoration-none' >
          <div className="card shadow-sm ">
            <img
                
                wi
                src={imgIa}
                alt="Imagen Inteligencia Artificial"
                className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text hover-bold">
                La revolución de la inteligencia artificial
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/PostRevolucionIA" className="btn btn-sm btn-outline-secondary" rel="noopener noreferrer">
                    Ver
                  </Link>
                </div>
                <small className="text-body-secondary">Mayo 23</small>
              </div>
            </div>
        </div>
        </Link>
      </div>
    );
  };


export const CardMidjourney = () => {

    return (
      <div className="col">
        <Link to="/PostMidjourney"  className='text-decoration-none' >
          <div className="card shadow-sm">
            <img
                wi
                src={imgMidjourney}
                alt="Imagen de Midjourney"
                className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text hover-bold">
                
                    El futuro de la creación de imágenes: Una mirada a Midjourney
                
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/PostMidjourney" className="btn btn-sm btn-outline-secondary" rel="noopener noreferrer">
                    Ver
                  </Link>
                </div>
                <small className="text-body-secondary">Junio 15</small>
              </div>
            </div>
        </div>
        </Link>
      </div>
    );
  };


export const CardScrum = () => {

    return (
      <div className="col">
        <Link to="/PostScrum"  className='text-decoration-none' >
          <div className="card shadow-sm">
            <img
                
                wi
                src={imgScrum}
                alt="Imagen Equipo de trabajo Scrum"
                className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text hover-bold">
              Scrum: Un marco de trabajo para el desarrollo de software                
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/PostScrum" className="btn btn-sm btn-outline-secondary" rel="noopener noreferrer">
                    Ver
                  </Link>
                </div>
                <small className="text-body-secondary">Junio 23</small>
              </div>
            </div>
        </div>
        </Link>
      </div>
    );
  };


export const CardPython1 = () => {

    return (
      <div className="col">
        <Link to="/PostPython1"  className='text-decoration-none' >
          <div className="card shadow-sm">
            <img
                
                wi
                src={imgPython1}
                alt="Imagen PC Python"
                className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text hover-bold">
              Introducción a Python y su entorno de desarrollo            
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/PostPython1" className="btn btn-sm btn-outline-secondary" rel="noopener noreferrer">
                    Ver
                  </Link>
                </div>
                <small className="text-body-secondary">Junio 26</small>
              </div>
            </div>
        </div>
        </Link>
      </div>
    );
  };


export const CardPython2 = () => {

    return (
      <div className="col">
        <Link to="/PostPython2"  className='text-decoration-none' >
          <div className="card shadow-sm">
            <img
                
                wi
                src={imgPython2}
                alt="Imagen PC Python 2"
                className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text hover-bold">
              Variables, Tipos de Datos y Operaciones Básicas en Python
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/PostPython2" className="btn btn-sm btn-outline-secondary" rel="noopener noreferrer">
                    Ver
                  </Link>
                </div>
                <small className="text-body-secondary">Junio 26</small>
              </div>
            </div>
        </div>
        </Link>
      </div>
    );
  };



export const CardPython3 = () => {

    return (
      <div className="col">
        <Link to="/PostPython3"  className='text-decoration-none' >
          <div className="card shadow-sm">
            <img
                
                
                src={imgPython3} 
                alt="Imagen Laptop Python"
                className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text hover-bold">
              Estructuras de control de Python: condicionales y bucles
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/PostPython3" className="btn btn-sm btn-outline-secondary" rel="noopener noreferrer">
                    Ver
                  </Link>
                </div>
                <small className="text-body-secondary">Junio 30</small>
              </div>
            </div>
        </div>
        </Link>
      </div>
    );
  };



export const CardPython4 = () => {

    return (
      <div className="col">
        <Link to="/PostPython4"  className='text-decoration-none' >
          <div className="card shadow-sm">
            <img
                
                wi
                src={imgPython4}
                alt="Imgen Chip Python"
                className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text hover-bold">
              Listas, tuplas, conjuntos y diccionarios de Python
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/PostPython4" className="btn btn-sm btn-outline-secondary" rel="noopener noreferrer">
                    Ver
                  </Link>
                </div>
                <small className="text-body-secondary">Julio 3</small>
              </div>
            </div>
        </div>
        </Link>
      </div>
    );
  };


