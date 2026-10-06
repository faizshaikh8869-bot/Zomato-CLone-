import React from 'react'
import LandingPageNav from '../../Components/LandingPageNav'
import MainPage from '../MainPage'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <>
      <LandingPageNav />
      {/* In the main page content should be added  */}
      <MainPage />
      <Footer />

    </>
  )
}

export default Home