import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Css/Contacto.css';

const FormContacto = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        phone: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.from_name.trim()) {
            newErrors.from_name = 'El nombre es requerido';
        }
        
        if (!formData.from_email.trim()) {
            newErrors.from_email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
            newErrors.from_email = 'Por favor ingresa un email válido';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'El teléfono es requerido';
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
            // Verificar que las variables de entorno estén disponibles
            if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || !process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
                throw new Error('Faltan credenciales de EmailJS. Por favor, verifica que las variables de entorno estén configuradas correctamente.');
            }

            const result = await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            console.log('EmailJS Response:', result); // Para debugging

            if (result.text === 'OK') {
                setSubmitStatus('success');
                setFormData({ from_name: '', from_email: '', phone: '', message: '' });
            } else {
                throw new Error('Error al enviar el mensaje');
            }
            
        } catch (error) {
            console.error('Error detallado:', error);
            setSubmitStatus('error');
        }
    };

    const clearStatus = () => {
        setSubmitStatus('');
    };

    return (
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="from_name">Nombre</label>
                <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    className={errors.from_name ? 'error' : ''}
                    placeholder="Tu nombre"
                />
                {errors.from_name && <span className="error-message">{errors.from_name}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="from_email">Email</label>
                <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    className={errors.from_email ? 'error' : ''}
                    placeholder="tu@email.com"
                />
                {errors.from_email && <span className="error-message">{errors.from_email}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="Tu número de teléfono"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
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
                    <button 
                        type="button" 
                        onClick={clearStatus}
                        className="close-status-btn"
                        aria-label="Cerrar mensaje"
                    >
                        ×
                    </button>
                </div>
            )}
            
            {submitStatus === 'error' && (
                <div className="form-status error">
                    Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                    <button 
                        type="button" 
                        onClick={clearStatus}
                        className="close-status-btn"
                        aria-label="Cerrar mensaje"
                    >
                        ×
                    </button>
                </div>
            )}
        </form>
    );
};

export default FormContacto;
