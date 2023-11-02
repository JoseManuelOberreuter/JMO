import React from 'react';
import { Sidebar } from './SideBar';

// MAIN CONTENT 

export const MainAboutMe = () => {


  
    return (
      <main>
        <div>
          
            <div>


              <HeroBanner/>
              <CertificadoAZ900 />
              <Habilidades />

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
                                          <p className="text-muted">
                                            Soy un estudiante en Ingeniería Informatica, con 
                                            un enfoque destacado en la innovación. Mi habilidad para abordar
                                            desafíos se basa en mi compromiso con la autoeducación.
                                            Aspiro a ser un experto en Inteligencia Artificial.
                                          </p>

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

  
  export const CertificadoAZ900 = () => {
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
        </div> 
  

      </div>
    );
  };
  
  




  const Habilidades = () => {
    return (
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Habilidades</h2>
  
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4">Inglés Avanzado</h3>
              <p>Capacidad para comunicarse y comprender el inglés a un nivel avanzado.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4">Trabajo en Equipo</h3>
              <p>Habilidad para colaborar efectivamente en equipos multidisciplinarios.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4">Comunicación Efectiva</h3>
              <p>Capacidad para comunicar ideas de manera clara y persuasiva.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4">Adaptabilidad</h3>
              <p>Facilidad para adaptarse a diferentes entornos y situaciones.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4">Creativo</h3>
              <p>Capacidad para pensar de manera innovadora y creativa.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4">Scrum</h3>
              <p>Conocimiento en la metodología de desarrollo Scrum.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4">React</h3>
              <p>Experiencia en el desarrollo con React, una biblioteca de JavaScript.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4">Azure</h3>
              <p>Conocimiento en servicios en la nube de Microsoft Azure.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4">Python</h3>
              <p>Experiencia en programación con el lenguaje Python.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4">Kotlin</h3>
              <p>Experiencia en programación con el lenguaje Kotlin.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4">Git</h3>
              <p>Experiencia en el sistema de control de versiones Git.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4">SQL</h3>
              <p>Conocimiento en el lenguaje SQL para bases de datos.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  
  
