import React from 'react'
import Hero from '../assets/Hero-Asset/Hero.avif'

const Hero1 = () => {
  return (
    <div className=' mx-auto w-full p-4 bg-[#BBEEFF] text-[#046668] flex flex-row items-center justify-between'>
      <div className="left w-[50%] flex flex-col items-center justify-center gap-10 ">
        <div className="heading flex flex-col gap-5 items-center justify-center">
          <h1 className='font-semibold text-5xl'>Welcome to FeeluP</h1>
          <h2 className='font-semibold text-3xl'>Make yourself feel calm</h2>
        </div>
          <button className='text-white rounded-lg p-2 bg-[#B60000] text-2xl font-semibold cursor-pointer'>Explore now</button>
      </div>
      <div className="right w-[50%] flex items-center justify-center">
        <img className='h-96' src={Hero} alt="hero_img" />
      </div>
    </div>
  )
}

export default Hero1