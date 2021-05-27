import React from 'react'
import './Contact.scss'

const ContactForm = () => {
    return (
        <form className="form">
            <div className="form__input-wrap">
                <input
                    className="form__input"
                    placeholder="Imię"
                    type="text"
                    name='name'
                    required
                />
                <input
                    className="form__input"
                    placeholder="e-mail"
                    id="email"
                    type="email"
                    name="email"
                    required
                />
            </div>
            <textarea
                className="form__textarea"
                placeholder="Twoja wiadomość..."
                name="message"
                id="message"
                cols="30"
                rows="10"
                required
            ></textarea>
            <button
                className="form__button"
                type="submit"
            >Wyślij</button>
        </form>
    )
}

export default ContactForm
