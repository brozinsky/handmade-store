import React from 'react'
import { Link } from "react-router-dom"

const CategoryItem = ({ name, logo, img, category }) => {
    return (
        <Link to={`/sklep/${category}`} className='category__item'>
            <div className="category__item-logo-wrap">
                <img className='category__item-logo' src={logo} alt="" />
                <h3 className='category__item-name'>{name}</h3>
            </div>
            <img className='category__item-img' src={img} alt="" />
        </Link>
    )
}

export default CategoryItem
