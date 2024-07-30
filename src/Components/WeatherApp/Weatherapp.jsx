
import React, { useState, useEffect } from 'react';
import './Weatherapp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';
import cloud_icon from '../Assets/cloud.png';
import snow_icon from '../Assets/snow.png';

const Weatherapp = () => {

    const api_key = "0e8577566facdfad6d795f7481c130ec"
    // const api_key = process.env.REACT_APP_API_KEY;
    // console.log(`API Key: ${api_key}`);

    const defaultCity = 'New York'; 
    const [city, setCity] = useState('');
    const [icon, setIcon] = useState(cloud_icon);
    const [error, setError] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [initialFetchDone, setInitialFetchDone] = useState(false);

    useEffect(() => {
        fetchWeatherData(defaultCity);
        setInitialFetchDone(true);
    }, []);

    const fetchWeatherData = async (city) => {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`);
            let data = await response.json();

            if (response.ok) {
                setError('');
                setWeatherData(data);
                setWeatherIcon(data.weather[0].icon);
            } else {
                setError("No data found, enter proper location.");
                setWeatherData(null);
            }
        } catch (error) {
            setError("No data found, enter proper location.");
            setWeatherData(null);
        }
    };

    const setWeatherIcon = (weatherIcon) => {
        switch (weatherIcon) {
            case "01d":
            case "01n":
                setIcon(clear_icon);
                break;
            case "02d":
            case "02n":
                setIcon(cloud_icon);
                break;
            case "03d":
            case "03n":
            case "04d":
            case "04n":
                setIcon(drizzle_icon);
                break;
            case "09d":
            case "09n":
            case "10d":
            case "10n":
                setIcon(rain_icon);
                break;
            case "13d":
            case "13n":
                setIcon(snow_icon);
                break;
            default:
                setIcon(clear_icon);
                break;
        }
    };

    const handleSearch = () => {
        if (city.trim() === "") {
            setError("No data found, enter proper location.");
            setWeatherData(null);
        } else {
            fetchWeatherData(city);
        }
    };

    return (
        <div className='container'>
            <div className="top-bar">
                <input 
                    type="text" 
                    className='cityInput' 
                    id="autocompleteInput" 
                    placeholder={initialFetchDone ? "search" : ""} 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                />
                <div className="search-icon" onClick={handleSearch}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            {error && <div className="error-message">{error}</div>}
            {weatherData && !error && (
                <>
                    <div className="weather-image">
                        <img src={icon} alt="" />
                    </div>
                    <div className="weather-temp">{Math.floor(weatherData.main.temp)}°c</div>
                    <div className="weather-location">{weatherData.name}</div>
                    <div className="data-container">
                        <div className="element">
                            <img src={humidity_icon} alt='' className='icon' />
                            <div className="data">
                                <div className="humidity-percentage">{weatherData.main.humidity} %</div>
                                <div className="text">Humidity</div>
                            </div>
                        </div>
                        <div className="element">
                            <img src={wind_icon} alt='' className='icon' />
                            <div className="data">
                                <div className="wind-rate">{Math.floor(weatherData.wind.speed)} Km/h</div>
                                <div className="text">Wind speed</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Weatherapp;
