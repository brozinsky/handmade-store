import React from 'react'
import Details from '../components/Shop/Details'
import Footer from '../components/Footer/Footer'
import { ZoomProvider } from '../contexts/ZoomContext'

const ProductPage = () => {
    return (
        <>
            <section className="wrapper">
                <ZoomProvider>
                    <Details />
                </ZoomProvider>
                <Footer />
            </section>
        </>
    )
}

export default ProductPage
