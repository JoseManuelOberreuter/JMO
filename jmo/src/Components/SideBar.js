import { Link } from 'react-router-dom';

import {
  CardMidjourney,
  CardRevolucionIA
} from './Cards'


export const Sidebar = () => {
    return(
      <div class="col-md-4 ">
  
        <div class="sticky-top ">
          <div class="p-4 mb-3 bg-body-tertiary rounded">
            <h4 class="fst-italic">Sobre el blog:</h4>
            <p class="mb-0"> Dedicado a la difusión de información con fines educativos sobre programación. Aquí encontrarás una amplia variedad de temas relacionados con la programación y la tecnología, desde los conceptos básicos hasta las últimas tendencias.</p>
          </div>
  
          <div class="p-4">
            <h4 class="fst-italic">Archivos</h4>
            <ol class="list-unstyled mb-0">
              <li><a href="/html/blog_prox.html">Azure</a></li>
              <li><a href="/html/blog_prox.html">Python</a></li>
              <li><Link to="/ArchivosIA">Inteligencia Artificial</Link></li>
              <li><a href="/html/blog_prox.html">Métodos Ágiles</a></li>
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
  




  