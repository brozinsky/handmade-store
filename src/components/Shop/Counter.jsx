import React from 'react'
import { QueueProductsContext } from '../../contexts/QueueProductsContext';

const Counter = ({ id, name, price }) => {
    const [queueProducts, setQueueProducts] = React.useContext(QueueProductsContext)

    // const handleAdd = () => {
    //     return count < 10 ? setCount(count + 1) : 10
    // }
    // const handleSub = () => {
    //     return count > 0 ? setCount(count - 1) : 0
    // }

    const handleAdd = () => {
        if (id !== queueProducts.id) {
            setQueueProducts(prevState => ({ ...prevState, count: 0 }))
        }
        if (queueProducts.count < 10) {
            setQueueProducts(prevState => ({ ...prevState, id, price, name, count: prevState.count + 1 }))
        }
    }

    const handleSub = () => {
        if (id !== queueProducts.id) {
            setQueueProducts(prevState => ({ ...prevState, count: 1 }))
        }
        if (queueProducts.count > 1) {
            setQueueProducts(prevState => ({ ...prevState, id, name, price, count: prevState.count - 1 }))
        }
    }

    return (
        <div className="details__input">
            <button onClick={handleSub} className="details__input-btn">-</button>
            <span className="details__input-number">{id == queueProducts.id ? queueProducts.count : 1}</span>
            <button onClick={handleAdd} className="details__input-btn">+</button>
        </div>
    )
}

export default Counter