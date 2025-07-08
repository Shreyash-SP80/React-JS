import { useState, useCallback } from 'react'
import Show from './components/Show'
import TodoApp from './components/ToDoApp'


function App() {
  const [count, setCount] = useState(0)
  const [check, setCheck] = useState(true)

  // Without 
  // const click = () => {
  //   console.log("Show clicked")
  //   setCheck((ch) => !ch)
  // }

  // React.memo(Component) prevents re-rendering only if props stay the same.
  // const click = useCallback(() => {   // useCallback click function recreats when it changes (If function same the it can not recreate function)
  //   console.log("Show clicked")
  //   setCheck((ch) => !ch)
  // }, [check])
  // Every time check changes, click is re-created (because it's watching check).
  // That means onClick={click} now has a new reference.
  // React sees the prop changed, so it re-renders <Show />.


  // To avoid rerendering remove check (because if check changes function reference re created and props changed the Show )
  const click = useCallback(() => {   // useCallback click function recreats when it changes (If function same the it can not recreate function)
    console.log("Show clicked")
    setCheck((ch) => !ch)
  }, [])

  return (
    <>
      <Show onClick={click}/>
      <button onClick={() => {
         setCount(count + 1)
      }}>Count: {count}</button>
      {/* <TodoApp/> */}
    </>
  )
}

export default App
