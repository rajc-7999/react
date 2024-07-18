import React from 'react'
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// import Clock from './project/clock'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Project from './Project.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
  <Project/>
  </BrowserRouter>
  </React.StrictMode>
 


)