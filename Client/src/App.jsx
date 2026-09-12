import { useState } from 'react'
import './App.css'
import MainLanding from './Pages/RestrauntPages/MainTomatoPage'
import Home from './Pages/LandingPages/LandingPage'
import { Link, Route, Routes } from 'react-router-dom'
import IndiaLocationPage from './Pages/LocationPages/LocationPage'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Filter from './Components/Restraunts/Filters/Filter'
import Card from './Components/Restraunts/Card/Card'
import CollectionCardsMap from './Components/Restraunts/Collection/CollectionCardsMap'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/india' element={<IndiaLocationPage />} />
        <Route path='/main/:city' element={<MainLanding />} />
        <Route path='/:collectionName' element={<CollectionCardsMap/>}/>
        <Route path='/india/login' element={<Login />} />
        <Route path='/india/signup' element={<Signup />} />
        <Route path='/example' element={<Card />} />
      </Routes>

    </>
  )
}

export default App
