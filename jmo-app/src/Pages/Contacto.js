import React, { useState } from 'react';
import '../Css/Contacto.css';

import { FormContacto } from '../Components/Form'

export const Contacto = () => {
    return (
        <div className='contacto-main'>
            <h1 className='contacto-titulo'>Contactame</h1>
            <FormContacto />
        </div>
    );
};
