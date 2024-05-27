import { BrowserRouter } from 'react-router-dom'
import './globals.css'
import { Router } from './Router'
import { NavigationContextProvider } from './contexts/NavigationContext'

export function App() {
  return (
    <BrowserRouter>
      <NavigationContextProvider>
        <Router />
      </NavigationContextProvider>
    </BrowserRouter>
  )
}

