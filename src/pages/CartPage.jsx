import React from 'react'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'

const CartPage = () => {
    return (
        <div className="wrapper">
            Koszyk
            <Cart />
            <Footer />
        </div>
    )
}

export default CartPage