import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [counter, setCounter] = useState(0);
  let Myobj = {
     username: "Shreyash",
     age: 20
  }

  return (
    <>
      <h1>Counter incremented By 4: {counter}</h1>
      {/* 
          - React batches state updates that occur within the same synchronous event (like a button click) to optimize performance. This means:
             - Instead of re-rendering after each setCounter, React waits until all updates are processed.
             - Then, it calculates the final state and triggers just one re-render. 
          - Functional Updates (Correct Way)
             - Each setCounter receives the latest pending state (not the current rendered state).
             - Works like a queue: Each update depends on the previous one.
             - How It Works:
                Call Order	prev Value	New Value
                 1st Call	      0	          1
                 2nd Call	      1	          2
                 3rd Call	      2	          3
                 4th Call	      3	          4

          - Direct Updates (counter + 1)
             - Initial State: counter = 0
             - Button Clicked:
                  setCounter(0 + 1) → new = 1
                  setCounter(0 + 1) → new = 1
                  setCounter(0 + 1) → new = 1
                  setCounter(0 + 1) → new = 1
                  Final State: counter = 1 (only the last update sticks).
           
      */}
      
      <button onClick={() => {
        setCounter(Previoscounter => Previoscounter + 1)
        setCounter(Previoscounter => Previoscounter + 1)
        setCounter(Previoscounter => Previoscounter + 1)
        setCounter(Previoscounter => Previoscounter + 1)
      }}>Click to increment</button>
      <Card name="ABC" btntext="HEllo"/>
      <Card btntext="Click me" />    
      <Card name="PQR" btntext="Press me"/>

      <Card someObj={Myobj} />
    </>
  
  )
}

export default App
