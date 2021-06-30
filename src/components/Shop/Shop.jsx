import React from 'react'
import Product from './Product'
import FilterPanel from './FilterPanel'
import './Shop.scss'
import { CategoryContext } from '../../contexts/CategoryContext'
import LogoMobile from '../LogoMobile'
import { ProductDataContext } from '../../contexts/ProductDataContext'

const Shop = () => {
    const [productData,] = React.useContext(ProductDataContext)
    const [category,] = React.useContext(CategoryContext)

    return (
        <div className="shop">
            <LogoMobile />
            <div className='shop__products'>
                <FilterPanel />
                <h2 className="shop__title">{category
                    ? category : 'Wszystkie produkty'}</h2>
                <div className="shop__container">
                    {category === null
                        ? productData
                            .map(({ name, price, id, colors, images }) => {
                                return <Product name={name}
                                    price={price}
                                    id={id}
                                    colors={colors}
                                    key={id}
                                    images={images} />
                            })
                        : productData
                            .filter(product => product.category === category)
                            .map(({ name, price, id, colors, images }) => {
                                return <Product name={name}
                                    price={price}
                                    id={id}
                                    colors={colors}
                                    key={id}
                                    images={images} />
                            })}
                </div>
            </div>
        </div>
    )
}

export default Shop