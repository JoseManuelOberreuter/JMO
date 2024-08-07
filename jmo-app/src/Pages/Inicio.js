import React, { useState, useEffect, useRef  } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HeroBanner } from '../Components/HeroBanner';
import { BloquePrincipal } from '../Components/BloquePrincipal';
import { BloqueSecundario } from '../Components/BloqueSecundario';


export const Inicio = () => {    
    return (
        <main className=''>
            <HeroBanner />
            {/* <BloquePrincipal />
            <BloqueSecundario /> */}
        </main>
    )
} 