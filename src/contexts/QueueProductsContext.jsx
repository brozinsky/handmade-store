import React, { useState, createContext } from 'react';

export const QueueProductsContext = createContext();

export const QueueProductsProvider = (props) => {
    const [queueProducts, setQueueProducts] = useState({ id: null, color: null, count: 1 });

    return (
        <QueueProductsContext.Provider value={[queueProducts, setQueueProducts]}>
            {props.children}
        </QueueProductsContext.Provider>
    );
}