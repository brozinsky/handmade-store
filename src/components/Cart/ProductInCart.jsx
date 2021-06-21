import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ClearIcon from '@material-ui/icons/Clear';
import CloseIcon from '@material-ui/icons/Close';

const ProductInCart = ({ quantity, color, price, name }) => {
    const totalPrice = price * quantity

    const handleClick = () => {

    }

    return (
        <tr className="table__tr">
            <td className="table__td-1">{name}</td>
            <td className="table__td">{quantity}</td>
            <td className="table__td">
                <div style={{ background: `#${color}` }} className="table__color"></div>
            </td>
            <td className="table__td">{totalPrice},00 zł</td>
            <td className="table__td-2" onClick={handleClick}><ClearIcon className="table__delete" /></td>
        </tr>
    )
}

export default ProductInCart
