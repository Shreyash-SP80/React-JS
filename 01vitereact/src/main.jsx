
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Chai from './chai'
// import { jsx as _jsx } from 'react/jsx-runtime'

function MyApp() {
    return (
        <h1>MyApp Function</h1>
    )
}
// Every react uses bundler (it's work is do magic behind the see like upgrade syntax clean syntax)
// React doesn't konw HTML syntax so that's it is called as jsx (maixed js and html)
// Bundler can convert the html syntax into following tree
// <a href='https://google.com' target='_blank'>Click me to visit google</a>
// By bundler parsing of this html a tag into following tree
// const reactElement = {
//    type: 'a',
//    props: {
//        href: 'https://google.com',
//        target: '_blank'
//    },
//    Children: 'Click me to visit google'
// }

const anotherUser = "User1" // var
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google ',
  anotherUser     // var value printing like <a href="https://google.com" target="_blank">Click me to visit google {anotherUser}</a>
)

const anotherElement = (<a href="https://google.com" target='_blank'>Visit Google</a>)  // Creates a tag

console.log(anotherElement);
createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Chai/>
    <MyApp/>
    {anotherElement}
    <br /> <br />
    {reactElement}
  </>

  // anotherElement
  // reactElement

  // MyApp() // It also works (because react is also an js)
)
