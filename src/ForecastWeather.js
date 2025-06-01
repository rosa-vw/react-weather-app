import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastWeatherDay from "./ForecastWeatherDay";

import "./ForecastWeather.css";

function ForecastWeather(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.data.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="ForecastWeather">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="ForecastWeather" key={index}>
                <ForecastWeatherDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "f8eo81d182023fdd4fb805t37b75950a";
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading forecast...";
  }
}

export default ForecastWeather;
