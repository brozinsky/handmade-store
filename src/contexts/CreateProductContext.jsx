import React, { useState, createContext } from 'react';

export const CreateProductContext = createContext();

export const CreateProductProvider = (props) => {
    const [createProduct, setCreateProduct] = useState(
        {
            id: null,
            name: '',
            description: '',
            colors: [],
            images: [],
            price: null,
            category: 'Opaski'
        });

    return (
        <CreateProductContext.Provider value={[createProduct, setCreateProduct]}>
            {props.children}
        </CreateProductContext.Provider>
    );
}