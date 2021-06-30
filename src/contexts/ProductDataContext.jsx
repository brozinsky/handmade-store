import React, { useState, createContext } from 'react';

export const ProductDataContext = createContext();

export const ProductDataProvider = (props) => {
    const [productData, setProductData] = useState(null);

    return (
        <ProductDataContext.Provider value={[productData, setProductData]}>
            {props.children}
        </ProductDataContext.Provider>
    );
}