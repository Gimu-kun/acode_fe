import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MathJaxContext } from 'better-react-mathjax'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <MathJaxContext>
            <App />
        </MathJaxContext>
    </BrowserRouter>
)
