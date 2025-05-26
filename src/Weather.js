import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

import "./Weather.css";

function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      perceived: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "f8eo81d182023fdd4fb805t37b75950a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="Form">
          <input
            type="search"
            placeholder="Search a city.."
            className="SearchForm"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="SearchButton" />
        </form>
        <CurrentWeather data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
