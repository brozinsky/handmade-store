import React, { useState, createContext } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
    const [category, setCategory] = useState(null);

    return (
        <CategoryContext.Provider value={[category, setCategory]}>
            {props.children}
        </CategoryContext.Provider>
    );
}