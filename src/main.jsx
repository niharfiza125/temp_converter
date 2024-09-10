import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { storetemp } from './app/tempStore.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={storetemp}>
    <App />
  </Provider>,
)