import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import '../Css/Portfolio.css';

import { ProyectPortfolio1, ProyectPortfolio2, ProyectPortfolio3 } from '../Components/ProyectPortfolio';

export const Portfolio = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const flkty = new Flickity(carouselRef.current, {
      cellAlign: 'center',
      contain: true,
      autoPlay: true,
      wrapAround: true,
    });

    return () => {
      flkty.destroy();
    };
  }, []);

  return (
    <div className='container'>
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-cell"><ProyectPortfolio1 /></div>
        <div className="carousel-cell"><ProyectPortfolio2 /></div>
        <div className="carousel-cell"><ProyectPortfolio3 /></div>
      </div>
    </div>
  );
};
