import React from 'react'
import './Details.scss'
import { useParams } from "react-router-dom"
import LogoMobile from '../LogoMobile'
import ProductForm from './ProductForm'
import DetailsCarousel from './DetailsCarousel'
import DetailsZoom from './DetailsZoom'
import { ZoomContext } from '../../contexts/ZoomContext'
import { ProductDataContext } from '../../contexts/ProductDataContext'
import { QueueProductsProvider } from '../../contexts/QueueProductsContext'
import { PopupProvider } from '../../contexts/PopupContext'

const Details = () => {
    const [isZoomed,] = React.useContext(ZoomContext)
    const { id } = useParams()
    const [productData,] = React.useContext(ProductDataContext)
    const currentProduct = productData.find(item => item.id == id)

    return (
        <>
            <LogoMobile />
            {isZoomed
                ? <DetailsZoom images={currentProduct.images} />
                : null}
            <div className="details__wrap">
                <div className="details">
                    <div className="details__top">
                        <div className="details__image-container">
                            <DetailsCarousel images={currentProduct.images} />
                        </div>
                        <div className="details__info-container">
                            <h3 className="details__title">{currentProduct.name}</h3>
                            <h4 className="details__price">
                                {currentProduct.price.toFixed(2)} zł
                            </h4>
                            <QueueProductsProvider>
                                <PopupProvider>
                                    <ProductForm colors={currentProduct.colors}
                                        id={id}
                                        name={currentProduct.name}
                                        price={currentProduct.price} />
                                </PopupProvider>
                            </QueueProductsProvider>
                        </div>
                    </div>
                    <h4 className="details__text-title">Opis:</h4>
                    <p className="details__text">
                        {currentProduct.description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Details
