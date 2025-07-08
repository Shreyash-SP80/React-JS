import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



let privious;
function App() {
  
  let [Counter, setCounter] = useState(5)    // setCounter is an function (holds the reference)
  // let Counter = 5
  // console.log(privious)
  // console.log("Call")

  useEffect(() => { alert("App Page loaded")}, []);    // It provides two times alert message because of StrictMode (you can comment it and see)
  useEffect(() => { 
      if (Counter > privious) {
        alert("Counter incremented by 1")
      }
    }
    , [Counter]);

  useEffect(() => { 
      if (privious > Counter) {
        alert("Counter decremented by 1")
      }
    }
    , [Counter]);
  
  const addValue = () => {
      // console.log(Counter);
      if (Counter < 20) {
        privious = Counter;
        Counter = Counter + 1;
        setCounter(Counter);
      }
  }
  const decreaseValue = () => {
      if (Counter > 0) {
         setCounter(Counter - 1)
         privious = Counter;
      }
  }


  return (
    <>
     <h1>React</h1>
     <h2>Counter value: {Counter}</h2>

     <button 
     onClick={addValue}>
      Add value</button>
     <br /> <br />
     <button
     onClick={decreaseValue}>Decrease value</button>
     {/* <p>Footer {Counter}</p> */}
    </>
  )
}

export default App
