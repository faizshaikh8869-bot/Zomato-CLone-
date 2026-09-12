import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style.css'
// import { CollectionsProvider } from './context/CollectionContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    {/* <CollectionsProvider> */}
      <App />
    {/* </CollectionsProvider> */}
  </BrowserRouter>
)
