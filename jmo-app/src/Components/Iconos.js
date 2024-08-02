import icofb from './img/ico/fbicogrey.ico'
import icogit from './img/ico/giticogrey.ico'
import icolink from './img/ico/linkicogrey.ico'
import icoig from './img/ico/instaicogrey.ico'
import icotw from './img/ico/twitericogrey.ico'

import '../Css/Iconos.css'


// FOOTER SOCIAL MEDIA ICONS 
export const IconosRS = () => {
    return (
      <div className="col-12 col-md-4 pt-1 d-flex justify-content-center align-items-center">
        <a target="_blank" rel="noreferrer" href="https://github.com/JoseManuelOberreuter">
            <img className="icono-rs" src={icogit} alt="GitHub Icon" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jos%C3%A9-manuel-oberreuter-492835225/">
            <img className="icono-rs" src={icolink} alt="Linkedin Icon" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jmo.developer/">
            <img className="icono-rs" src={icoig} alt="Linkedin Icon" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100083188934596">
            <img className="icono-rs" src={icofb} alt="Linkedin Icon" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/jmo_developer">
            <img className="icono-rs" src={icotw} alt="Linkedin Icon" />
        </a>
      </div>
    );
};