import React from 'react'
import { CategoryContext } from '../../contexts/CategoryContext';

const FilterButton = ({ name, cat }) => {
    const [category, setCategory] = React.useContext(CategoryContext);

    const handleClick = () => {
        setCategory(cat)
    }

    return (
        <button
            onClick={handleClick}
            className={category === cat
                ? 'filter__button filter__button--active'
                : 'filter__button'
            }>
            <li >{name} /</li>
        </button>
    )
}

export default FilterButton
