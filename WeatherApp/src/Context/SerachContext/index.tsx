import React, { createContext, useState, useEffect } from 'react'

const SearchContext = createContext<ISearchList>({
    searchText:(txt: string): void => {},
    text:''
});

interface Props{
    children: JSX.Element | Array<JSX.Element>
}

const SearchContextProvider = ({children}: Props) => {
    
    const [text, setText] = useState('seoul')

    const searchText = (txt: string):void => {
        setText(txt);
    }
    



    return (
        <SearchContext.Provider
        value={{
            searchText,
            text
        }}
        >
        {children}
        </SearchContext.Provider>
    )
}

export {SearchContext, SearchContextProvider};
