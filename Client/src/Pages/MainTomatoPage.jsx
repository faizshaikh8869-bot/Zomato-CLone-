import React from 'react'
import MainNav from '../Components/Restraunts/NavigationComponents/MainNav'
import Collections from '../Components/Collections'
import CenterContainer from '../utils/CenterContainer'
import Filter from '../Components/Filter'
import Card from '../Components/Card'
import Footer from '../Components/Footer'


function MainLanding() {
  console.log("Home rerender", Date.now());
  return (
    <>
      <MainNav />

      <Collections />
      {/* <CenterContainer> */}
      <Filter />
      {/* </CenterContainer> */}
      <Card />
      <Footer />

    </>
  )
}

export default MainLanding