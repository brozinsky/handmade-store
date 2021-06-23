import React from 'react'
import Product from './Product'
import FilterPanel from './FilterPanel'
import './Shop.scss';
import { ReactComponent as Zigzag } from '../../assets/zigzag.svg'
import { productsData } from '../../data/productsData.js'
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
                <Zigzag />
                <div className="shop__container">
                    {category === null
                        ? productsData
                            .map(({ name, price, id, colors, images }) => {
                                return <Product name={name}
                                    price={price}
                                    id={id}
                                    colors={colors}
                                    key={id}
                                    images={images} />
                            })
                        : productsData
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