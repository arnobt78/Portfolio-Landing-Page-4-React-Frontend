/**
 * main.jsx — Application entry. Mounts the React app into #root with StrictMode.
 * index.css is imported here so Tailwind and global styles apply to the whole app.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
