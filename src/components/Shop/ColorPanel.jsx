import React from 'react'
import ColorBtn from './ColorBtn'

const ColorPanel = ({ colors, id, price, name }) => {

    return (
        <>
            {/* <span> Dostępne kolory:</span> */}
            <div className="details__color-wrapper">
                {colors.map((color, index) => {
                    return <ColorBtn key={index} id={id} color={color} name={name} price={price} />
                })}
            </div>
        </>
    )
}

export default ColorPanel
