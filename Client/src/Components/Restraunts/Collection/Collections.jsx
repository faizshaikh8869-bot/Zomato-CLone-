import React, { useEffect,useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import CollectionCard from './CollectionCard'
import axios from 'axios'
import collectionData from '../../../../Collection.json'

function Collections() {
  const { city } = useParams()

  const restaurants = useMemo(()=>collectionData ); //Memoized the collection info
  // Inside a React component or utility function


  
  return (
    <>
    <div className="max-w-[77%] mx-auto px-4 pb-10">
      <div className=' w-full  mb-6'>
        <h1 className=' text-[1.7em] font-bold tracking-wider'>Collections</h1>
      </div>
      <div className='flex justify-between items-center '>
        <p>
          Explore curated lists of top restaurants, cafes, pubs, and bars in {city}, based on trends
        </p>
        <div className='flex justify-center items-center hover:text-red-400'>
          <a href="#">
            All collections in {city}
          </a>
          <ChevronRight />
        </div>
      </div>

      <div className="flex   overflow-x-auto scrollbar-none whitespace-nowrap mt-3 mb-10">
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
      </div>
      
    </>
  )
}

export default Collections