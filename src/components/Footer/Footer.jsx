import React from 'react'
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social-container"></div>
            <ul className="footer__links">
                <li className="footer__links-li">
                    <a href="regulamin"> Regulamin</a></li>
                <li className="footer__links-li">
                    <a href="polityka"> Polityka </a>Prywatności</li>
                <li className="footer__links-li">
                    <a href="wysylka"> Wysyłka</a></li>
                <li className="footer__links-li">
                    <a href="kontakt"> Kontakt</a></li>
            </ul>
            <div className="footer__copyright">
                <small className="footer__copyright-small"> &copy; 20201 Wszysykie prawa zastrzeżone</small>
            </div>

        </footer>
    )
}

export default Footer