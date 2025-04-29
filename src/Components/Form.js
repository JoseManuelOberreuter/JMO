import React, { useState } from 'react';
import '../Css/Contacto.css';

const FormContacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Por favor ingresa un email válido';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es requerido';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setSubmitStatus('sending');
        
        try {
            // Here you would typically send the form data to your backend
            // For now, we'll simulate an API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('');
            }, 5000);
            
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => {
                setSubmitStatus('');
            }, 5000);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Tu nombre"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="tu@email.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tu mensaje aquí..."
                    rows="5"
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button 
                type="submit" 
                className={`form-submit-btn ${submitStatus}`}
                disabled={submitStatus === 'sending'}
            >
                {submitStatus === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {submitStatus === 'success' && (
                <div className="form-status success">
                    ¡Mensaje enviado con éxito! Te responderé pronto.
                </div>
            )}
            
            {submitStatus === 'error' && (
                <div className="form-status error">
                    Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                </div>
            )}
        </form>
    );
};

export default FormContacto;
