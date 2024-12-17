import { StrictMode } from 'react'
import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './Contexts/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
