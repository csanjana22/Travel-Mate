import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "react-day-picker/style.css"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
