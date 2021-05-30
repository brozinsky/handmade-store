import React from 'react'
import AddToCartButton from './AddToCartButton'
import './Shop.scss';
import { Link } from "react-router-dom"

const Product = ({ imgUrl, name, price, sale, id, isOnSale, isNew }) => {

    return (
        <div className="product">
            <Link to={`/sklep/${id}`} className="product__img-container">
                <img className="product__img" src={`./img/${imgUrl}`} alt={name} />
                <div
                    className={
                        isOnSale ? 'icon icon--sale' : ''
                            || isNew ? 'icon icon--new' : ''}>
                    {isNew ? 'New' : null || isOnSale ? `-${sale}%` : null} </div>
            </Link>
            <div className="product__info">
                <Link to={`/sklep/${id}`} href="./sklep/produkt" className="product__info-name">{name}</Link>
                <div className="product__info-row">
                    <div className="product__info-price-container">
                        <span className={
                            isOnSale
                                ? 'product__info-price product__info-price--crossed'
                                : 'product__info-price'}>{price} zł</span>
                        {isOnSale ? <span className="product__info-price product__info-price--sale">
                            {price * sale / 100}  zł</span> : null}
                    </div>
                    <AddToCartButton />
                </div>
            </div>
        </div >
    )
}

export default Product