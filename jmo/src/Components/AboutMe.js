import React from 'react';
import { Sidebar } from "./Componentes";

// MAIN CONTENT 

export const MainAboutMe = () => {


  
    return (
      <main>
        <div>
          
            <div>


              <HeroBanner/>
              <HeroBanner2 />

              <Jumbotron />

      



            </div>
          
        </div>
      </main>
    );
  };


  export const HeroBanner = () => {
      return (
          <div className=''>
              <section className="py-5">
                  <div className="container px-5">
                      <div className="row gx-5 justify-content-center">
                          <div className="col-xxl-8">
                              <div className="row gx-5">
                                  {/* Columna de la imagen */}
                                  <div className="col-md-6">
                                      <img src="./img/yo.jpg" alt="Imagen" className="img-fluid" />
                                  </div>
                                  {/* Columna del texto */}
                                  <div className="col-md-6 d-flex align-items-center">
                                      <div className="text-center my-5">
                                          <h1 className="display-5 fw-bolder"><span className="text-gradient d-inline">Acerca de mí</span></h1>
                                          <p className="lead fw-light mb-4">Hola! Mi nombre es José Manuel Oberreuter (JMO) </p>
                                          <p className="text-muted">Soy un estudiante en técnico en desarrollo y análisis de sistemas, con un enfoque destacado en la innovación. Mi habilidad para abordar desafíos se basa en mi compromiso con la autoeducación. Aspiro a aplicar mis conocimientos y habilidades en una empresa, contribuyendo a su mejora continua y aportando de manera consistente.</p>

                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      );
  };

  
  export const HeroBanner2 = () => {
    return (
        <div className=''>
            <section className="py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="row gx-5">

                                {/* Columna del texto */}
                                <div className="col-md-6 d-flex align-items-center">
                                    <div className="text-center my-5">
                                        <h1 className="display-5 fw-bolder"><span className="text-gradient d-inline">Certificado Microsoft: Azure Fundamentals</span></h1>
                                        <p className="lead fw-light mb-4">
                                            Experto en Microsoft Azure, mi formación en la plataforma Azure me permite ofrecer soluciones en la nube.
                                        </p>                                 
                                        <p className="text-muted">
                                            Este certificado demuestra mis habilidades en la gestión y administración de servicios en la nube.
                                        </p>
                                    </div>
                                </div>

                                {/* Columna de la imagen */}
                                <div className="col-md-6">
                                    <img src="./img/certificado_az900.jpg" alt="Certificado Microsoft AZ 900" className="img-fluid" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
  



  const Jumbotron = () => {
    return (
      <div className="container py-4">

  
        {/* <div className="p-5 mb-4 bg-body-tertiary rounded-3 pb-3 ">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Estudiante de técnico en programación  y análisis de sistema.</h1>
            <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          </div>
        </div> */}

        

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Estudiante de técnico en programación  y análisis de sistema</h2>
              <p className='mt-5'>2022-2023</p>
              <p>Instituto de Ciecias Tecnológicas CIISA</p>
              {/* <button className="btn btn-outline-light" type="button">Example button</button> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Estudiante de Ingeniería Informática</h2>
              <p className='mt-5'>2022-2025</p>
              <p>Instituto de Ciecias Tecnológicas CIISA</p>
              {/* <button className="btn btn-outline-secondary" type="button">Example button</button> */}
            </div>
          </div>
        </div> *
  

      </div>
    );
  };
  
  export default Jumbotron;
  