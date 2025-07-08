import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  const AddData = useCallback(() => {
    if (task.trim() === "") {
      alert("Please Enter Task")
      return
    }

    setTasks(priv => [...priv, task.trim()])

    setTask('');
  }, [task])

  const deleteTask = useCallback((index) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  }, [])

  //   prev is your old task array: e.g. ["Task A", "Task B", "Task C"]
  // .filter(...) loops through every item in the array.
  // The parameters in .filter((_, i) => ...) are:
  // _ → the current task value (we're not using it, hence underscore)
  // i → the current index
  //  (_, i) => i !== index
  // means:
  // 🧠 "Keep every item except the one at index."

  return (
    <>
      <div className='container'>

        {/* Add task */}
        <div className='add-task'>
            <input 
              type="text" 
              className='input' 
              placeholder='Enter Task'
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <button className='add-btn' onClick={AddData}>Add</button>
        </div>

        {/* Display all the tasks */}
        <ul className='list'>
          {
            tasks.map((oneTask, index) => (
              <li className='list-items' key={index}>
                <span>{oneTask}</span>
                <button className="delete-btn" onClick={() => deleteTask(index)}>X</button>
                {/* onClick={deleteTask(index)}
                    This calls deleteTask(index) immediately when the component renders.
                    It does not wait for the user to click the button.
                    The return value of deleteTask(index) (usually undefined) is assigned to onClick, which breaks the logic. */}

                {/* onClick={() => deleteTask(index)}
                    You're passing an anonymous arrow function that wraps your real function.
                    This function will be called only when the button is clicked.
                    React assigns a proper function to onClick which will execute on the user event. */}
              </li>
            ))
          }
        </ul>

      </div>
    </>
  )
}

export default App
