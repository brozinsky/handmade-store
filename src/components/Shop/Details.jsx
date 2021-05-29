import React from 'react'
import './Details.scss'
import { useParams } from "react-router-dom"
import { productsData } from "../../data/productsData"
import AddToCartButton from './AddToCartButton'

const Details = () => {
    const { id } = useParams()
    const currentProduct = productsData.find(item => item.id === id)
    console.log(currentProduct)
    console.log(currentProduct)

    return (
        <div className="details__wrap">
            <div className="details">
                <div className="details__top">
                    <div className="details__image-container">
                        <div className="details__image">
                            <img className="product__img" src={`/img/${currentProduct.img1}`} alt="Product" />
                        </div>
                        <div className="details__image-small-container">
                            <img className="details__image-small"
                                src={`/img/${currentProduct.img2}`} alt="Product" />
                            <img className="details__image-small" src={`/img/${currentProduct.img3}`} alt="Product" />
                            <img className="details__image-small" src={`/img/${currentProduct.img4}`} alt="Product" />
                        </div>
                    </div>
                    <div className="details__info-container">
                        <h3 className="details__title">{currentProduct.name}</h3>
                        <h4 className="details__price">{currentProduct.price},00 zł</h4>
                        <div className="details__input">
                            <button className="details__input-btn">-</button>
                            <span className="details__input-number">1</span>
                            <button className="details__input-btn">+</button>
                        </div>
                        <div className="details__color-wrapper">
                            {currentProduct.colors.map((color) => { return <div className={`details__color details__color--${color}`}></div> })}
                        </div>
                        <AddToCartButton />
                    </div>
                </div>
                <h4 className="details__text-title">Opis:</h4>
                <p className="details__text">{currentProduct.description}</p>
            </div>
        </div>
    )
}

export default Details