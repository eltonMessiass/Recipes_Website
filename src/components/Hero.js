import React from 'react';
import  Banner  from "../images/banner.png";

export default function Hero() {
  return (
    <div className='inline-flex w-full flex-col'>
      <img src={Banner} alt='banner' className='w-full h-80'/>
      <p className='absolute text-white  left-11 pt-32  text-6xl'>Meat <span className='font-semibold'>Chicken</span></p>
    </div>
  )
}
