import React from 'react'
import { ChevronRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'


function BreadCrums() {
    const { city } = useParams();


    return (
        <div>
            <div className="w-[77%] mx-auto flex items-center gap-2 text-[0.8em] text-gray-600">
                <Link to="/" className="hover:text-rose-400">
                    Home
                </Link>

                <ChevronRight size={16} />

                <Link to="/india" className="hover:text-rose-400">
                    India
                </Link>

                <ChevronRight size={16} />

                <Link to={`/main/${city}`} className="hover:text-rose-400">
                    {city}
                </Link>
            </div>
        </div>
    )
}

export default BreadCrums
