import React from "react";
import { useState } from "react";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import TopNavmain from "../Components/NavigationComponents/TopNavmain";
import { ChevronRight } from 'lucide-react'
import BreadCrums from "../Components/NavigationComponents/BreadCrums";
import ThreeBUTTONS from "../Components/NavigationComponents/ThreeBUTTONS";


function NavigationComp() {
    const { city } = useParams();

    
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

export default NavigationComp;