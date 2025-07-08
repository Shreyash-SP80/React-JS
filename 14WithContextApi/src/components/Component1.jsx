import React, { useContext } from 'react'
import CountContext from '../context/CountContext'

const Component1 = () => {
  const value = useContext(CountContext)
  return (
    <>
       [This is an Component 1  inside button component count: {value.count}]
    </>
  )
}

export default Component1
