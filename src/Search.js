import React, { useState } from "react";
import axios from "axios";

function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function getData(event) {
    function displayWeather(response) {
      let temperature = Math.round(response.data.temperature.current);
      let description = response.data.condition.description;
      let humidity = response.data.temperature.humidity;
      let wind = response.data.wind.speed;
      let icon = response.data.condition.icon;
      let icon_url = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`;

      setWeather(
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
          <li>
            <img src={icon_url} alt="weather_icon" />
          </li>
        </ul>
      );
    }
    event.preventDefault();
    let key = `f8eo81d182023fdd4fb805t37b75950a`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
    axios.get(url).then(displayWeather);
  }

  function saveCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={getData}>
        <input
          type="search"
          placeholder="Search a city..."
          onChange={saveCity}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="Data">{weather}</div>
    </div>
  );
}

export default Search;
