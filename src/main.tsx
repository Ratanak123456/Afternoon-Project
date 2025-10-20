import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BookingProvider } from './components/auth/middleware/BookingContext.tsx'
import { WishlistProvider } from './components/auth/middleware/WishlistContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookingProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </BookingProvider>
  </StrictMode>
)
