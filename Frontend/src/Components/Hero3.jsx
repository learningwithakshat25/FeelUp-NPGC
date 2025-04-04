import React from 'react'
import Hero from '../assets/Hero-Asset/Hero-2.jpg'

const Hero3 = () => {
  return (
    <div className=' mx-auto w-full p-4 bg-white text-[#47191D] flex flex-row items-center justify-between'>
      <div className="left w-1/2 flex flex-col gap-10 items-center justify-center ">
      <div className="heading flex-col flex gap-3">
        <div className="h1 flex flex-col items-center justify-center">
          <h1 className='font-semibold text-5xl'>See it, make it,</h1>
          <h1  className='font-semibold text-5xl'> try it, do it</h1>
        </div>
        <div className="h2 flex flex-col items-center justify-center">
          <h2 className='font-semibold text-3xl'>This part of feeluP is</h2>
          <h2 className='font-semibold text-3xl'>discovering new things.</h2>
        </div>
      </div>
          <button className='text-white rounded-lg p-2 bg-[#B60000] text-2xl font-semibold cursor-pointer'>Explore now</button>
      </div>
      <div className="right w-1/2 flex items-center justify-center">
        <img className='h-96' src={Hero} alt="hero_img" />
      </div>
    </div>
  )
}

export default Hero3