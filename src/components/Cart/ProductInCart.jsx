import React from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import { CartContext } from '../../contexts/CartContext';

const ProductInCart = ({ quantity, color, price, name }) => {
    const [cart, setCart] = React.useContext(CartContext)

    const totalPrice = price * quantity

    const handleClick = () => {
        setCart(cart.filter((element) => element.color !== color))
    }

    return (
        <tr className="table__tr">
            <td className="table__td-2" onClick={handleClick}><ClearIcon className="table__delete" /></td>
            <td className="table__td-1">{name}</td>
            <td className="table__td">{quantity}</td>
            <td className="table__td">
                <div style={{ background: `#${color}` }} className="table__color"></div>
            </td>
            <td className="table__td">{totalPrice},00 zł</td>
        </tr>
    )
}

export default ProductInCart
