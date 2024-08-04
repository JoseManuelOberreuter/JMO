import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeroBanner } from '../Components/HeroBanner';
import '../Css/Contacto.css';

export const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Aquí puedes manejar el envío del formulario, por ejemplo, hacer una petición POST a una API
    };

    return (
        <main className='contacto-main'>
            <h1 className='contacto-titulo'>Contactame</h1>
            <form onSubmit={handleSubmit} className='contacto-form'>
                <div className='form-group'>
                    <label htmlFor='name'>Nombre:</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name' 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Correo Electrónico:</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Mensaje:</label>
                    <textarea 
                        id='message' 
                        name='message' 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </main>
    );
};
