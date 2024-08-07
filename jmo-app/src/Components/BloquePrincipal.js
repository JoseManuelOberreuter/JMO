import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Css/BloquePrincipal.css'

export const BloquePrincipal = () => {

    return (
        <div className="bloquePrincipal">
            <div className="contenido-principal-izquierda">
                <h2>Columa 1</h2>
            </div>
            <div className="contenido-principal-derecha">
                <p>Columa 2</p>
            </div>
        </div>
    )
}