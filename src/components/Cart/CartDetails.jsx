import React from 'react'
import './Cart.scss'
import { CartContext } from '../../contexts/CartContext';
import ProductInCart from './ProductInCart';

const tableContent = ['Ilość', 'Kolor', 'Cena']

const CartDetails = () => {
    const [cart,] = React.useContext(CartContext)
    return (
        <table className="table">
            <tr className="table__tr">
                <th className="table__th-2"></th>
                <th className="table__th-1">Produkt</th>
                {tableContent.map((title, index) => {
                    return <th className="table__th" key={index}>{title}</th>
                })}
            </tr>
            {cart.map(({ color, count, id, name, price }, index) => {
                return <ProductInCart color={color}
                    name={name}
                    key={index}
                    quantity={count}
                    price={price} />
            })}
        </table>
    )
}

export default CartDetails
