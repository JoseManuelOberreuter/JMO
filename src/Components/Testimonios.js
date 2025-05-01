import React from 'react';
import '../Css/Testimonios.css';
import { FaStar } from 'react-icons/fa';

const testimoniosData = [
  {
    id: 1,
    nombre: "Carlos Reyes",
    empresa: "Demoliciones CRRB",
    cargo: "Director General",
    texto: "Un trabajo excepcional. El enfoque profesional transformó nuestra presencia online, aumentando consultas y mejorando la imagen de nuestra empresa significativamente.",
    estrellas: 5
  },
  {
    id: 2,
    nombre: "Paula Araya",
    empresa: "Centro de Fisioterapia",
    cargo: "Fisioterapeuta",
    texto: "Diseño que captura perfectamente la esencia de mi práctica. El sistema de formulario de contacto ha simplificado toda la gestión de mi consulta. Totalmente recomendado.",
    estrellas: 5
  },
  {
    id: 3,
    nombre: "Santiago López",
    empresa: "Estudio de Arquitectura",
    cargo: "Arquitecto Principal",
    texto: "Refleja a la perfección la estética y funcionalidad que buscábamos. Excelente capacidad para traducir conceptos arquitectónicos en un diseño web elegante y moderno.",
    estrellas: 5
  }
];

const Estrellas = ({ cantidad }) => {
  return (
    <div className="estrellas">
      {[...Array(cantidad)].map((_, i) => (
        <FaStar key={i} className="estrella-icon" />
      ))}
    </div>
  );
};

const TestimonioCard = ({ testimonio }) => {
  return (
    <div className="testimonio-card">
      <div className="testimonio-contenido">
        <Estrellas cantidad={testimonio.estrellas} />
        <p className="testimonio-texto">"{testimonio.texto}"</p>
      </div>
      <div className="testimonio-autor">
        <div className="testimonio-info">
          <h3 className="testimonio-nombre">{testimonio.nombre}</h3>
          <p className="testimonio-empresa">{testimonio.cargo}, {testimonio.empresa}</p>
        </div>
      </div>
    </div>
  );
};

export const Testimonios = () => {
  return (
    <section className="testimonios-section">
      <div className="container">
        <h2 className="testimonios-title">Lo que dicen mis clientes</h2>
        <p className="testimonios-subtitle">
          Opiniones de profesionales que han confiado en mis servicios para sus proyectos digitales
        </p>
        
        <div className="testimonios-grid">
          {testimoniosData.map(testimonio => (
            <TestimonioCard key={testimonio.id} testimonio={testimonio} />
          ))}
        </div>
      </div>
    </section>
  );
}; 