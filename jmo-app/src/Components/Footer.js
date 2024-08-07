import { IconosRS } from './Iconos';
// import { Link } from 'react-router-dom';

import '../Css/Footer.css';

export function Footer() {
  return (
    <footer className="container footer-custom ">
      <div className="row justify-content-center">

        <IconosRS />

        {/* 
        <div className="col-6 col-md-2 mb-3">
          <h5>JMO</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0 text-body-secondary">Blog</Link></li>
            <li className="nav-item mb-2"><Link to="/portfolio" className="nav-link p-0 text-body-secondary">Portafolio</Link></li>
            <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">Sobre mi</Link></li>
          </ul>
        </div> 

        <div className="col-md-5 offset-md-1 mb-3">
          <form id='form-footer' action="https://formsubmit.co/jose.manuel.oberreuter@gmail.com" method="POST">
            <h5>Comunícate Conmigo</h5>
            <p>Por favor, ingresa tu consulta a continuación y te responderé a la brevedad.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Escríbeme un mensaje</label>
              <input id="newsletter1" type="text" name='Mensaje' className="form-control" placeholder="Escríbeme un mensaje" required/>
              <input type="hidden" name="_subject" value="Nuevo mensaje de JMO!"></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_next" value="#"></input>
              <button className="btn btn-primary" type="submit">Enviar</button>
            </div>
          </form>
        </div> 
        */}

      </div>
    </footer>
  );
}
  

