import React from 'react'
import { ChevronRight } from 'lucide-react'

function LocationCard({ CityName }) {
  return (
    <div className="w-full p-4 m-3 rounded-lg bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 text-2xl">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-gray-800">{CityName}</h2>
        <ChevronRight className="text-gray-500" />
      </div>
    </div>
  )
}

export default LocationCard