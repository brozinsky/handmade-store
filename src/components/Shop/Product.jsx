import React from 'react'
import AddToCartButton from './AddToCartButton'
import './Shop.scss';
import { Link } from "react-router-dom"
import ColorPanel from './ColorPanel'
import Counter from './Counter'

const Product = ({ imgUrl, name, price, id, colors }) => {

    return (
        <div className="product">
            <Link to={`/sklep/${id}`} className="product__img-container">
                <img className="product__img"
                    src={`${imgUrl}`}
                    alt={name} />
            </Link>
            <div className="product__info">
                <Link to={`/sklep/${id}`}
                    href="./sklep/produkt"
                    className="product__info-name">{name}</Link>
                <Counter />
                <ColorPanel colors={colors} />
                <div className="product__info-row">
                    <div className="product__info-price-container">
                        <span className='product__info-price'>{price} zł</span>
                    </div>
                    <AddToCartButton />
                </div>
            </div>
        </div >
    )
}

export default Product