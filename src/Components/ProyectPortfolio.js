import React from 'react';
import '../Css/Proyects.css'
import video_api_bianance from '../Assets/video_api_bianance.mp4';
import video_arquitectura from '../Assets/video_arquitectura.mp4';
import video_kinesiologia from '../Assets/video_kinesiologia.mp4';

const projectData = [
  {
    id: 1,
    title: "App React JS para seguimiento en tiempo real de las 10 principales criptomonedas en Binance",
    description: "App React JS para seguimiento en tiempo real de las 10 principales criptomonedas en Binance, con gráficos precisos mediante la API de Binance.",
    videoSrc: video_api_bianance,
    altText: "Data Screen",
    link: "https://josemanueloberreuter.github.io/Binance_API/",
    date: "Agosto 2023",
  },
  {
    id: 2,
    title: "Página web de una fisioterapeuta profesional",
    description: "Página web de una fisioterapeuta profesional con formularios para programar sesiones, diseñada con estilo Bootstrap.",
    videoSrc: video_kinesiologia,
    altText: "Kine Paula",
    link: "https://josemanueloberreuter.github.io/Webapp_kinenesiologia/index.html",
    date: "Julio 2023",
  },
  {
    id: 3,
    title: "Página web para estudio de arquitectura",
    description: "Página web para estudio de arquitectura con diseño personalizado en CSS y un formulario interactivo para solicitar presupuestos.",
    videoSrc: video_arquitectura,
    altText: "House Beach",
    link: "https://josemanueloberreuter.github.io/Arquitectos/",
    date: "Enero 2023",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="block mb-5">
      <a href={project.link} className="project-card" target="_blank" rel="noreferrer">
        <div className="card shadow-sm">
          <video
            className="card-video"
            src={project.videoSrc}
            autoPlay
            loop
            muted
          ></video>
          <div className="card-overlay">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};


export const ProyectPortfolio = () => {
  return (
    <div className="block">
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
