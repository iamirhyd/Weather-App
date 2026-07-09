import React from 'react'
import Searchbar from './Searchbar'
const Loading = ({ setInput }) => {
  return (
    <div className='w-[390px] h-[844px] bg-linear-to-r from-gray-900 to-gray-700 mx-auto lg:rounded-3xl shadow-2xl overflow-hidden'>
      <div className='bg-radial h-full w-full flex flex-col items-center justify-center'>
        <Searchbar setInput={setInput} />
        <p className='text-white text-2xl mt-10'>⏳ Type a city name to load...</p>
      </div>
    </div>
  )
}

export default Loading