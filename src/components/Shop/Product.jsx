import React from 'react'
import './Shop.scss';
import { Link } from "react-router-dom"

const Product = ({ name, price, id, images }) => {
    return (
        <div className="product">
            <Link to={`/sklep/${id}`} className="product__img-container">
                <img className="product__img"
                    src={`${images[0]}`}
                    alt={name} />
                <img className="product__img-2"
                    src={`${images[1]}`}
                    alt={name} />
            </Link>
            <div className="product__info">
                <Link to={`/sklep/${id}`}
                    href="./sklep/produkt"
                    className="product__info-name">{name}</Link>
                <div className="product__info-price">{price.toFixed(2)} zł</div>

                {/* <QueueProductsProvider>
                    <ProductForm colors={colors} id={id} name={name} price={price} />
                </QueueProductsProvider> */}
            </div>
        </div >
    )
}

export default Product