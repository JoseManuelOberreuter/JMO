import React from 'react';
import { HeroBanner } from '../Components/HeroBanner';
import { CTASection } from '../Components/CTASection';
import { Testimonios } from '../Components/Testimonios';

export const Inicio = () => {    
    return (
        <main>
            <HeroBanner />
            <CTASection />
            <Testimonios />
        </main>
    )
} 