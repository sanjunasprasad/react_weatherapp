import React, { useState } from 'react'
import './Weatherapp.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
import cloud_icon from '../Assets/cloud.png'
import snow_icon from '../Assets/snow.png'

const Weatherapp = () => {

    let api_key= "515112396013c748f629e5e9539680eb"

    const[icon,seticon] = useState(cloud_icon)


    const search = async() =>{
          const element = document.getElementsByClassName("cityInput")
          if(element[0].value === ""){
            return 0
          }
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

          let response = await fetch( url)
          let data = await response.json()

            const humidity = document.getElementsByClassName("humidity-percentage")
            const wind = document.getElementsByClassName("wind-rate")
            const temperature = document.getElementsByClassName("weather-temp")
            const location = document.getElementsByClassName("weather-location")

            humidity[0].innerHTML =data.main.humidity + " % "
            wind[0].innerHTML = Math.floor(data.wind.speed )+ " Km/h "
            temperature[0].innerHTML =Math.floor( data.main.temperature )+ " °c "
            location[0].innerHTML = data.name


            if(data.weather[0].icon === "01d" || data.weather[0].icon ==="01n"){
                 seticon(clear_icon)
            }
            else   if(data.weather[0].icon === "02d" || data.weather[0].icon ==="02n"){
                 seticon(cloud_icon)
            }
            else   if(data.weather[0].icon === "03d" || data.weather[0].icon ==="03n"){
                    seticon(drizzle_icon)
           }
           else   if(data.weather[0].icon === "04d" || data.weather[0].icon ==="04n"){
                    seticon(drizzle_icon)
            }
          else   if(data.weather[0].icon === "09d" || data.weather[0].icon ==="09n"){
                 seticon(rain_icon)
            }  
            else   if(data.weather[0].icon === "010d" || data.weather[0].icon ==="010n"){
                seticon(rain_icon)
           }
           else   if(data.weather[0].icon === "013d" || data.weather[0].icon ==="013n"){
                 seticon(snow_icon)
            }
            else
            {
                seticon(clear_icon)
            }
    }

  return (
    <div className='container'>
        <div className="top-bar">
             <input type="text" className='cityInput' placeholder="search" />
              <div className="search-icon" onClick={()=>{search()}}>
                  <img src={search_icon} alt="" />
              </div>
        </div>
        <div className="weather-image">
               <img src={icon} alt="" />
        </div>
        <div className="weather-temp">23°c</div>
        <div className="weather-location">LONDON</div>
        <div className="data-container">
            {/* ex1 */}
            <div className="element">
                <img src={humidity_icon} alt='' className='icon' />
                <div className="data">
                    <div className="humidity-percentage">65%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
              {/* ex2 */}
            <div className="element">
                <img src={wind_icon} alt='' className='icon' />
                <div className="data">
                    <div className="wind-rate">65 kmphr</div>
                    <div className="text">Wind speed</div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Weatherapp
