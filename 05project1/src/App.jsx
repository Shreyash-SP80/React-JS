import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='container' style={{backgroundColor: color}}>
      <div className='buttons'>
        <button style={{backgroundColor: "olive"}} onClick={() => setColor("olive")}>olive</button>
        <button style={{backgroundColor: "red"}} onClick={() => setColor("Red")}>Red</button>
        <button style={{backgroundColor: "Green"}} onClick={() => setColor("Green")}>Green</button>
        <button style={{backgroundColor: "Yellow"}} onClick={() => setColor("Yellow")}>Yellow</button>
        <button style={{backgroundColor: "Pink"}} onClick={() => setColor("pink")}>Pink</button>
        <button style={{backgroundColor: "black", color: "white"}} onClick={() => setColor("black")}>black</button>
        <button style={{backgroundColor: "aqua"}} onClick={() => setColor("aqua")}>aqua</button>
        <button style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}>orange</button>
      </div>
    </div>
  )
}

export default App
