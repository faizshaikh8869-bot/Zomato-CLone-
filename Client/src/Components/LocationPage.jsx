import React from 'react'
import bgImage from '../assets/IndiaPageBg-Img.avif'
import logo from '../assets/zomato-logo-white.jpg'
import LocationCard from '../Components/LocationCard'
import MainLanding from '../Pages/RestrauntPages/MainTomatoPage';
import { Link, useNavigate } from 'react-router-dom';

function LocationPage() {
  const cities = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune",
    "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal",
    "Patna", "Chandigarh", "Visakhapatnam", "Kochi", "Goa"];


  const navigate = useNavigate();
  return (
    <>
      <section className="relative h-[90vh]  mb-10">
        <div className="relative h-[90vh]">

          <img
            src={bgImage}
            alt="Bg image"
            className="w-full h-full object-cover"
          />

          {/* Navbar */}
          <div className="absolute  top-0 left-0 w-full z-20">
            <div className="max-w-[77%] mx-auto px-4 h-20 flex items-center justify-end">

              <ul className="flex gap-8 text-white text-xl cursor-pointer">
                <li><a href="#" >Add restaurant</a></li>
                <li>
                  <Link to="/india/login" className="cursor-pointer">
                    Login
                  </Link>
                </li>

                <li>
                  <Link to="/india/signup" className="cursor-pointer">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 ">
            <div className="max-w-6xl mx-auto h-full px-6 flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-7xl font-bold leading-27">
                Zomato
              </h1>
              <h3 className='text-5xl font-medium'>
                Find the best restaurants, cafés <br /> and bars in India
              </h3>
            </div>
          </div>

        </div>
      </section>
      <br />
      <section className='max-w-[77%] mx-auto px-4 mb-30'>
        <div className='  w-full place-items-center text-center'>
          <h1 className=' text-3xl leading-26'>Popular locations in
            India flag
            India
          </h1>
          <p className='text-3xl text-teal-500 leading-12'>
            From swanky upscale restaurants to the cosiest hidden gems
            serving the most incredible food, Zomato covers it all.
            Explore menus, and millions of restaurant photos and reviews
            from users  just like you, to find your next great meal.
          </p>
        </div>
      </section>

      <section className='max-w-[77%] mx-auto  grid grid-cols-1 
      gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 '>
        {cities.map((city) => (
          <>

            <Link key={city} to={`/main/${city}`}>
              <LocationCard CityName={city} />
            </Link>
          </>
        ))}

      </section>


      {/* Footer */}
      {/* <section>
        <div>
            
        </div>
        <div>

        </div>
        <div>

        </div>
      </section> */}
    </>
  )
}

export default LocationPage