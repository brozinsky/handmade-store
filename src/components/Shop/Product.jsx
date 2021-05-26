import React, { useContext } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import defaultImg from '../../assets/product-default.png'
import './Shop.scss';


const Product = ({ category, imgUrl, name, price, sale, id, isOnSale, isNew }) => {

    return (
        <div className="product">
            <div className="product__img-container">
                <img className="product__img" src={defaultImg} alt="Product" />
                <div
                    className={
                        isOnSale ? 'icon icon--sale' : ''
                            || isNew ? 'icon icon--new' : ''}>
                    {isNew ? 'New' : null || isOnSale ? `-${sale}%` : null} </div>
            </div>
            <div className="product__info">
                <span className="product__info-name">{name}</span>
                <div className="product__info-row">
                    <div className="product__info-price-container">
                        <span className={
                            isOnSale
                                ? 'product__info-price product__info-price--crossed'
                                : 'product__info-price'}>{price} zł</span>
                        {isOnSale ? <span className="product__info-price product__info-price--sale">
                            {price * sale / 100}  zł</span> : null}
                    </div>
                    <button
                        className="product__info-button"
                        startIcon={<AddShoppingCartIcon />}
                    >Dodaj do koszyka</button>
                </div>
            </div>
        </div >
    )
}

export default Product