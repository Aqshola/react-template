import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppWrapper from './components/wrapper/app-wrapper'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper/>
  </StrictMode>,
)
