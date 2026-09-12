import React from 'react'
import LandingPageNav from './LandingPageNav'
import MainPage from './MainPage'
import Footer from '../Footer'

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