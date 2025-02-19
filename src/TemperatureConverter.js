import React, { useState } from 'react';

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => (
  <fieldset>
    <legend>Enter temperature in {scale}:</legend>
    <input
      value={temperature}
      onChange={(e) => onTemperatureChange(e.target.value)}
    />
  </fieldset>
);

// Define a functional component TemperatureConverter
const TemperatureConverter = () => {
  // Initialize two state variables: celsius and fahrenheit, both set to empty strings
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Define a function to convert Fahrenheit to Celsius
  const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

  // Define a function to convert Celsius to Fahrenheit
  const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

  // Define a function to handle changes to the Celsius input field
  const handleCelsiusChange = (temperature) => {
    // Update the celsius state variable with the new temperature
    setCelsius(temperature);
    // Calculate the corresponding Fahrenheit temperature and update the fahrenheit state variable
    setFahrenheit(Math.round(toFahrenheit(temperature)));
  };

  // Define a function to handle changes to the Fahrenheit input field
  const handleFahrenheitChange = (temperature) => {
    // Update the fahrenheit state variable with the new temperature
    setFahrenheit(temperature);
    // Calculate the corresponding Celsius temperature and update the celsius state variable
    setCelsius(Math.round(toCelsius(temperature)));
  };

  // Render two TemperatureInput components, one for Celsius and one for Fahrenheit
  return (
    <div>
      <TemperatureInput
        scale="Celsius"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="Fahrenheit"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
};

export default TemperatureConverter;