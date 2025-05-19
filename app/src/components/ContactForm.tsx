import React, { useState } from 'react';

interface FormState {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulando envio
        setTimeout(() => {
            setSubmitted(true);
        }, 500);
    };

    return (
        <div className="contact-form-container">
            {submitted ? (
                <div data-cy="success-message" className="contact-success">
                    Mensagem enviada com sucesso!
                </div>
            ) : (
                <form onSubmit={handleSubmit} data-cy="contact-form">
                    <h2 style={{ display: 'none' }}>Entre em contato</h2>
                    <div>
                        <label className="contact-form-label">Nome</label>
                        <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="contact-form-input"
                            required
                            data-cy="name-input"
                        />
                    </div>
                    <div>
                        <label className="contact-form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="contact-form-input"
                            required
                            data-cy="email-input"
                        />
                    </div>
                    <div>
                        <label className="contact-form-label">Mensagem</label>
                        <textarea
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            className="contact-form-textarea"
                            rows={4}
                            required
                            data-cy="message-input"
                        />
                    </div>
                    <button
                        type="submit"
                        className="contact-form-button"
                        data-cy="submit-button"
                    >
                        Enviar
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;