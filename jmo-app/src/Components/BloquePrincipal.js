import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Css/BloqueContenido.css'

export const BloquePrincipal = () => {

    return (
        <div className="bloqueContenido">
            <div className="contenido-izquierda">
                <h2>Columa 1</h2>
            </div>
            <div className="contenido-derecha">
                <p>Columa 2</p>
            </div>
        </div>
    )
}