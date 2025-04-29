import React, { useState } from 'react';
import '../Css/Contacto.css';

export const FormContacto = () => {
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

        // Crear un formulario virtual y enviar los datos
        const form = document.createElement('form');
        form.action = "https://formsubmit.co/jose.manuel.oberreuter@gmail.com";
        form.method = "POST";

        for (const key in formData) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = formData[key];
            form.appendChild(input);
        }

        const subjectInput = document.createElement('input');
        subjectInput.type = 'hidden';
        subjectInput.name = '_subject';
        subjectInput.value = 'Nuevo mensaje JMO';
        form.appendChild(subjectInput);

        document.body.appendChild(form);
        form.submit();
    };

    return (
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
    );
};
