import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { Provider as ReduxProvider } from 'react-redux'
import App from './App.tsx'
import { GlobalStyles } from './GlobalStyles.ts'
import { store } from './store.ts'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
)
