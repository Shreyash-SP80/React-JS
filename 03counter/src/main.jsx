import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Show from './Show.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Show />    
  </>,
  // <Show/> have one useEffect() hooks which execute when Show loads
)
