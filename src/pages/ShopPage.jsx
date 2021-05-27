import React from 'react'
import Footer from '../components/Footer/Footer'
import Shop from '../components/Shop/Shop'
import { ReactComponent as Bcg1 } from '../assets/bcg-1.svg'
import { ReactComponent as Bcg2 } from '../assets/bcg-2.svg'

const ShopPage = () => {
    return (
        <>
            <Bcg1 className="background-item background-item--1" />
            <Bcg2 className="background-item background-item--2" />
            <div className="wrapper">
                <Shop />
                <Footer />
            </div>
        </>
    )
}

export default ShopPage