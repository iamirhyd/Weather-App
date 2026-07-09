import React from 'react'
import Searchbar from './Searchbar'
const WeatherDataCard = ({ iconCode, setInput, weatherData }) => {
  return (
    <div className='w-[390px] h-[844px] bg-linear-to-r from-gray-900 to-gray-700 mx-auto lg:rounded-3xl md:rounded-3xl  shadow-2xl overflow-hidden'>

      <div className='bg-radial h-full w-full flex flex-col '>

        <div className='h-[15%] flex justify-center items-center'>
          <Searchbar setInput={setInput} />
        </div>

        <div className='h-[60%] flex flex-col justify-center items-center'>
          <img src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`} alt="" className="w-64 h-auto object-cover " />
          <p className='text-white text-5xl font-bold '>{weatherData.title}</p>
          <p className='text-white text-3xl font-medium py-5'>{weatherData.temp}°C</p>
        </div>

        <div className='h-[20%] flex '>

          <div className='flex-2 flex justify-center items-center'>
            <img src="./humidity.png" alt="" className='w-12 mx-1' />
            <div className='flex-col  flex items-center '>
              <p className='text-white text-xl  '>{weatherData.humidity}%</p>
              <p className='text-white text-xl font-bold'>Humidity</p>
            </div>

          </div>
          <div className='flex-2 flex justify-center items-center'>
            <img src="./wind.png" alt="" className='w-12  mx-1' />
            <div className='flex-col  flex items-center '>
              <p className='text-white text-xl  '>{weatherData.windSpeed}Km/h</p>
              <p className='text-white text-xl font-bold'>Wind Speed</p>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default WeatherDataCard