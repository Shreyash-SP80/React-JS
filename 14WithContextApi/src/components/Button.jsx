import React, { Component, useContext } from 'react'
import Component1 from './Component1'
import CountContext from '../context/CountContext'

const Button = () => {
  const {count, setCount} = useContext(CountContext)
  return (
    <div>
        <button onClick={() => setCount(count + 1)}> I am a button Also increase count </button> <br />
        <Component1 />
    </div>
  )
}

export default Button
