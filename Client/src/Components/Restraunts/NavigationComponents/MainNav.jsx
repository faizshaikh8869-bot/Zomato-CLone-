import React from "react";
import { useState } from "react";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import TopNavmain from "./TopNavmain";
import { ChevronRight } from 'lucide-react'
import BreadCrums from "./BreadCrums";
import ThreeBUTTONS from "./ThreeBUTTONS";


function MainNav() {
  const { city } = useParams();
  const [location, setLocation] = useState({ city });
  const [inpt, setInpt] = useState('');
  //NAv last element
 

 


  //className="w-[120%] border-2 m-2  sticky top-0 bg-white z-50 pb-1 border-b-2"

  return (
    <>
    <nav className="w-screen  shadow-[0_2px_8px_rgba(0,0,0,0.08)]">


      <TopNavmain />
      {/* Bread Crum start */}
      <BreadCrums />

      {/* Buttons for navigation*/}
      <ThreeBUTTONS />
    </nav>
      <br />

    </>
  );
}

export default MainNav;