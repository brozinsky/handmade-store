import React from 'react';
import './Menu.scss';
import logo from '../../assets/logo.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

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
                <div className="menu__logo">
                    <img src={logo} alt='logo' />
                </div >
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
                            <a href="sklep">Sklep</a>
                        </li>
                        <li className='menu__tabs-item'>
                            <a href="kontakt">Kontakt</a>
                        </li>
                    </ul>
                    <div className="menu__social">
                        <a className="menu__social-icon"
                            href="https://www.instagram.com/p/CO-JBSwM25x/">
                            <InstagramIcon />
                        </a>
                        <a className="menu__social-icon"
                            href="">
                            <FacebookIcon />
                        </a>

                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Menu;