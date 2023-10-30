import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RoutingConfig from './routes/RoutingConfig.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RoutingConfig />
  </React.StrictMode>,
)
