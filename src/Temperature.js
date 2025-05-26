import React, { useState } from "react";

function Temperature(props) {
  const [unit, setUnit] = useState("metric");

  function convertToImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function convertToMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "metric") {
    return (
      <div className="Temperature">
        <div className="TempNumber">{Math.round(props.celsius)}</div>
        <span className="Unit">
          °C /{" "}
          <a href="/" onClick={convertToImperial}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <div className="TempNumber">{Math.round(fahrenheit())}</div>
        <span className="Unit">
          <a href="/" onClick={convertToMetric}>
            °C
          </a>{" "}
          / °F
        </span>
      </div>
    );
  }
}

export default Temperature;
