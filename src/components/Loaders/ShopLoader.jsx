import React from 'react'
import ProductLoader from './ProductLoader'
import FilterPanel from '../Shop/FilterPanel'
import { CategoryContext } from '../../contexts/CategoryContext';
import LogoMobile from '../LogoMobile'
const Shop = () => {
    const [category,] = React.useContext(CategoryContext);

    return (
        <div className="shop">
            <LogoMobile />
            <div className='shop__products'>
                <FilterPanel />
                <h2 className="shop__title">{category
                    ? category : 'Wszystkie produkty'}</h2>
                <div className="shop__container">
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                </div>
            </div>
        </div>
    )
}

export default Shop