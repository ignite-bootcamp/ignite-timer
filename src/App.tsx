import { BrowserRouter } from 'react-router-dom'
import { CyclesProvider } from './context/CyclesContext'
import './index.css'
import { Router } from './Router'

function App() {
  return (
    <BrowserRouter>
      <CyclesProvider>
        <Router />
      </CyclesProvider>
    </BrowserRouter>
  )
}

export default App
