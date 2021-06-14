import React from 'react'
import { useParams } from "react-router-dom"
import { ReactComponent as Zigzag } from '../../assets/zigzag.svg'
import { productsData } from "../../data/productsData"
import Product from './Product'

const Category = () => {
    const { category } = useParams()
    const currentProduct = productsData.find(item => item.category === category)

    return (
        <div className='shop__products'>
            <h2 className="shop__title">Produkty:</h2>
            <Zigzag />
            <div className="shop__container">
                {productsData.map(({ name, price, img1, id }) => {
                    return <Product name={name} price={price} imgUrl={img1} id={id} />
                })}
            </div>
        </div>
    )
}

export default Category
