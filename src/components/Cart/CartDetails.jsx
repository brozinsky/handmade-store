import React from 'react'
import './Cart.scss'

const CartDetails = () => {
    return (
        <div className="table">
            <table>
                <tr className="table__tr">
                    <th className="table__th">Produkt</th>
                    <th className="table__th">Ilość</th>
                    <th className="table__th">Cena</th>
                </tr>
                <tr className="table__tr">
                    <td className="table__td">Produkt 1</td>
                    <td className="table__td">2</td>
                    <td className="table__td">50,00</td>
                </tr>
            </table>
        </div>
    )
}

export default CartDetails
