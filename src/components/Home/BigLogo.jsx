import React from 'react'
import logoBig from '../../assets/logo-big.png'

const BigLogo = () => {
    return (
        <div className='logo-big'>
            <img className='logo-big__image' src={logoBig} alt="Duże logo" />
        </div>
    )
}

export default BigLogo