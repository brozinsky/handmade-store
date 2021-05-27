import React from 'react'
import './Menu.scss'
import logo from '../../assets/logo.png'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import { Link } from "react-router-dom";

const Menu = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleBurger = () => {
        setIsOpen(current => !current)
    }

    return (
        <nav className={isOpen
            ? `menu menu--scroll`
            : `menu`} >
            <div className='menu__wrapper'>
                <Link to={`/`} className="menu__logo">
                    <img src={logo} alt='logo' />
                </Link >
                <div
                    onClick={handleBurger}
                    className="menu__burger-menu">
                    <span
                        className={`menu__burger
                        ${isOpen ? 'menu__burger--open' : ''}`}></span>
                </div>
                <div className={`menu__container
                ${isOpen ? 'menu__container--open' : ''}`}>
                    <ul className={`menu__tabs
                        ${isOpen ? 'menu__tabs--open' : ''}`}>
                        <li className='menu__tabs-item'>
                            <Link to={`/sklep`} >Sklep</Link>
                        </li>
                        <li className='menu__tabs-item'>
                            <Link to={`/kontakt`} >Kontakt</Link>
                        </li>
                        <li className='menu__tabs-item'>
                            <Link to={`/koszyk`} >
                                <LocalMallIcon />
                            </Link>
                        </li>
                    </ul>
                    <div className="menu__social">
                        <a className="menu__social-icon"
                            href="https://www.instagram.com/sznurkowe_krolowe/">
                            <InstagramIcon className="menu__social-icon-font" />
                        </a>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Menu;