import React, { useEffect, useRef } from 'react';
import '../Css/Portfolio.css';

import { ProyectPortfolio } from '../Components/ProyectPortfolio';

export const Portfolio = () => {
    return (
      <div className="portfolio-container container text-white">
          <h2 className="text-center mb-5">Proyectos recientes</h2>
          <ProyectPortfolio />
      </div>
    );
};

