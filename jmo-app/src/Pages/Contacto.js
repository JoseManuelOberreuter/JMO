import React, { useState, useEffect } from 'react';
import '../Css/Contacto.css';

import { FormContacto } from '../Components/Form'
import { useTypewriterEffect } from '../Components/TextEffect'


// Funcion para traer las variables de css
const getCSSVariable = (variableName) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};
  
const words = [ 
    'Cualquier consulta',
    'Programar una reunión', 
    'Compartir tus opiniones', 
    'Colaborar en proyectos',
];
  
const colors = [
    getCSSVariable('--color-green'),
    getCSSVariable('--color-pink'),
    getCSSVariable('--color-mustard'),
    getCSSVariable('--color-blue'),
];
  

export const Contacto = () => {
  
    const typingSpeed = 75; // Tiempo en milisegundos (150 / 2)
    const deletingSpeed = 100; // Tiempo en milisegundos (100 / 2)
    const pauseDuration = 1000; // Tiempo en milisegundos

    const { text, currentWordIndex } = useTypewriterEffect(words, typingSpeed, deletingSpeed, pauseDuration);

    return (
        <div className='contacto-main'>
            <div className='contacto-card'>
                <h2 className='contacto-titulo'>Contactame para:</h2>
                <h2 className='contacto-titulo'><span className="dynamic-text" style={{ color: colors[currentWordIndex] }}>{text}</span></h2>
                <FormContacto />
            </div>
        </div>
    );
};
