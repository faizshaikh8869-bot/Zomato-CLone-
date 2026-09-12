import React, { useState } from "react";
import video from "../../assets/Video-of-zomato.mp4"
import { ChevronsDown } from "lucide-react";
import MainPage from "./MainPage";

function Navbar() {

  const [scroll ,setScroll] =useState(false);

  return (
    <section className="relative h-screen overflow-hidden flex justify-center items-end">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.45] scale-105 -z-20"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      

      {/* Content */}
      <div className="relative flex flex-col text-white w-full max-w-140 md:h-100">

        {/* Logo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="w-34 md:w-40 ">
            <img
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              alt="Zomato"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="absolute mt-13 left-1/2 -translate-x-1/2 w-full text-center font-extrabold leading-[0.9] text-5xl">
          <span>India's #1</span>
          <br />
          <span>food delivery app</span>
        </h1>

        {/* Subtitle */}
        <p className="absolute top-[40%] left-1/2 -translate-x-1/2 w-full text-center font-medium leading-tight text-[18px] md:text-[22px] lg:text-[28px]">
          Experience fast & easy online ordering
          <br />
          on the Zomato app
        </p>

        {/* Buttons */}
        <div className="absolute top-[65%] left-1/2 -translate-x-1/2 flex flex-row w-full justify-center items-center gap-5">

          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-3 bg-black/80 px-4 py-2 rounded-xl border border-white/40 hover:scale-105 transition-all duration-300"
          >
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
              alt=""
            />

            <div>
              <p className="text-sm uppercase tracking-wider">
                Get it on
              </p>
              <p className="text-[22px] leading-none font-semibold">
                Google Play
              </p>
            </div>
          </a>

          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-3 bg-black/80 px-4 py-2 rounded-xl border border-white/40 hover:scale-105 transition-all duration-300"
          >
            <img
              className="w-8 h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsP-EH-Fc-gjQMFgxj4g1pkFGVCK8Y2deHA&s"
              alt=""
            />

            <div>
              <p className="text-sm uppercase tracking-wider">
                Download on the
              </p>
              <h3 className="text-[22px] leading-none font-semibold">
                App Store
              </h3>
            </div>
          </a>
        </div>

        {/* Scroll */}
        <h3
          onClick={() =>
            document.getElementById('main-page')?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="absolute bottom-3 left-1/2 -translate-x-1/2 text-base md:text-lg cursor-pointer animate-bounce"
        >
          <div className="flex justify-center items-center gap-2 font-semibold">
            Scroll down
            <ChevronsDown size={20} />
          </div>
        </h3>

      </div>
    </section>
  );
}

export default Navbar;