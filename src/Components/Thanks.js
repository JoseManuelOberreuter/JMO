import React from "react";
import '../Css/Thanks.css'

export const Thanks = () => {
    return (
        <div className="py-5 text-center thanks-container container text-white">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h3 className="fw-light thanks-title">¡Gracias por contactar conmigo!</h3>
                <p className="lead">
                    Tu mensaje lo leeré lo más pronto posible. Mientras tanto, te invito a explorar mi portafolio donde podrás conocer más acerca de mis habilidades, experiencia y pasiones en el mundo del desarrollo web y la tecnología.
                </p>
            </div>
        </div>
    );
};
