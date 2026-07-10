import React, { useEffect, useState } from 'react'
import WeatherDataCard from '../Components/WeatherDataCard';
import Loading from '../Components/Loading';

const WeatherHome = ({ setInput, Data }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [iconCode, setIconCode] = useState(null);

  useEffect(() => {
    if (!Data) return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Data}&units=metric&appid=${import.meta.env.VITE_APP_ID}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temp: Math.floor(data.main.temp),
          title: data.name
        });
        setIconCode(data.weather[0].icon)
      })
      .catch(error => {
        console.error(error);
        alert("enter a valid city...");
      });
  }, [Data]);
  if (!weatherData) {
    return (
      <Loading setInput={setInput} />
    );
  }
  return (
    <WeatherDataCard setInput={setInput} weatherData={weatherData} iconCode={iconCode} />
  )
}

export default WeatherHome