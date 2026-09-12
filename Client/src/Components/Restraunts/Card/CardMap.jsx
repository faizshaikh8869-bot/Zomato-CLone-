import React from 'react'
import {StarsIcon} from 'lucide-react'

function CardMap({ id, restaurant }) {
    return (
        <>
            <div
                id={id}
                className="w-79 rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl hover:-translate-z-100  transition-all duration-300"
            >
                {/* Image Section */}
                <div className="h-52 overflow-hidden">
                    <img
                        // src={restaurant.images[0]}
                        alt={restaurant.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-4">
                    <div className="flex justify-between">

                        {/* Left Side */}
                        <div className="flex flex-col gap-1">
                            <h1 className="font-bold text-lg truncate">
                                {restaurant.name}
                            </h1>

                            <p className="text-gray-500 text-sm truncate">
                                {restaurant.cuisines.join(", ")}
                            </p>

                            <p className="text-gray-400 text-sm">
                                📍 {Object.values(restaurant.address).join(", ")}
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col items-end gap-1">

                            <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-md flex items-center gap-1">
                                {restaurant.rating}
                                <StarsIcon className="w-3 h-3" />
                            </span>

                            <span className="text-orange-500 whitespace-nowrap font-semibold text-sm">
                                {restaurant.offer}
                            </span>

                            <span className="text-gray-500 text-sm">
                                📍 {restaurant.distance || "2.5"} km
                            </span>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CardMap