import React from 'react'
import ColorBtn from './ColorBtn'

const ColorPanel = ({ colors }) => {
    return (
        <>
            {/* <span> Dostępne kolory:</span> */}
            <div className="details__color-wrapper">
                {colors.map((color, index) => {
                    return <ColorBtn key={index} color={color} />
                })}
            </div>
        </>
    )
}

export default ColorPanel
