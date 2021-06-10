import React from 'react'
import Summary from './Summary'
import CartDetails from './CartDetails'
import Delivery from './Delivery'
import PaymentDetails from './PaymentDetails'
import './Cart.scss'

const Cart = () => {
    return (
        <>
            <div className="white-space" />
            <section className="cart">
                <h2 className="cart__title">Twój koszyk</h2>
                <div className="cart__wrap">
                    <Delivery />
                    <PaymentDetails />
                    <CartDetails />
                    <Summary />
                </div>
            </section>
        </>
    )
}

export default Cart
