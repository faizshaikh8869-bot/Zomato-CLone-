import React from 'react'
import CenterContainer from '../Utils/CenterContainer'
import Filter from '../Components/Fillter/Filter'
import Card from '../Components/Collection/Card'
import Footer from '../Components/Footer'
import NavigationComp from '../Components/NavigationComp'
import Collections from '../Components/Collection/Collections'


function MainRestrauntPage() {
  console.log("Home rerender", Date.now());
  return (
    <>
      <NavigationComp />
      < Collections />

      <CenterContainer>
        <Filter />
      </CenterContainer>
      <Card />
      <Footer />

    </>
  )
}

export default MainRestrauntPage