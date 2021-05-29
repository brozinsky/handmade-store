import React from 'react'

const PaymentDetails = () => {
    return (
        <div>
            <input type="radio" value="blik" name="payment" /> Blik
            <input type="radio" value="card" name="payment" /> Karta
            <input type="radio" value="transfer" name="payment" /> Przelew tradycyjny
            <button>Zapłać</button>
        </div>
    )
}

export default PaymentDetails
