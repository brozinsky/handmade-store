import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    return (
        <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            {props.children}
        </AuthContext.Provider>
    );
}