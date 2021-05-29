import React from 'react'
import './Cart.scss'

const Summary = () => {
    return (
        <div className="summary">
            <h3 className="summary__title">
                Koszyk
            </h3>
            <hr className="summary__hr" />
            <div className="summary__item-wrap">
                <span className="summary__item">
                    Suma
                </span>
                <span className="summary__total">
                    50,00 zł
                </span>
            </div>
            <hr className="summary__hr" />
            <div className="summary__item-wrap">
                <span className="summary__item">
                    Dostawa
                </span>
                <span className="summary__total">
                    10,00 zł
                </span>
            </div>
            <hr className="summary__hr" />
            <div className="summary__item-wrap">
                <span className="summary__total">
                    Do zapłaty
                </span>
                <span className="summary__total">
                    60,00 zł
                </span>
            </div>
        </div>
    )
}

export default Summary
