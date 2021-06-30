import React from 'react'
import Summary from './Summary'
import CartDetails from './CartDetails'
// import Delivery from './Delivery'
import './Cart.scss'
import LogoMobile from '../LogoMobile'
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
    const [cart,] = React.useContext(CartContext)

    return (
        <>
            <div className="white-space" />
            <LogoMobile />
            <section className="cart">
                <h2 className="cart__title">Twój koszyk</h2>
                <div className="cart__wrap">
                    {/* <Delivery /> */}
                    <CartDetails />
                    <div className="summary">
                        {cart.length >= 1
                            ? <Summary />
                            : <h3 className="summary__subtitle">Twój koszyk jest pusty</h3>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
