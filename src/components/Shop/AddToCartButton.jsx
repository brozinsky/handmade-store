import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const AddToCartButton = () => {
    return (
        <button
            className="product__info-button"
            startIcon={<AddShoppingCartIcon />}>
            Dodaj do koszyka
        </button>
    )
}

export default AddToCartButton

