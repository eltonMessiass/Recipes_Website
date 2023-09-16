import React, { useEffect, useState } from 'react'
import receitas from '../assets/data'
import clock from '../images/clock.png'
import likeIcon from '../images/like.png'

export default function RecipeCard() {
    
  return (
    <div className='mt-24 w-100 grid grid-cols-3 gap-10'>
        <div className='w-72'>
            <img alt='img-recipe' className='w-full' src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'/>
            <div className='flex justify-between pl-1 pr-2 mt-3'>
              <h3 className='text-white text-semibold '>Thai Basil Tofu Stir</h3>
              <span className='justify-end w-10 h-4 text-xs text-white text-center  bg-secondary'>$ 123</span>
            </div>
            <div className='flex mt-2 justify-between pr-2'>
              <div className='flex gap-2 '>
                <img alt='img-clock' className='w-4' src={clock}/>
                <span className='text-white text-xs'>30 minutes</span>
              </div>
              <div className='flex gap-2'>
                <img src={likeIcon} alt='likeIcon' className='w-4 h-3 cursor-pointer'/>
                <span className='text-white text-xs'>55</span>
              </div>
            </div> 
        </div>


        <div className='w-72'>
            <img alt='img-recipe' className='w-full' src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'/>
            <div className='flex justify-between pl-1 pr-2 mt-3'>
              <h3 className='text-white text-semibold '>Thai Basil Tofu Stir</h3>
              <span className='justify-end w-10 h-4 text-xs text-white text-center  bg-secondary'>$ 123</span>
            </div>
            <div className='flex mt-2 justify-between pr-2'>
              <div className='flex gap-2 '>
                <img alt='img-clock' className='w-4' src={clock}/>
                <span className='text-white text-xs'>30 minutes</span>
              </div>
              <div className='flex gap-2'>
                <img src={likeIcon} alt='likeIcon' className='w-4 h-3'/>
                <span className='text-white text-xs'>55</span>
              </div>
            </div> 
        </div>

        <div className='w-72'>
            <img alt='img-recipe' className='w-full' src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'/>
            <div className='flex justify-between pl-1 pr-2 mt-3'>
              <h3 className='text-white text-semibold '>Thai Basil Tofu Stir</h3>
              <span className='justify-end w-10 h-4 text-xs text-white text-center  bg-secondary'>$ 123</span>
            </div>
            <div className='flex mt-2 justify-between pr-2'>
              <div className='flex gap-2 '>
                <img alt='img-clock' className='w-4' src={clock}/>
                <span className='text-white text-xs'>30 minutes</span>
              </div>
              <div className='flex gap-2'>
                <img src={likeIcon} alt='likeIcon' className='w-4 h-3'/>
                <span className='text-white text-xs'>55</span>
              </div>
            </div> 
        </div>

        <div className='w-72'>
            <img alt='img-recipe' className='w-full' src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'/>
            <div className='flex justify-between pl-1 pr-2 mt-3'>
              <h3 className='text-white text-semibold '>Thai Basil Tofu Stir</h3>
              <span className='justify-end w-10 h-4 text-xs text-white text-center  bg-secondary'>$ 123</span>
            </div>
            <div className='flex mt-2 justify-between pr-2'>
              <div className='flex gap-2 '>
                <img alt='img-clock' className='w-4' src={clock}/>
                <span className='text-white text-xs'>30 minutes</span>
              </div>
              <div className='flex gap-2'>
                <img src={likeIcon} alt='likeIcon' className='w-4 h-3'/>
                <span className='text-white text-xs'>55</span>
              </div>
            </div> 
        </div>
    </div>
  )

}
