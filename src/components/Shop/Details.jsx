import React from 'react'
import './Details.scss'
import { useParams } from "react-router-dom"
import { productsData } from "../../data/productsData"
import LogoMobile from '../LogoMobile'
import ProductForm from './ProductForm'
import DetailsCarousel from './DetailsCarousel'
import DetailsZoom from './DetailsZoom'
import { ZoomContext } from '../../contexts/ZoomContext'

import { QueueProductsProvider } from '../../contexts/QueueProductsContext'

const Details = () => {
    const [isZoomed,] = React.useContext(ZoomContext)
    const { id } = useParams()
    const currentProduct = productsData.find(item => item.id === id)


    return (
        <>
            <LogoMobile />
            {isZoomed ? <DetailsZoom images={currentProduct.images} /> : null}
            <div className="details__wrap">
                <div className="details">
                    <div className="details__top">
                        <div className="details__image-container">
                            <DetailsCarousel images={currentProduct.images} />
                        </div>
                        <div className="details__info-container">
                            <h3 className="details__title">{currentProduct.name}</h3>
                            <h4 className="details__price">{currentProduct.price},00 zł</h4>
                            <QueueProductsProvider>
                                <ProductForm colors={currentProduct.colors} id={id} name={currentProduct.name} price={currentProduct.price} />
                            </QueueProductsProvider>
                        </div>
                    </div>
                    <h4 className="details__text-title">Opis:</h4>
                    <p className="details__text">{currentProduct.description}</p>
                </div>
            </div>
        </>
    )
}

export default Details
