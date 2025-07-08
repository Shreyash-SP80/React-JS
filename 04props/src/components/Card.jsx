import React from 'react'
import './card.css'


function Card({name = "Shreyash Patil", btntext, someObj}) {    // {name = "Shreyash Patil"} set a name with default value if not given then use default
    // Instead of this {name = "Shreyash Patil"}  we can use props (One object) and while accessig value use props.name
  console.log(someObj);
  // Object age: 20 username: "Shreyash" [[Prototype]]: Object
  return (
    <div className='card'>
       <img src="/images.jpg" alt="" />
       <h3>{name}</h3>
       <p>Lorem ipsum dolor sit amet consectetur </p>
       <button>{btntext}</button>
    </div>
  )
}

export default Card
