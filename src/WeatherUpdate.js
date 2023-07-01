import React, { useState, useEffect } from 'react';
import './WeatherUpdate.css';

const WeatherUpdate = () => {
  const [weather, setWeather] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=c4e8ff8ad1bfd0a186fee798c2a2fc46&units=metric");
        const data = await response.json();
        setWeather(data);
        setTimestamp(new Date());
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather || !timestamp) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-update">
      <p>{`Current weather in ${weather.name}: ${weather.main.temp.toFixed(2)}°C with ${weather.weather[0].description}.`}</p>
      <p>{`Updated at ${timestamp.toLocaleString()}.`}</p>
    </div>
  );
};

export default WeatherUpdate;
