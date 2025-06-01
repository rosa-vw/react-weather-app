import React from "react";

function ForecastWeatherDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <div className="ForecastIcon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
      </div>
      <div className="ForecastTemperature">
        <span className="ForecastTemperatureMax">
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
        <span className="ForecastTemperatureMin">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}

export default ForecastWeatherDay;
