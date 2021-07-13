import React from 'react'
import AdminProduct from './AdminProduct'
import { ProductDataContext } from '../../../contexts/ProductDataContext'

const ProductsList = () => {
    const [productData,] = React.useContext(ProductDataContext)

    return (
        <div className="admin-list">
            <h3 className="admin-title">Lista produktów</h3>
            {productData !== null ?
                productData.map(({ name, price, id, colors, images, description }) => {
                    return <AdminProduct
                        name={name}
                        price={price}
                        id={id}
                        colors={colors}
                        key={id}
                        images={images}
                        description={description}
                    />
                })
                : <span>Wczytuję...</span>}
        </div>
    )
}

export default ProductsList