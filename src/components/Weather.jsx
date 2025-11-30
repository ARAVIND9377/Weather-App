import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const Weather = () => {
    const [city,setCity] = useState("")

    const [weather,setWeather] = useState("")
    const [temp,setTemp] = useState("")
    const [desc,setDesc] = useState("")


    function handleCity(evt){
        setCity(evt.target.value)
    }

    function getWeather(){
        var weatherData = axios (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f95e424c4d997dd50995ab61a1fa177b`)

        weatherData.then((success)=>{
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            setDesc(success.data.weather[0].description)
            setTemp(success.data.main.temp)
        })
    }
  return (
    <div className='bg-black p-20'>
        <div className='bg-green-400 p-10 rounded-md flex flex-col '>
            <h1 className='text-2xl font-medium text-left'>Weather Report</h1>
            <p className='text-left'>I can give you a weather report about your city !</p>
            <input type='text' onChange={handleCity} className='mt-2 border border-black rounded w-36' />
            <button onClick={getWeather} className='bg-black text-white p-2 rounded-md mt-2 w-28'>Get Report</button>

            
        <div className='mt-2 text-left'>
            <h1><b>Weather: {weather}</b></h1>
            <p><b>Temperature: {temp}</b></p>
            <p><b>Description: {desc}</b></p>

        </div>
        </div>


    </div>
  )
}

export default Weather