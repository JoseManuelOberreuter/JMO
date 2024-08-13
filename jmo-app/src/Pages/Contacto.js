import React, { useState, useEffect } from 'react';
import '../Css/Contacto.css';

import { FormContacto } from '../Components/Form'

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

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [pause, setPause] = useState(false);
  
    const typingSpeed = 75; // Tiempo en milisegundos (150 / 2)
    const deletingSpeed = 100; // Tiempo en milisegundos (100 / 2)
    const pauseDuration = 1000; // Tiempo en milisegundos
  
    useEffect(() => {
      let timer;
      const word = words[currentWordIndex];
  
      if (pause) {
        timer = setTimeout(() => {
          setPause(false);
        }, pauseDuration);
      } else if (isDeleting) {
        timer = setTimeout(() => {
          setText(prevText => prevText.slice(0, -1));
          if (text === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setPause(true);
          }
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setText(prevText => word.slice(0, prevText.length + 1));
          if (text === word) {
            setIsDeleting(true);
            setPause(true);
          }
        }, typingSpeed);
      }
  
      return () => clearTimeout(timer);
    }, [text, isDeleting, pause, currentWordIndex]);
  
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
