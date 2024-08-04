import React, { useState, useEffect, useRef  } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HeroBanner } from '../Components/HeroBanner';


export const Inicio = () => {    
    return (
        <main className=''>
            <HeroBanner />
        </main>
    )
} 