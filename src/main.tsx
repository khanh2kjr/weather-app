import { createRoot } from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './ui/v5.ts'
import '@fontsource/montserrat'
import './ui/main.css'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StoreProvider>
)
