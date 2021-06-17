import React from 'react'
import ColorBtn from './ColorBtn'

const ColorPanel = ({ colors, id }) => {

    return (
        <>
            {/* <span> Dostępne kolory:</span> */}
            <div className="details__color-wrapper">
                {colors.map((color, index) => {
                    return <ColorBtn key={index} id={id} color={color} />
                })}
            </div>
        </>
    )
}

export default ColorPanel
