import React from 'react';
import '../Css/AboutMe.css';

import { ItemAboutMe } from '../Components/ItemAboutMe'
import { ItemCertificate } from '../Components/ItemCertificate'
import { ItemJumbotron } from '../Components/ItemJumbotron'
import { ItemSkills } from '../Components/ItemSkills'

export const AboutMe = () => {
    return (
        <div className="aboutme-container container text-white">
            <div className="carousel-cell"><ItemAboutMe /></div>
            <div className="carousel-cell"><ItemCertificate /></div>
            <div className="carousel-cell"><ItemJumbotron /></div>
            <div className="carousel-cell"><ItemSkills /></div>
        </div>
    );
};
