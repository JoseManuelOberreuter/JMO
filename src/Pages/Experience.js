import React from 'react';
import { Helmet } from 'react-helmet';
import '../Css/Experience.css';

export const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Desarrollador Web Full Stack | Experiencia y Habilidades | JMO</title>
        <meta name="description" content="Desarrollador web full stack con más de 3 años de experiencia en creación de sitios web profesionales. Especializado en React, Node.js y tecnologías cloud. Contrata un experto para tu proyecto web." />
        <meta name="keywords" content="desarrollador web full stack, programador freelance, desarrollo web profesional, react, node.js, azure, aws, diseño web, desarrollo frontend, desarrollo backend" />
        <meta property="og:title" content="Desarrollador Web Full Stack | JMO" />
        <meta property="og:description" content="Desarrollador web profesional con experiencia en tecnologías modernas. Especializado en crear soluciones web completas y escalables para empresas." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://jmocode.com/experiencia" />
      </Helmet>
      <div className="experience-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <h1 className="hero-title">
              Desarrollador Full Stack
              <span className="accent-text"> & Estudiante de Ingeniería</span>
            </h1>
            <p className="hero-subtitle">
              Apasionado por crear experiencias digitales únicas y resolver problemas complejos
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2 className="section-title">Mi Trayectoria</h2>
                <p className="about-description">
                  Como estudiante de Ingeniería Informática, me especializo en el desarrollo web y la innovación tecnológica. 
                  Mi enfoque combina creatividad técnica con un compromiso constante por el aprendizaje y la excelencia.
                </p>
                <div className="stats">
                  <div className="stat-item">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Años de Experiencia</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Proyectos Completados</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">2</span>
                    <span className="stat-label">Certificaciones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AGREGAR SECCION EXPERIENCIA LABORAL + BOTTON PARA DESCARGAR CV*/}
        

        {/* Skills Section */}
        <section className="skills-section">
          <div className="container">
            <h2 className="section-title">Habilidades Técnicas</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="category-title">Frontend</h3>
                <div className="skills-list">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Vue</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Bootstrap</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3 className="category-title">Backend</h3>
                <div className="skills-list">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">NoSQL</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">DevOps & Cloud</h3>
                <div className="skills-list">
                  <span className="skill-tag">Azure</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Windows</span>
                  <span className="skill-tag">Linux</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Diseño & Metodologías</h3>
                <div className="skills-list">
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">UI/UX</span>
                  <span className="skill-tag">Scrum</span>
                  <span className="skill-tag">Metodologías Ágiles</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Idiomas & Soft Skills</h3>
                <div className="skills-list">
                  <span className="skill-tag">Inglés Avanzado</span>
                  <span className="skill-tag">Trabajo en Equipo</span>
                  <span className="skill-tag">Comunicación</span>
                  <span className="skill-tag">Adaptabilidad</span>
                  <span className="skill-tag">Creatividad</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section">
          <div className="container">
            <h2 className="section-title">Educación</h2>
            <div className="education-timeline">
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3 className="timeline-title">Ingeniería Informática</h3>
                  <p className="timeline-period">2022 - 2025</p>
                  <p className="timeline-institution">Instituto de Ciencias Tecnológicas CIISA</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3 className="timeline-title">Técnico en Programación y Análisis de Sistemas</h3>
                  <p className="timeline-period">2022 - 2023</p>
                  <p className="timeline-institution">Instituto de Ciencias Tecnológicas CIISA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="certifications-section">
          <div className="container">
            <div className="certifications-header">
              <h2 className="section-title">Logros Profesionales</h2>
              <p className="certifications-subtitle">
                Certificaciones que respaldan mi compromiso con el aprendizaje continuo y la excelencia técnica
              </p>
            </div>
            <div className="certifications-grid">
              <div className="certification-card">
                <div className="certification-content">
                  <h3 className="certification-title">Azure Fundamentals</h3>
                  <p className="certification-description">
                    Certificación que valida mis conocimientos en servicios en la nube de Microsoft Azure
                  </p>
                  <div className="certification-footer">
                    <span className="certification-date">2023</span>
                    <span className="certification-issuer">Microsoft</span>
                  </div>
                </div>
              </div>
              <div className="certification-card">
                <div className="certification-content">
                  <h3 className="certification-title">Back End Development and APIs</h3>
                  <p className="certification-description">
                    Certificación de freeCodeCamp que valida mis habilidades en desarrollo backend y creación de APIs
                  </p>
                  <div className="certification-footer">
                    <span className="certification-date">2024</span>
                    <span className="certification-issuer">freeCodeCamp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}; 