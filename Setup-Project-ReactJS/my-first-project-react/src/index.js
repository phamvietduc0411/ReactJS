import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Wellcome from './Wellcome'

const element = (
  <div>
    <Wellcome name='create-component' />
    <Wellcome name='second-component' />
    <Wellcome name='third-component' />
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)

// <React.StrictMode>
// <App />
// </React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
