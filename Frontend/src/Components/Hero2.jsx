import React from 'react'
import Hero from '../assets/Hero-Asset/Hero-3.avif'

const Hero2 = () => {
  return (
    <div className=' mx-auto w-full p-4 bg-[#FAC900] text-[#FBFFFE] flex flex-row items-center justify-between'>
      <div className="right w-[50%] flex items-center justify-center">
        <img className='h-96' src={Hero} alt="hero_img" />
      </div>
      <div className="left w-1/2 flex flex-col gap-10 items-center justify-center  ">
      <div className="heading flex flex-col gap-3 text-white">
          <h1 className='font-semibold text-5xl'>Save ideas you like</h1>
          <div className="h2 flex flex-col items-center justify-center">
          <h2 className='font-semibold text-3xl'>Collect your favourite</h2>
          <h2 className='font-semibold text-3xl'>so you can get back to them later</h2>
          </div>
      </div>
          <button className='text-white rounded-lg p-2 bg-[#B60000] text-2xl font-semibold cursor-pointer'>Explore now</button>
      </div>
    </div>
  )
}

export default Hero2