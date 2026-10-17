import React, { useState } from "react";
import { motion } from "framer-motion";

function ThreeBUTTONS() {
    const [activeTab, setActiveTab] = useState("Delivery");

    const tabs = [
        {
            id: "DiningOut",
            label: "Dining Out",
            img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
        },
        {
            id: "Delivery",
            label: "Delivery",
            img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp",
        },
        {
            id: "Nightlife",
            label: "Nightlife",
            img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp",
        },
    ];

    return (
        <section className=" sticky w-[77%] mx-auto flex items-center justify-start border-b border-gray-200">
            <div className="flex gap-5 mt-3">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className="relative flex items-center gap-3 px-4 py-3 cursor-pointer"
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <div
                            className={`w-12 h-12 flex items-center justify-center rounded-full shrink-0 transition-all duration-200 hover:scale-105
                            ${
                                activeTab === tab.id
                                    ? "bg-rose-200"
                                    : "bg-rose-100"
                            }`}
                        >
                            <img
                                src={tab.img}
                                alt={tab.label}
                                className="w-7 h-7 object-contain"
                            />
                        </div>

                        <h1
                            className={`text-[1.2em] font-medium transition-colors duration-200
                            ${
                                activeTab === tab.id
                                    ? "text-rose-500"
                                    : "text-gray-700"
                            }`}
                        >
                            {tab.label}
                        </h1>

                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTabIndicator"
                                className="absolute bottom-0 left-0 w-full h-1 bg-rose-500 rounded-full"
                                transition={{
                                    type:"spring",
                                    stiffness: 380,
                                    damping: 30,
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ThreeBUTTONS;