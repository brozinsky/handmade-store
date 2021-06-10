import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <>
            <div className="white-space" />
            <section className="contact-section">
                <ContactInfo />
                <ContactForm />
            </section>
        </>
    )
}

export default Contact
