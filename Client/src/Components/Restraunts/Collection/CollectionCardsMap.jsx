import React from 'react'
import CardData from '../../../../card.json'
import restaurant from '../../../../Collection.json'
import CardMap from '../Card/CardMap'
import Card from '../Card/Card';
import FuckedUp from './FuckedUp';
import Footer from '../../../Pages/Footer'
import Nav from '../../../Components/Restraunts/NavigationComponents/MainNav'

function CollectionCardsMap() {

  const restaurants = restaurant
  const Data = CardData;


  return (
    <>
      <Nav/>
      <section className=' py-10'>
        <Card />
      </section> 

      <section className="max-w-[77%] mx-auto px-4 pb-10">
        <div className="flex flex-wrap justify-center gap-4">
          {restaurants.map((restaurant) => (
            <FuckedUp
              key={restaurant.id}
              id={restaurant.id}
              image={restaurant.image}
              name={restaurant.restaurantName}
              places={restaurant.numberOfPlaces}
            />
          ))}
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default CollectionCardsMap