import React, { useState, createContext } from 'react';

export const ZoomContext = createContext();

export const ZoomProvider = (props) => {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <ZoomContext.Provider value={[isZoomed, setIsZoomed]}>
            {props.children}
        </ZoomContext.Provider>
    );
}