import { Link } from 'react-router-dom';

import {
  CardPython1,
  CardPython2,
  CardPython3,
  CardPython4,

  CardMidjourney,
  CardRevolucionIA,
  CardScrum
} from './Cards'


export const Sidebar = () => {
    return(
      <div className="col-md-4 " style={{ zIndex: 1 }}>
  
        <div className="sticky-top ">
          <div className="p-4 mb-3 bg-body-tertiary rounded">
            <h4 className="fst-italic">Sobre el blog:</h4>
            <p className="mb-0"> Dedicado a la difusión de información con fines educativos sobre programación. Aquí encontrarás una amplia variedad de temas relacionados con la programación y la tecnología, desde los conceptos básicos hasta las últimas tendencias.</p>
          </div>
  
          <div className="p-4">
            <h4 className="fst-italic">Archivos</h4>
            <ol className="list-unstyled mb-0">
              <li><Link to="/ArchivosPythos">Python</Link></li>
              <li><Link to="/ArchivosIA">Inteligencia Artificial</Link></li>
              <li><Link to="/ArchivosMetodosAgiles">Métodos Ágiles</Link></li>
            </ol>
          </div>
  
  
        </div>
  
  
      </div>
    );
  }
  

export const ArchivosIA = () => {
    return(
      <main className="container">
        <div className="row g-5">
          <div className="col-md-8">
            <div className="album py-5 mb-5">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                  <CardRevolucionIA/>
                  <CardMidjourney/>

                </div>
              </div>
            </div>
        </div>

          <Sidebar/>

        </div>
      </main>
    );
  }

export const ArchivosMetodosAgiles = () => {
    return(
      <main className="container">
        <div className="row g-5">
          <div className="col-md-8">
            <div className="album py-5 mb-5">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                  <CardScrum/>

                </div>
              </div>
            </div>
        </div>

          <Sidebar/>

        </div>
      </main>
    );
  }
  



export const ArchivosPythos = () => {
    return(
      <main className="container">
        <div className="row g-5">
          <div className="col-md-8">
            <div className="album py-5 mb-5">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                  <CardPython1/>
                  <CardPython2/>
                  <CardPython3/>
                  <CardPython4/>

                </div>
              </div>
            </div>
        </div>

          <Sidebar/>

        </div>
      </main>
    );
  }
  




  