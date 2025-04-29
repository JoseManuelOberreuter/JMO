import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../Css/WhatsAppButton.css';

export const WhatsAppButton = () => {
    const phoneNumber = '+56990569880';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-button"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
}; 