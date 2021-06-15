import React from 'react'
import { Link } from "react-router-dom"
import { CategoryContext } from '../../contexts/CategoryContext';

const CategoryItem = ({ name, logo, img, cat }) => {
    const [, setCategory] = React.useContext(CategoryContext);

    const handleCategoryChange = () => {
        setCategory(cat)
    }

    return (
        <Link onClick={handleCategoryChange}
            to={`/sklep`}
            className='category__item'>
            <div className="category__item-logo-wrap">
                <img className='category__item-logo' src={logo} alt="" />
                <h3 className='category__item-name'>{name}</h3>
            </div>
            <img className='category__item-img' src={img} alt="" />
        </Link>
    )
}

export default CategoryItem
