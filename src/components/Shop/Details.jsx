import React from 'react'
import './Details.scss'
import { useParams } from "react-router-dom"
import { productsData } from "../../data/productsData"
import LogoMobile from '../LogoMobile'
import ProductForm from './ProductForm'
import { QueueProductsProvider } from '../../contexts/QueueProductsContext'

const Details = () => {
    const { id } = useParams()
    const currentProduct = productsData.find(item => item.id === id)

    return (
        <>
            <LogoMobile />
            <div className="details__wrap">
                <div className="details">
                    <div className="details__top">
                        <div className="details__image-container">
                            <div className="details__image">
                                <img className="product__img" src={`${currentProduct.img1}`} alt="Product" />
                            </div>
                            <div className="details__image-small-container">
                                <img className="details__image-small"
                                    src={`${currentProduct.img2}`} alt="Product" />
                                <img className="details__image-small" src={`${currentProduct.img3}`} alt="Product" />
                                <img className="details__image-small" src={`${currentProduct.img4}`} alt="Product" />
                            </div>
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
