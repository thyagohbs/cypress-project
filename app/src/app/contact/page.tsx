"use client";
import type { NextPage } from 'next';
import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';

const Contact: NextPage = () => {
    return (
        <div>
            <Header />
            <main className="contact-main">
                <h1 className="contact-title" data-cy="contact-title">Entre em Contato</h1>
                <ContactForm />
            </main>
        </div>
    );
};

export default Contact;