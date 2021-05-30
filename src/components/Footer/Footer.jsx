import React from 'react'
import './Footer.scss';
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
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
                <Link to={`/`} className="footer__logo">
                    <img className="footer__logo-img" src={logo} alt='logo' />
                </Link >
                <div className="footer__social-wrapper">
                    Obserwuj nas:
                <div className="footer__social-container">
                        <a href="https://www.instagram.com/sznurkowe_krolowe/">
                            <InstagramIcon className="footer__social-icon" />
                        </a>
                        <a href="https://www.facebook.com/Sznurkowe-Królowe-110655740773640">
                            <FacebookIcon className="footer__social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="footer__hr" />
            <div className="footer__copyright">
                <small className="footer__copyright-small"> &copy; 2021 Wszystkie prawa zastrzeżone</small>
            </div>

        </footer>
    )
}

export default Footer