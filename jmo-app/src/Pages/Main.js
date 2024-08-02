import React, { useState, useEffect, useRef  } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HeroBanner } from '../Components/HeroBanner';


export const Main = () => {    
    return (
        <main className=''>
            <HeroBanner />
        </main>
    )
} 