import React from 'react'
import MainNav from '../../Components/Restraunts/NavigationComponents/MainNav'
import Collections from '../../Components/Restraunts/Collection/Collections'
import CenterContainer from '../../Components/CenterContainer'
import Filter from '../../Components/Restraunts/Filters/filter'
import Card from '../../Components/Restraunts/Card/Card'
import Footer from '../Footer'


function MainLanding() {
  console.log("Home rerender", Date.now());
  return (
    <>
      <MainNav />
      
        <Collections />
      {/* <CenterContainer> */}
        <Filter />
      {/* </CenterContainer> */}
      <Card/>
      <Footer />

    </>
  )
}

export default MainLanding