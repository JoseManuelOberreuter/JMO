import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Css/BloqueSecundario.css'

export const BloqueSecundario = () => {

    return (
        <div className="bloqueSecundario">
            <div className="contenido-secundario-izquierda">
                <h2>BLOQUE SECUNDARIO</h2>
            </div>
            <div className="contenido-secundario-derecha">
                <p>BLOQUE SECUNDARIO</p>
            </div>
        </div>
    )
}