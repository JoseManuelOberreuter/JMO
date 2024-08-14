import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import '../Css/AboutMe.css';
import '../Css/Carousel.css';

import { ItemAboutMe } from '../Components/ItemAboutMe'
import { ItemCertificate } from '../Components/ItemCertificate'
import { ItemJumbotron } from '../Components/ItemJumbotron'
import { ItemSkills } from '../Components/ItemSkills'

export const AboutMe = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const flkty = new Flickity(carouselRef.current, {
            // Configuraciones de Flickity
            cellAlign: 'left',
            contain: true,
            autoPlay: true,
            wrapAround: true
        });

        // Limpia Flickity cuando el componente se desmonte
        return () => {
            flkty.destroy();
        };
    }, []);

    return (
        <div className='container'>
            <div className="carousel" ref={carouselRef}>
                <div className="carousel-cell"><ItemAboutMe /></div>
                <div className="carousel-cell"><ItemCertificate /></div>
                <div className="carousel-cell"><ItemJumbotron /></div>
                <div className="carousel-cell"><ItemSkills /></div>
            </div>
        </div>
    );
};
