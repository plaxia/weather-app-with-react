// contexts/WeatherContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
       
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=bd0ea8cf0c0c408aad9142519241710&q=${city}&days=7&aqi=no&alerts=no&lang=tr`);
        const forecastDays = response.data.forecast.forecastday;
        setData(forecastDays);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };
    getData();
  }, [city]);

  return (
    <WeatherContext.Provider value={{ data,city,setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
