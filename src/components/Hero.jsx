import React from 'react'
import { Button } from './ui/button'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-4 md:mx-16 lg:mx-56'>
      <h1 className='font-bold md:font-extrabold my-6 text-[40px] md:text-[50px] lg:text-[60px] text-center leading-tight'><span className='text-[#f56556]'>Discover Your Next Adventure with AI:</span> Personalized ltineraries at Your Fingertips</h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
      <Button className='my-6'>Get Started, It's Free</Button>
    </div>
  )
}

export default Hero