import React from 'react'



export default function FilterBar() {
  return (
    <div className='flex flex-col gap-2 w-72 flex-start ml-10'>
      <h2 className='text-secondary text-5xl text-semibold mb-10'>Filter Recipes</h2>
      <div className='flex flex-col gap-2 w-72 flex-start ml-10'>
        <h3 className='text-secondary text-3xl font-semibold' >Diet</h3>
        <span className='text-white font-normal text-lg'>Dairy free</span>
        <span className='text-white font-normal text-lg'>Egg free</span>
        <span className='text-white font-normal text-lg'>Gluten Free</span>
      </div>

      <div className='flex flex-col gap-2 w-72 flex-start ml-10'>
        <h3 className='text-secondary text-3xl font-semibold'>Allergies</h3>
        <span className='text-white font-normal text-lg'>Gluten</span>
        <span className='text-white font-normal text-lg'>Legumes</span>
        <span className='text-white font-normal text-lg'>Fuite</span>
        <span className='text-white font-normal text-lg'>Grain</span>
      </div>


      <div className='flex flex-col gap-2 w-72 flex-start ml-10'>
        <h3 className='text-secondary text-3xl font-semibold'>Cusine</h3>
        <span className='text-white font-normal text-lg'>Asian</span>
        <span className='text-white font-normal text-lg'>Italian</span>
        <span className='text-white font-normal text-lg'>Chinese</span>
        <span className='text-white font-normal text-lg'>Thai</span>
      </div>

      <div className='flex flex-col gap-2 w-72 flex-start ml-10'>
        <h3 className='text-secondary text-3xl font-semibold'>Goals</h3>
        <span className='text-white font-normal text-lg'>Wight loss</span>
        <span className='text-white font-normal text-lg'>Activities</span>
        <span className='text-white font-normal text-lg'>Freshness</span>
        <span className='text-white font-normal text-lg'>Rich Nutritions</span>
      </div>
    </div>
  )
}
