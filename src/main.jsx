import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ThemeContextProvider from './components/Context/Theme-Context-Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
)
