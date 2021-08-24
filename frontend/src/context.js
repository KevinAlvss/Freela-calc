import React, { createContext, useContext, useState } from 'react';

export const FetchContext = createContext();

export function FetchProvider({children}){
    const [change, setChange] = useState(false);
    
    return(
        <FetchContext.Provider value={{
            change,
            setChange
        }} >
            {children}
        </FetchContext.Provider>
    )
}

export const useFetch = () => {
    const context = useContext(FetchContext);
    const { change, setChange } = context;
    return { change, setChange }
}