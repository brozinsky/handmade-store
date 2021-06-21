import React from 'react'
import { QueueProductsContext } from '../../contexts/QueueProductsContext';

const ColorBtn = ({ color, id, name, price }) => {
    const [queueProducts, setQueueProducts] = React.useContext(QueueProductsContext)

    console.log(queueProducts)

    const handleChange = () => {
        if (color !== queueProducts.color) {
            setQueueProducts(prevState => ({ ...prevState, id, name, price, color: color }))
        }
    }

    return (
        <label className={`details__color-label`}>
            <input type="radio"
                name="color"
                onChange={handleChange}
                value={color}
                className={`details__color-input`} />
            <span class="swatch" style={{ background: `#${color}` }}></span>
        </label>
    )
}

export default ColorBtn
