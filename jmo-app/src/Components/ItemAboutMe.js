import React from 'react';
import imgYo from './img/about/yo.jpg';
import '../Css/AboutMe.css'; // Asegúrate de incluir el archivo CSS

export const ItemAboutMe = () => {
    return (
        <div className="container px-4 py-5">
            <div className="row gx-5">
                {/* Columna de la imagen */}
                <div className="col-md-6 aboutme-img">
                    <img src={imgYo} alt="Imagen" className="img-fluid rounded " />
                </div>
                {/* Columna del texto */}
                <div className="col-md-6 d-flex align-items-center">
                    <div className="text-left my-5">
                        <h2 className="display-5 fw-bolder">
                            <span className="text-gradient d-inline">JMO</span>
                        </h2>
                        <p className="lead fw-light mb-4">Hola! Mi nombre es José Manuel Oberreuter</p>
                        <p className="text-white">
                            Soy un estudiante en Ingeniería Informática, con un enfoque destacado en la innovación. 
                            Mi habilidad para abordar desafíos se basa en mi compromiso con la autoeducación.
                            Aspiro a ser un experto en Inteligencia Artificial.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
