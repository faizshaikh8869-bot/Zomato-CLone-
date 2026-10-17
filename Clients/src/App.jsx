import Lenis from 'lenis';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChooseLocationPage from './Pages/ChooseLocationPage';

function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  // <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/india' element={<IndiaLocationPage />} />
  //       <Route path='/main/:city' element={<MainLanding />} />
  //       <Route path='/:collectionName' element={<CollectionCardsMap />} />
  //       <Route path='/india/login' element={<Login />} />
  //       <Route path='/india/signup' element={<Signup />} />
  //       <Route path='/example' element={<Card />} />
  //     </Routes>
  return (
    <>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/Location' element={ <ChooseLocationPage /> } />
          <Route path='/'/>

        </Routes>
    </>
  )
}

export default App
