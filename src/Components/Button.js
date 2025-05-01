import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Button.css';

export const Button = ({ 
  to, 
  variant = 'primary', 
  children, 
  onClick,
  className = '',
  type = 'button',
  disabled = false
}) => {
  // Si hay una ruta, renderiza un Link, sino un botón
  if (to) {
    return (
      <Link 
        to={to} 
        className={`btn btn-${variant} ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  
  // Si no hay ruta, renderiza un botón normal
  return (
    <button 
      type={type} 
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}; 