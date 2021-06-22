import React from 'react'
import ColorBtn from './ColorBtn'
import { QueueProductsContext } from '../../contexts/QueueProductsContext';
import { CartContext } from '../../contexts/CartContext';



const ProductForm = ({ colors, name, price, id }) => {
    const [queueProducts, setQueueProducts] = React.useContext(QueueProductsContext)
    const [, setCart] = React.useContext(CartContext)

    const handleChange = (e) => {
        setQueueProducts(prevState => ({ ...prevState, count: e.target.value }))
        console.log(queueProducts)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (queueProducts.id !== null) {
            setCart(
                prevState => [...prevState, queueProducts]
            )
            alert(`Dodano do koszyka ${queueProducts.name} - ${queueProducts.count}szt`)
        } else {
            alert('Proszę wybrać kolor')
        }
    }

    return (
        <form className="details__form" onSubmit={handleSubmit}>
            <div className="details__color-wrapper">
                {colors.map((color, index) => {
                    return <ColorBtn key={index} id={id} color={color} name={name} price={price} />
                })}
            </div>
            <input onChange={handleChange}
                className="details__input-area"
                type="number"
                id="count"
                name="count"
                placeholder={1}
                defaultValue={1}
                min="1" max="10" />
            <input className="details__input-button" type="submit" value="Dodaj do koszyka" />
        </form>
    )
}

export default ProductForm
