import React, { useState } from 'react'

const Searchbar = ({ setInput }) => {

  return (
    <>

      <div className="flex items-center border pr-3 gap-2  border-white/30 h-[40px] w-[300px] rounded-2xl overflow-hidden  bg-white/0 backdrop-blur-lg">
        <input type="text" placeholder="Search for a city" onChange={(e) => { setInput(e.target.value) }} className="w-full h-full pl-5 outline-none text-white placeholder-white/70 text-sm" />
        <button type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="#6B7280">
            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
          </svg>
        </button>
      </div>

    </>

  )
}

export default Searchbar