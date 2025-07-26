import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Two Different counter button</h1>
    <App name="counter1"/>
    <App name="counter2"/>
  </StrictMode>,
)
