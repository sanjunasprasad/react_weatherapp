import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weatherapp from './Components/WeatherApp/Weatherapp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Weatherapp />
  </React.StrictMode>
);

