import React from "react";
import FormattedDate from "./FormattedDate";

function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>{props.data.city}</h1>
      <h2>{props.data.country}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="Description">{props.data.description}</li>
      </ul>
      <div className="WeatherData">
        <div className="MainTemperature">
          <div className="TempIcon">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
          <div className="Temperature">
            <div className="TempNumber">
              {Math.round(props.data.temperature)}
            </div>
            <span className="Unit">°C</span>
          </div>
        </div>

        <div className="ExtraData">
          <ul>
            <li>Perceived: {Math.round(props.data.perceived)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Speed: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
