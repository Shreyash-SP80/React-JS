import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowd, setNumberAllowd] = useState(false)
  const [charAllowed, setCharAllowd] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)   // default null value (using we can apply copy)

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowd) str += "0123456789"
    if (charAllowed) str += "!@#&%^*-_+-=[](){}~`"

    for (let i = 1; i <= length; i++) {
       let char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char)
    }

    setPassword(pass);

  }, [length, numberAllowd, charAllowed, setPassword])

  const copyPasswordToClick = useCallback(() => {
    passwordRef.current?.select()    // by using passwordRef we can visualize copied text (selected)
    // passwordRef.current?.setSelectionRange(0, 3)  // Select some part 0 to 3 char
    window.navigator.clipboard.writeText(password)  // logic to only copy (not displays selected)
  }, [password])

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowd, charAllowed, passwordGenrator])


  return (
    <>
    <div className='container'>
      <div className='inside-container'>
        <input 
            type="text" 
            value={password}
            className='input'
            placeholder = 'Password'
            readOnly
            ref={passwordRef}   // reference for copy 
        />

        <button className='copy-btn' onClick={copyPasswordToClick}>Copy</button>
        {/* Using onClick={copyPasswordToClick} we can able to copy*/}

      </div>
      {/* <h1 className='h1'>Password Genrator</h1> */}

      <div className="list-items">
        <div className="input-items">
            <input 
                type="range" 
                min={8}
                max={100}
                value={length}
                style={{cursor: "pointer"}}
                onChange={(e) => setLength(Number(e.target.value))}
            />
            <label >Length: {length}</label>
        </div>
        <div className='all-items'>
            <input 
                type="checkbox" 
                defaultChecked= {numberAllowd}
                id='numberInput'
                className='checkBox'
                // style={{cursor: "pointer"}}
                onChange={() => {
                  setNumberAllowd(prev => !prev)
                }}
            />
            <label htmlFor="numberInput">Numbers</label>

            <input 
                type="checkbox" 
                defaultChecked= {charAllowed}
                id='character'
                className='checkBox'
                // style={{cursor: "pointer"}}
                onChange={() => {
                  setCharAllowd(prev => !prev)
                }}
            />
            <label htmlFor="character">Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
