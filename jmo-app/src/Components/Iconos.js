import icofb from './img/ico/fbicogrey.ico'
import icogit from './img/ico/giticogrey.ico'
import icolink from './img/ico/linkicogrey.ico'
import icoig from './img/ico/instaicogrey.ico'
import icotw from './img/ico/twitericogrey.ico'


// FOOTER SOCIAL MEDIA ICONS 
export const IconosRS = () => {
    return (
      <div className="col-12 col-md-4 pt-1 d-flex justify-content-center align-items-center">
        <a target="_blank" href="https://github.com/JoseManuelOberreuter">
            <img className="ico_blog" src={icogit} alt="GitHub Icon" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/jos%C3%A9-manuel-oberreuter-492835225/">
            <img className="ico_blog" src={icolink} alt="Linkedin Icon" />
        </a>
        <a target="_blank" href="https://www.instagram.com/jmo.developer/">
            <img className="ico_blog" src={icoig} alt="Linkedin Icon" />
        </a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100083188934596">
            <img className="ico_blog" src={icofb} alt="Linkedin Icon" />
        </a>
        <a target="_blank" href="https://twitter.com/jmo_developer">
            <img className="ico_blog" src={icotw} alt="Linkedin Icon" />
        </a>
        {/* <a target="_blank" href="https://www.youtube.com/channel/UCi1uX_qrjLD_pG-GNfho7dA ">
            <img className="ico_blog" src="/img/rs-logos/youtubeicogrey.ico" alt="Linkedin Icon" />
        </a> */}
      </div>
    );
  };