import React from 'react';
import { HeroBanner } from '../Components/HeroBanner';
import { CTASection } from '../Components/CTASection';
import { Testimonios } from '../Components/Testimonios';
import '../Css/Inicio.css';

export const Inicio = () => {    
    return (
        <main>
            <div className="section-container">
                <HeroBanner />
            </div>
            <div className="section-container">
                <CTASection />
            </div>
            <div className="section-container">
                <Testimonios />
            </div>
        </main>
    )
} 