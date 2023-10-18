

export function Footer() {
    return (
      <div className="container border-top">
        <footer className="py-5">
          <div className="row ">
  
  
            <div className="col-6 col-md-2 mb-3">
              <h5>JMO</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Portafolio</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Sobre mi</a></li>
              </ul>
            </div>
  
  
  
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Comunícate Conmigo</h5>
                <p>Por favor, ingresa tu consulta a continuación y te responderé a la brevedad.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Escríbeme un mensaje</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Escríbeme un mensaje" />
                  <button className="btn btn-primary" type="button">Enviar</button>
                </div>
              </form>
            </div>
  
  
  
            <IconosRS />
  
  
          </div>
        </footer>
      </div>
    );
  }
  

// FOOTER SOCIAL MEDIA ICONS 
export const IconosRS = () => {
    return (
      <div className="col-4 pt-1">
        <a target="_blank" href="https://github.com/JoseManuelOberreuter">
            <img className="ico_blog" src="/img/rs-logos/giticogrey.ico" alt="GitHub Icon" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/jos%C3%A9-manuel-oberreuter-492835225/">
            <img className="ico_blog" src="/img/rs-logos/linkicogrey.ico" alt="Linkedin Icon" />
        </a>
        <a target="_blank" href="https://www.instagram.com/jmo.developer/">
            <img className="ico_blog" src="/img/rs-logos/instaicogrey.ico" alt="Linkedin Icon" />
        </a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100083188934596">
            <img className="ico_blog" src="/img/rs-logos/fbicogrey.ico" alt="Linkedin Icon" />
        </a>
        <a target="_blank" href="https://twitter.com/jmo_developer">
            <img className="ico_blog" src="/img/rs-logos/twitericogrey.ico" alt="Linkedin Icon" />
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UCi1uX_qrjLD_pG-GNfho7dA ">
            <img className="ico_blog" src="/img/rs-logos/youtubeicogrey.ico" alt="Linkedin Icon" />
        </a>
      </div>
    );
  };