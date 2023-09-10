import React from 'react'

export default function SearchBar() {
  return (
    <div className='flex mt-5 justify-center align-center mb-5'>
      <div className='flex  w-56 h-14 absolute bg-primary p-6 font-semibold rounded-full text-2xl left-1/3'>
        <span className='text-white place-self-center'>All Categories</span>
        <span className='place-self-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
        </span>
      </div>
      <div></div>
      <div className='w-1/3 h-14 rounded-full shrink-0 pl-16 bg-white flex justify-center' >
        <input className='ml-36 w-80 pl-6 text-xl outline-none rounded-full'  id='search' name='search' placeholder='Search' />
      </div>

    </div>
  )
}
