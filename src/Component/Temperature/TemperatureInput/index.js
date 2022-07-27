import React from "react";

const scaleNames = {
  c: "Цельсия",
  f: "Фаренгейта",
};

const TemperatureInput = (props) => {
  const { temperature, scale, onTemperatureChange } = props;

  const handlerChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handlerChange} />
    </fieldset>
  );
};

export default TemperatureInput;
