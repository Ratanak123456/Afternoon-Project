import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BookingProvider } from './components/auth/middleware/BookingContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookingProvider>
      <App />
    </BookingProvider>
  </StrictMode>
)
