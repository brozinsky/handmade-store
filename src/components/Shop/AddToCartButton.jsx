import React from 'react'
import { QueueProductsContext } from '../../contexts/QueueProductsContext';
import { CartContext } from '../../contexts/CartContext';

const AddToCartButton = () => {
    const [queueProducts, setQueueProducts] = React.useContext(QueueProductsContext)
    const [cart, setCart] = React.useContext(CartContext)

    console.log(cart)
    const handleAddToCart = () => {
        setCart(
            prevState => [...prevState, queueProducts]
        )
    }

    return (
        <button onClick={handleAddToCart}
            className="product__info-button">
            Dodaj do koszyka
        </button>
    )
}

export default AddToCartButton

