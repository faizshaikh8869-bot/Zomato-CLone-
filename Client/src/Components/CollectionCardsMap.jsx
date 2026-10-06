import React from 'react'
import restaurant from '../../Collection.json'
import Card from './Card'
import CollectionCard from './CollectionCard'
import Footer from './Footer'
import Nav from './Restraunts/NavigationComponents/MainNav'

function CollectionCardsMap() {
  const restaurants = restaurant


  return (
    <>
      <Nav />
      <section className=' py-10'>
        <Card />
      </section>

      <section className="max-w-[77%] mx-auto px-4 pb-10">
        <div className="flex flex-wrap justify-center gap-4">
          {restaurants.map((restaurant) => (
            <CollectionCard
              key={restaurant.id}
              id={restaurant.id}
              image={restaurant.image}
              name={restaurant.restaurantName}
              places={restaurant.numberOfPlaces}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default CollectionCardsMap