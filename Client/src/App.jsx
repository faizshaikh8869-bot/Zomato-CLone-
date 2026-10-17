import Lenis from 'lenis';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChooseLocationPage from './Pages/ChooseLocationPage';
import MainRestrauntPage from './Pages/MainRestrauntPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Card from './Components/Collection/Card';
import CollectionCardsMap from './Components/Collection/CollectionCardsMap';

function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  // <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/india' element={<IndiaLocationPage />} />
  //       <Route path='/main/:city' element={<MainLanding />} />

  //     </Routes>
  return (
    <>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/Location' element={ <ChooseLocationPage /> } />
          <Route path='/main/:city' element={<MainRestrauntPage />} />
          
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/signup' element={<Signup />} />
          
          <Route path='/:collectionName' element={<CollectionCardsMap />} />

        </Routes>
    </>
  )
}

export default App


// import { useEffect } from 'react'
// import './App.css'
// import MainLanding from './Pages/MainTomatoPage'
// import Home from './Pages/LandingPages/LandingPage'
// import { Link, Route, Routes } from 'react-router-dom'
// import IndiaLocationPage from './Pages/LocationPage'
// import Login from './Components/Login'
// import Signup from './Components/Signup'
// // import Filter from './Components/Restraunts/Filters/Filter'
// import Card from './Components/Card'
// import CollectionCardsMap from './Components/CollectionCardsMap'
// import Lenis from 'lenis'


// function App() {
//   // Initialize Lenis
//   const lenis = new Lenis({
//     autoRaf: true,
//   });

//   // Listen for the scroll event and log the event data
//   // lenis.on('scroll', (e) => {
   
//   // });

//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/india' element={<IndiaLocationPage />} />
//         <Route path='/main/:city' element={<MainLanding />} />
//         <Route path='/:collectionName' element={<CollectionCardsMap />} />
//         <Route path='/india/login' element={<Login />} />
//         <Route path='/india/signup' element={<Signup />} />
//         <Route path='/example' element={<Card />} />
//       </Routes>

//     </>
//   )
// }

// export default App
