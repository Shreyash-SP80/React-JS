import React, { Component } from 'react'
import Component1 from './Component1'

const Button = ({counter}) => {
    console.log(counter)
  return (
    <div>
        <button> I am a button </button> <br />
        <Component1 counter={counter}/>
    </div>
  )
}

export default Button
