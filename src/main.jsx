import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Old imports (preserved):
// import './index.css'
// import App from './App.jsx'
import './index-v2.css'
import App from './App-v2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
