import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'  // ← Única línea cambiada

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
)
