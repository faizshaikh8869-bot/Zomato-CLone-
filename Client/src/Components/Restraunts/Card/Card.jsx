import React from 'react'
import jsonData from '../../../../card.json'
import { StarsIcon } from 'lucide-react'
import { useState } from 'react';
import CardMap from './CardMap';

function Card() {
  const Data = jsonData;
  console.log(Data)

  const options = [
    "Chinise food",
    "Continental",
    "Nort Indian",
    "Veg ",
    "Non veg"
  ]
  //Static :- Cuisine:- Based on selected options , Name , Location 
  //Don't Know :- 
  // Need to create context for that 
  //Dynamic :- Rating , Distance{{{"Calculated with gioLocation"}}}, 

  const [file, setFile] = useState(null);


  function handleFileSubmit(e) {
    setFile(e.target.file[0]);
  };
    
  async function handleFormSubmit(e) {

    e.preventDefault();
   if(!file){
    alert("Plese enter a file ");
  }
    const form = new FormData();
    form.append('cardImage', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: form
      });
      if (response.ok) {
        alert("Upload Succesfully");
      };

    } catch (err) {
      console.log("The err:- ", err);
    }

  }
  
  return (
    <>
      {/* <div className='border-2 h-50 w-full flex justify-center items-center'>
        <form onSubmit={handleFormSubmit}>
          <input type="file" accept='image/*' className='border' onChange={handleFileSubmit} />
          <button type='submit'>Submit</button>
        </form>
      </div>  This will be added when the restraunt_Owner will be added */}
      
     
      <section className="flex flex-wrap gap-6 justify-center ">
        {Data.map((restaurant, index) => (
          <CardMap key={index} id={index} restaurant={restaurant} />
        ))}
       </section>
    </>
  )
}

export default Card