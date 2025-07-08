
import React from 'react'
import CountContext from './CountContext'
import { useState } from 'react'
import { useContext } from 'react'

const CountProvider = ({children}) => {
    const [counter, setCounter] = useState(0)
    return (
        <CountContext.Provider value={{counter, setCounter}}>
            {children}
        </CountContext.Provider>
    )
}

export default CountProvider

export const useCounter = () => useContext(CountContext);
