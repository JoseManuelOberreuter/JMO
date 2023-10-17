import React from 'react';
import { Sidebar } from "./Componentes";

// MAIN CONTENT 

export const MainAboutMe = () => {


  
    return (
      <main>
        <div>
          
            <div>


              <HeroBanner/>



            </div>
          
        </div>
      </main>
    );
  };


  export const HeroBanner = () => {
      return (
          <div>
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
                                          <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Acerca de mí</span></h2>
                                          <p className="lead fw-light mb-4">Hola! Mi nombre es José Manuel Oberreuter (JMO) y soy desarrollador.</p>
                                          <p className="text-muted">Soy un estudiante en técnico en desarrollo y análisis de sistemas, con un enfoque destacado en la innovación. Mi habilidad para abordar desafíos se basa en mi compromiso con la autoeducación. Aspiro a aplicar mis conocimientos y habilidades en una empresa, contribuyendo a su mejora continua y aportando de manera consistente.</p>
                                          <div className="d-flex justify-content-center fs-2 gap-4">
                                              <a className="text-gradient" href="https://instagram.com/kine.paularaya?igshid=Y2I2MzMwZWM3ZA=="><i className="bi bi-instagram"></i></a>
                                              <a className="text-gradient" href="https://www.tiktok.com/@paula.kineadomicilio?_t=8dkAmjsczAL&_r=1"><i className="bi bi-tiktok"></i></a>
                                          </div>
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
  