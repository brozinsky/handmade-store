import React from 'react'
import './Cart.scss'
import { CartContext } from '../../contexts/CartContext';

const Item = ({ value, title }) => {
    return (
        <div className="summary__item-wrap">
            <span className="summary__item">
                {title}
            </span>
            <span className="summary__total">
                {value},00 zł
            </span>
        </div>
    )
}

const Summary = () => {
    const [cart,] = React.useContext(CartContext)

    const [sumPrice, setSumPrice] = React.useState(
        { name: 'Suma', value: 0 },
    )

    const [deliveryPrice, setDeliveryPrice] = React.useState(
        { name: 'Dostawa', value: 10 }
    )

    const [totalPrice, setTotalPrice] = React.useState(
        { name: 'Razem', value: 0 }
    )

    //update items sum
    React.useEffect(() => {
        let total = cart.reduce(function (accumulator, item) {
            return accumulator + item.count * item.price;
        }, 0);

        setSumPrice(prevState => ({ ...prevState, value: total }))
    }, [cart])


    //update total price
    React.useEffect(() => {
        let total = sumPrice.value + deliveryPrice.value
        setTotalPrice(prevState => ({ ...prevState, value: total }))
    }, [sumPrice.value])

    return (
        <>
            <hr className="summary__hr" />
            <Item title={sumPrice.name} value={sumPrice.value} />
            <Item title={deliveryPrice.name} value={deliveryPrice.value} />
            <hr className="summary__hr" />
            <Item title={totalPrice.name} value={totalPrice.value} />
        </>
    )
}

export default Summary
