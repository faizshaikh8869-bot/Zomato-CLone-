import React, { useState } from 'react';
import { X } from 'lucide-react';



function OptionsSorting({selectedSort ,setSelectedSort}) {
    const options = [
        "Popularity",
        "Rating: High to Low",
        "Cost: Low to High",
        "Cost: High to Low",
        "Distance"
    ];
    //Ya value jo aa rahi hai vo direct sorted by wala options ko
    //Options like popularity distance high to low etc in a radio button formt when the opton is selected the 
    //option should be reflected
    return (
        <div className="flex flex-col gap-3">
            {options.map((option) => (
                <label key={option} className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="sort"
                        value={option}
                        checked={selectedSort === option}
                        onChange={(e)=>setSelectedSort(e.target.value)}
                    />
                    {option}
                </label>
            ))}
        </div>
    );

}

function MyModel({ closeModel }) {
    const [element, setElement] = useState('Sorted by');
    const [selectedSort, setSelectedSort] = useState("Popularity");


    const elms = ['Sorted by', 'Cuisine', 'Rating', 'Cost for two', 'More filters',]

    // console.log(element);
    return (
        <>
            <div className=" fixed inset-0 h-full w-full bg-black/50 flex items-center justify-center"
                onClick={() => closeModel()}>

                <div className="bg-white  rounded-lg shadow-lg w-160"
                    onClick={(e) => e.stopPropagation()}>

                    <div className=' h-16 px-5 w-full border-b text-2xl flex items-center justify-between tracking-wider  font-semibold'>
                        <h1 className=' '>Filters</h1>
                        <X onClick={closeModel} />
                    </div>

                    <div className='grid grid-cols-[30%_70%] h-90'>
                        {/* //The first box will be 20% and second box will be 80% 
                       
                            // Add elements horizontally with the state chnage logic this logic will 
                            // used to show the left sode of the box of the grid 

                         Left Side */}
                        <div className="border-r">
                            {elms.map((value, idx) => (
                                <div
                                    key={idx}
                                    className={`p-3 cursor-pointer ${element === value
                                        ? "bg-blue-100 font-semibold"
                                        : "hover:bg-gray-100"
                                        }`}
                                    onClick={() => setElement(value)}
                                >
                                    <div>{value}</div>
                                    {value === "Sorted by" && (
                                        <div className="text-sm text-gray-500">
                                            {selectedSort}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{element}</h2>

                            {element === "Sorted by" && (
                                <OptionsSorting
                                    selectedSort={selectedSort}
                                    setSelectedSort={setSelectedSort}
                                />
                            )}
                            {element === elms[1] && <p>Cuisine options go here</p>}
                            {element === elms[2] && <p>Rating options go here</p>}
                            {element === elms[3] && <p>Cost options go here</p>}
                            {element === elms[4] && <p>Additional filters go here</p>}
                        </div>

                    </div>

                    <div className=' w-full h-17 items-center gap-5 px-4 border-t flex justify-end'>
                        <button className=" text-slate-600 font-light cursor-pointer px-4
                             py-2 rounded-sm border border-transparent transition-all 
                             duration-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm"
                            onClick={() => handleClearEvent}>
                            Clear all
                        </button>
                        <button className=' px-6 py-2 rounded-sm cursor-pointer text-white bg-rose-500
                             hover:bg-rose-700'
                            onClick={() => handleChanges}>
                            Apply
                        </button>
                    </div>
                </div>
            </div >
        </>
    );
}

export default MyModel