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
    category: "Aplicación",
    technologies: ["React", "API", "Chart.js", "WebSocket"],
  },
  {
    id: 2,
    title: "Página web de una fisioterapeuta profesional",
    description: "Página web de una fisioterapeuta profesional con formularios para programar sesiones, diseñada con estilo Bootstrap.",
    videoSrc: video_kinesiologia,
    altText: "Kine Paula",
    link: "https://josemanueloberreuter.github.io/Webapp_kinenesiologia/index.html",
    date: "Julio 2023",
    category: "Sitio Web",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: 3,
    title: "Página web para estudio de arquitectura",
    description: "Página web para estudio de arquitectura con diseño personalizado en CSS y un formulario interactivo para solicitar presupuestos.",
    videoSrc: video_arquitectura,
    altText: "House Beach",
    link: "https://josemanueloberreuter.github.io/Arquitectos/",
    date: "Enero 2023",
    category: "Sitio Web",
    technologies: ["HTML", "CSS", "JavaScript", "Formularios"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="card-video">
        <video
          src={project.videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="card-content">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="technology-tag">{tech}</span>
          ))}
        </div>
        <span className="project-date">{project.date}</span>
      </div>
      <a 
        href={project.link} 
        className="project-link" 
        target="_blank" 
        rel="noreferrer"
        aria-label={`Ver proyecto ${project.title}`}
      />
    </article>
  );
};

export const ProyectPortfolio = () => {
  return (
    <div className="projects-grid">
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
