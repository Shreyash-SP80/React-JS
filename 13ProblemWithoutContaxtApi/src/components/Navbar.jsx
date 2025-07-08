import React from 'react'
import Button from './Button'

const Navbar = ({value}) => {
    console.log(value)
  return (
    <div>
      This is Navbar
      <Button counter={value}/>
    </div>
  )
}

export default Navbar
