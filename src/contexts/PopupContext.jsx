import React, { useState, createContext } from 'react';

export const PopupContext = createContext();

export const PopupProvider = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <PopupContext.Provider value={[open, setOpen]}>
            {props.children}
        </PopupContext.Provider>
    );
}