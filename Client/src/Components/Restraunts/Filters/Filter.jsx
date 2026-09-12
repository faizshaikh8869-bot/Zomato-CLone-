import React from "react";
import { useState } from "react";
import MyModel from "./showFilterModel";
import adjustment from '../../../assets/RestrauntImages/contrastAdjustment.png'
import { icons } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


function Btn({ name, onClick, icon }) {
  return <button
    className="px-3 py-2 text-sm flex justify-center items-center gap-1 font-medium rounded-lg text-gray-800 border-none
            shadow-sm hover:shadow-lg active:scale-75 transition-all duration-100"
    onClick={onClick}
  >
    {icon}
    {name}
  </button>;
}

//Remaining work
//Adding the funcnality of apply and cancle should use some kind of thing to apply all 
// filters and search or get cards according to that filter 

function Filter() {
  console.log("Modal rerender", Date.now());
  const [showModel, setShowModel] = useState(false);

  const rating = 5
  const filterElem = [`Filter`, `Reating:${rating}`, 'Offers', 'Pet friendly', 'Outdoor seating', 'Serves Alcohol', 'Open Now'];


  return (
    <>
    <section className="max-w-[77%] mx-auto px-4 pb-10">
      <div className="w-full flex px-0  p-3 pl-6 text-shadow-mauve-400 gap-4">
        {filterElem.map((name, idx) => (
          <Btn
            key={idx}
            name={name}
            icon={idx === 0 ? (<img src={adjustment} className=" w-4 h-4" />) : null}
            onClick={() => {
              if (idx === 0) {
                setShowModel(true)
              }
            }} />
        ))}
      </div >
      {showModel && (
        <MyModel closeModel={() => setShowModel(false)} />
      )}
      </section>
    </>
  );
}

export default Filter