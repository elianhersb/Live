import React from 'react'
import ReactDOM from 'react-dom/client'
import { LiveApp } from './LiveApp';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
// import { ListCard } from './resources';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LiveApp />
    </BrowserRouter>
  </React.StrictMode>,
)
