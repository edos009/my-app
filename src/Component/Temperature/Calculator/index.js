import React, { Component } from "react";
import TemperatureInput from "../TemperatureInput/index";
import BoilingVerdict from '../BoilingVerdict/index';

const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature, convert) => {
  const input = parseInt(temperature);
  if (Number.isNaN(input)) {
    return "";
  }

  const output = convert(input);
  return Math.round(output);
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c",
    };
  }

  handleCelsiusChange = (temperature) => {
    this.setState({ scale: "c", temperature });
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({ scale: "f", temperature });
  };

  render() {
    const { temperature, scale } = this.state;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;

    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={celsius} />
      </>
    );
  }
}

export default Calculator;
