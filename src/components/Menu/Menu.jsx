import React from 'react'
import './Menu.scss'
import logo from '../../assets/logo.png'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import { NavLink } from "react-router-dom";
import { CategoryContext } from '../../contexts/CategoryContext';

const menuItems = [
    { name: 'Home', linkTo: `/` },
    { name: 'Sklep', linkTo: `/sklep` },
    { name: 'Kontakt', linkTo: `/kontakt` },
    { name: 'O mnie', linkTo: `/o-mnie` },

]

const Menu = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [, setCategory] = React.useContext(CategoryContext);

    const handleBurger = () => {
        setIsOpen(current => !current)
    }

    const handleCategoryReset = () => {
        setCategory(null)
        setIsOpen(current => !current)
    }

    return (
        <nav className={isOpen
            ? `menu menu--scroll`
            : `menu`} >
            <div className='menu__wrapper'>
                <NavLink to='/' className="menu__logo">
                    <img className="menu__logo-img" src={logo} alt='logo' />
                </NavLink >
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
                        {menuItems.map(({ linkTo, name }, index) => {
                            return <li key={index} className='menu__tabs-item'>
                                <NavLink onClick={handleCategoryReset} to={linkTo} >{name}</NavLink>
                            </li>
                        })}
                        <li className='menu__tabs-item menu__tabs-item-cart'>
                            <NavLink onClick={handleCategoryReset} className='menu__tabs-item-cart' to={`/koszyk`} >
                                <LocalMallIcon />
                                <div className="menu__tabs-item-quantity">1</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Menu;