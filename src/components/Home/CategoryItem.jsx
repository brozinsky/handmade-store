import React from 'react'

const CategoryItem = ({ name, logo, img }) => {
    return (
        <div className='category__item'>
            <div className="category__item-logo-wrap">
                <img className='category__item-logo' src={logo} alt="" />
                <h3 className='category__item-name'>{name}</h3>
            </div>
            <img className='category__item-img' src={img} alt="" />
        </div>
    )
}

export default CategoryItem
