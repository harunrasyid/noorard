import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { CustomThemeProvider } from '@renderer/themes'
import App from './App'
import './main.css'
import { Screen } from '@renderer/components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <BrowserRouter>
        <Screen>
          <App />
        </Screen>
      </BrowserRouter>
    </CustomThemeProvider>
  </React.StrictMode>
)
