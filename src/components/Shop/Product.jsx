import React from 'react'
import './Shop.scss';
import { Link } from "react-router-dom"
import ProductForm from './ProductForm'
import { QueueProductsProvider } from '../../contexts/QueueProductsContext'

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
                <QueueProductsProvider>
                    <ProductForm colors={colors} id={id} name={name} price={price} />
                </QueueProductsProvider>
            </div>
        </div >
    )
}

export default Product