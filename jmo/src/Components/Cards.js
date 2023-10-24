import { Link } from 'react-router-dom';


export const CardRevolucionIA = () => {

    const CardStyle = {
        
    }

    return (
      <div className="col ">
        <Link to="/PostRevolucionIA"  className='text-decoration-none' >
          <div className="card shadow-sm ">
            <img
                
                wi
                src="/img/img-articles/ia_cyber.png" 
                alt="Data Screen"
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
                src="/img/img-articles/mj_portada_art.png" 
                alt="Data Screen"
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
                <small className="text-body-secondary">Mayo 23</small>
              </div>
            </div>
        </div>
        </Link>
      </div>
    );
  };


