import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
// import { CollectionsProvider } from './context/CollectionContext.jsx'

import App from './App.jsx'
import { UserProvider } from './Context/UserContext.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    {/* <CollectionsProvider> */}
    <UserProvider>
      <App />
    </UserProvider>
    {/* </CollectionsProvider> */}
  </BrowserRouter>
)
