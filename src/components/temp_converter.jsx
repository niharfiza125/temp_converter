import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertTemperature } from '../features/tempconverter/tempconverSlice';

function TempConverter() {
  const [temperature, setTemperature] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const dispatch = useDispatch();

  const convertedTemperature = useSelector(state => state.temp_converter.convertedTemperature);

  const handleConvert = () => {
    const tempValue = parseFloat(temperature);
    
  
    dispatch(convertTemperature({
      temperature: tempValue,
      fromUnit,
      toUnit,
    }));
  };

  const isConvertDisabled = !temperature || !fromUnit || !toUnit;

  return (
    <div className="w-full max-w-sm mx-auto">
      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="Enter temperature"
        className="mb-4 px-4 py-3 w-full border border-gray-300 bg-gray-50 rounded-lg shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />

      <select
        value={fromUnit}
        onChange={(e) => setFromUnit(e.target.value)}
        className="mb-4 px-4 py-3 w-full border border-gray-300 bg-gray-50 rounded-lg shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="" disabled>Select from unit</option>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>

      <select
        value={toUnit}
        onChange={(e) => setToUnit(e.target.value)}
        className="mb-6 px-4 py-3 w-full border border-gray-300 bg-gray-50 rounded-lg shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="" disabled>Select to unit</option>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>

      <button
        onClick={handleConvert}
        className={`w-full px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${
          isConvertDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isConvertDisabled}
      >
        Convert
      </button>

      <div className="mt-6 text-xl font-medium text-gray-700 text-center">
        {convertedTemperature !== '' ? (
          <p>Converted Temperature: <span className="text-indigo-600">{convertedTemperature}</span> {toUnit}</p>
        ) : (
          <p>No temperature converted yet</p>
        )}
      </div>
    </div>
  );
}

export default TempConverter;


