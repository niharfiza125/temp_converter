import { createSlice } from '@reduxjs/toolkit';

const fahrenheitToCelsius = (temp) => (temp - 32) * 5 / 9;
const kelvinToCelsius = (temp) => temp - 273.15;
const celsiusToFahrenheit = (temp) => (temp * 9 / 5) + 32;
const celsiusToKelvin = (temp) => temp + 273.15;

const initialState = {
  temperature: '',
  convertedTemperature: '',
  fromUnit: '',
  toUnit: '',
};

export const tempSlice = createSlice({
  name: 'temp_converter',
  initialState,
  reducers: {
    convertTemperature: (state, action) => {
      const { temperature, fromUnit, toUnit } = action.payload;
      let tempInCelsius;

      switch (fromUnit) {
        case 'Fahrenheit':
          tempInCelsius = fahrenheitToCelsius(temperature);
          break;
        case 'Kelvin':
          tempInCelsius = kelvinToCelsius(temperature);
          break;
        case 'Celsius':
        default:
          tempInCelsius = temperature;
          break;
      }

      switch (toUnit) {
        case 'Fahrenheit':
          state.convertedTemperature = celsiusToFahrenheit(tempInCelsius);
          break;
        case 'Kelvin':
          state.convertedTemperature = celsiusToKelvin(tempInCelsius);
          break;
        case 'Celsius':
        default:
          state.convertedTemperature = tempInCelsius;
          break;
      }

      state.fromUnit = fromUnit;
      state.toUnit = toUnit;
    },
  },
});

export const { convertTemperature } = tempSlice.actions;

export default tempSlice.reducer;

