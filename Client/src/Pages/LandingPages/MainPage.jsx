import React from 'react'
import secondPageLayout from '../../assets/MainPage/second-page-layout.avif'
import elememt1 from '../../assets/MainPage/second-page-el-2.avif'
import element2 from '../../assets/MainPage/second-page-el-1.avif'
import element3 from '../../assets/MainPage/second-page-el-3.avif'
import { motion } from "framer-motion";
import { Store, MapPinPlus, ArrowRightCircleIcon, AlignRightIcon } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom'

function MainPage() {

  const navigate =useNavigate();

  const CardData = [
    {
      _id: 1,
      image: '',
      title: 'zomato',
      para: "Get the app now to start ordering your dishes!"
    },
    {
      _id: 2,
      image: '',
      title: 'blinkit',
      para: "Get the app now to start ordering your dishes!"
    },
    {
      _id: 3,
      image: '',
      title: 'district',
      para: "Get the app now to start ordering your dishes!"
    },
    {
      _id: 4,
      image: '',
      title: 'hyperpure',
      para: "Get the app now to start ordering your dishes!"
    }
  ]

  function handleRouting(){
    navigate('/india');
  }

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftItem = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  const rightItem = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  return (
    <>
      <section id="main-page">
        <div className="w-full h-full relative">
          <img src={secondPageLayout} alt="" className=' absolute top-10 -left-234 h-auto w-full rotate-4 -z-100' />
          <img src={secondPageLayout} alt="" className=' h-auto w-full absolute -top-40 rotate-22 -right-234 -z-100' />

          <motion.div
            className="border-4 border-amber-500 w-full h-full relative"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              variants={leftItem}
              transition={{ duration: 0.8 }}
              src={elememt1}
              className="absolute top-79 left-49 size-50 -z-30"
            />

            <motion.img
              variants={rightItem}
              transition={{ duration: 0.8 }}
              src={element2}
              className="absolute top-8 right-49 size-52 -z-30"
            />

            <motion.img
              variants={rightItem}
              transition={{ duration: 0.8 }}
              src={element3}
              className="absolute top-85 right-39 size-50 -z-30"
            />
          </motion.div>

        </div>
      </section>

      <section className=' flex flex-row h-screen w-screen justify-center text-center items-center'>
        <div className='  w-[33%] h-[40%] flex justify-center flex-col  items-center '>
          <h1 className=' text-red-500 text-5xl'>Better food for
            more people</h1>
          <h3 className=' text-gray-500 text-xl'>For over a decade, we’ve enabled our customers to discover new tastes, delivered right to their doorstep</h3>
        </div>



      </section>

      <section className="flex flex-row h-50 w-screen justify-center items-center">
        <div className="w-[50%] h-[43%] rounded-3xl border border-gray-200 shadow-lg bg-white flex justify-between px-5">

          <div className="h-full flex px-3 justify-center items-center">
            <div className="flex flex-col justify-center pr-3 items-center">
              <h1 className="text-3xl font-extrabold text-rose-500">20,000+</h1>
              <p className="text-gray-600">Restaurants</p>
            </div>
            <Store className="w-15 h-15 text-rose-500 border-r border-gray-200 pr-3" />
          </div>

          <div className="h-full flex px-3 justify-center items-center">
            <div className="flex flex-col justify-center pr-3 items-center">
              <h1 className="text-3xl font-extrabold text-rose-500">800+</h1>
              <p className="text-gray-600">Cities</p>
            </div>
            <MapPinPlus className="w-15 h-15 text-rose-500 border-r border-gray-200 pr-3" />
          </div>

          <div className="h-full flex px-3 justify-center items-center">
            <div className="flex flex-col justify-center pr-3 items-center">
              <h1 className="text-3xl font-extrabold text-rose-500">3 Billion+</h1>
              <p className="text-gray-600">Orders Delivered</p>
            </div>
            <Store className="w-15 h-15 text-rose-500 pr-3" />
          </div>

        </div>
      </section>

      <section className='w-screen h-screen  gap-5 flex justify-center items-center'>
        {CardData.map((data) => (
          <div className='border-2 px-5 py-3 w-[20%] h-[60%] rounded-4xl hover:scale-110 transition-all duration-150 flex justify-center text-center flex-col place-items-center'>
            <div onClick={()=>handleRouting()}>
              <img src={data.image} alt={data.title} className='w-full border-2 h-30 rounded-4xl ' />
              <h2 className='py-3'>{data.title}</h2>
              <p className='pb-5'>{data.para}</p>

              <div className='flex justify-center items-center gap-3'>
                <p className=' text-sm'>Check it out </p>
                <ArrowRightCircleIcon />
              </div>
              
            </div>
          </div>
        ))}
      </section>

    </>
  )
}

export default MainPage