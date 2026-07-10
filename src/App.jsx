import React, { useState } from 'react'
import WeatherHome from './Page/WeatherHome'
import "./App.css"
const App = () => {
  const [input, setInput] = useState("");
  return (
    <div className='bg-gray-400 min-h-screen flex items-center justify-center '>
      <WeatherHome setInput={setInput} Data={input} />
    </div>
  )
}

export default App