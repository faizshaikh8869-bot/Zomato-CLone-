import React, { useState } from "react";
import { MapPin, Search, ChevronDown, LogIn } from "lucide-react";
import logo from '../../../assets/zomato-logo-white.jpg'
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";

function TopNavmain() {
  const { city } = useParams();
  const [location, setLocation] = useState({ city });
  const [inpt, setInpt] = useState('');

  function handleChangingFoodSearch(e) {
    const search = e.target.value;
  }

  const navigate = useNavigate();

  return (
    <>
      <div className=" mx-auto py-2 mb-2 w-[77%]  ">

        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="shrink ">

            <h1
              className="  text-[2em] font-extrabold"> zomato
            </h1>
          </div>

          {/* Search Section */}
          <div className="flex-1 flex items-center bg-white  rounded-lg shadow-sm  shadow-slate-900  overflow-hidden h-11 " >
            {/* Location */}
            <div className="flex items-center gap-2 p-2 w-[32%] text-[0.9em]   ">
              <MapPin size={30} className="text-rose-500" />

              <input
                type="text"
                id='location'
                placeholder={city}
                className="outline-none w-full h-[1.2em] border-r-[1.33px] " />

            </div>

            {/* Search Food */}
            <div className="flex items-center gap-3 flex-1 px-2 text-[0.9em] ">
              <Search size={24} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="outline-none w-full h-[1.2em] "
                // value={inpt}
                onChange={(e) => { handleChangingFoodSearch() }}

              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-8 text-[1em] ml-10 text-gray-600">
            <button className="hover:text-black cursor-pointer"
              onClick={() => { navigate('/india/login') }}
            >
              Login
            </button>

            <button
              className="hover:text-black cursor-pointer"
              onClick={() => { navigate('/india/signup') }}
            >
              Sign up
            </button>

            <div className=" border-2 rounded-full w-10 h-10">
              {/* Profile-Logo */}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default TopNavmain