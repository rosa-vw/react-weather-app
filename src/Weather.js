import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      date: "Monday 10:00",
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      perceived: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="Form">
          <input
            type="search"
            placeholder="Search a city.."
            className="SearchForm"
          />
          <input type="submit" value="Search" className="SearchButton" />
        </form>
        <h1>{weatherData.city}</h1>
        <h2>{weatherData.country}</h2>
        <ul>
          <li>{weatherData.date}</li>
          <li className="Description">{weatherData.description}</li>
        </ul>
        <div className="WeatherData">
          <div className="Temperature">
            <div className="TempIcon">
              <img src={weatherData.icon} alt={weatherData.description} />
              <div className="TempNumber">
                {Math.round(weatherData.temperature)}
              </div>
              <span>°C</span>
            </div>
          </div>
          <div className="ExtraData">
            <ul>
              <li>Perceived: {Math.round(weatherData.perceived)}°</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind Speed: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f8eo81d182023fdd4fb805t37b75950a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

export default Weather;
