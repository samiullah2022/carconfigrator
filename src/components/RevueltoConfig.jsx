import React, { useContext, useState } from 'react'
import revueltoOrange from '../assets/internal.jpg'
import Internal from './Internal'
import { SliderContext } from '../context/SliderContext'
import Gallery from './Gallery'
const RevueltoConfig = () => {
  const slide = useContext(SliderContext)
  return (
    <div className='bg-white w-full h-[100vh] lg:flex items-center justify-between'>
      
      <div className='relative w-full lg:w-[75%] h-[60vh] lg:h-full'>
        <img className='w-full object-cover h-full' src={slide.arr} alt="" />
        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 '>
        <Gallery />
        </div>
      </div>

      <div className='lg:bg-gray-900 w-full lg:w-[25%] h-[40vh] lg:h-full p-2'>
        <Internal />
      </div>
    </div>
  )
}

export default RevueltoConfig