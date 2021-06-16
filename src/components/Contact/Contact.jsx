import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import LogoMobile from '../LogoMobile'

const Contact = () => {
    return (
        <>
            <div className="white-space" />
            <section className="contact-section">
                <LogoMobile />
                <ContactInfo />
                <ContactForm />
            </section>
        </>
    )
}

export default Contact
