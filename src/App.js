// App.js
import React from 'react';
import { useWeather, WeatherProvider } from './contexts/WeatherContext';
import WeatherCards from './components/WeatherCards';


function App() {
  
  return (
    <WeatherProvider>
      <div className="App">
        <WeatherCards />
      </div>
    </WeatherProvider>
  );
}

export default App;
