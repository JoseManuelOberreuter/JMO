import React from 'react';
import certificado from './img/about/certificado_az900.jpg';
import '../Css/AboutMe.css'; // Asegúrate de incluir el archivo CSS

export const ItemCertificate = () => {
    return (
        <div className="item-certificate-container">
            <div className="row gx-5">
                {/* Columna del texto */}
                <div className="col-md-6 d-flex align-items-center">
                    <div className="text-section">
                        <h2 className="display-5 fw-bolder">
                            <span className="text-gradient d-inline">Nube de Microsoft</span>
                        </h2>
                        <p className="lead fw-light mb-4">
                            Certificado en Microsoft Azure, mi formación en la plataforma Azure me permite ofrecer soluciones en la nube.
                        </p>
                        <p className="text-white">
                            Este certificado demuestra mis habilidades en la gestión y administración de servicios en la nube.
                        </p>
                    </div>
                </div>
                {/* Columna de la imagen */}
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={certificado} alt="Certificado Microsoft AZ 900" className="certificado-img" />
                </div>
            </div>
        </div>
    );
};
