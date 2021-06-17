import React from 'react'

const ColorBtn = ({ color }) => {
    return (
        <button style={{ background: `#${color}` }}
            className={`details__color details__color--${color}`}></button>
    )
}

export default ColorBtn
