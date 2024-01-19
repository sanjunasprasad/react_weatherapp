import React from 'react'
import './Weatherapp.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
import cloud_icon from '../Assets/cloud.png'


const Weatherapp = () => {

    let api_key= "f7fea25cef6bec0caca09fa0d27108ec"
    
  return (
    <div className='container'>
        <div className="top-bar">
             <input type="text" className='cityInput' placeholder="search" />
              <div className="search-icon">
                  <img src={search_icon} alt="" />
              </div>
        </div>
        <div className="weather-image">
               <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">23°C</div>
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
                    <div className="humidity-percentage">65 kmphr</div>
                    <div className="text">Wind speed</div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Weatherapp
