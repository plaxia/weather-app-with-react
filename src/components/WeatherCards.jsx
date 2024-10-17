// components/WeatherCards.js
import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
import sunnyImg from '../img/Sunny.webp'
import rainyImg from '../img/rain.webp'

import cloudImg from '../img/Cloudy.webp'
import '../App.css'
function WeatherCards() {
  const { data } = useWeather();
  const { city,setCity } = useWeather();

  // Yükleme durumu
  if (!data) {
    return <div>Loading...</div>; // Yükleme durumu
  }
    function handleChange(e){
        setCity(e.target.value);
    }
    
  return (
<div>
<div className='selectDiv'>
      <label htmlFor="fruit">Bir şehir seçin:</label>
      <select id="cities" onChange={handleChange}>
        <option value="Samsun">seçiniz...</option>
        <option value="Samsun">Samsun</option>
        <option value="Istanbul">İstanbul</option>
        <option value="Kocaeli">Kocaeli</option>
      </select>

    </div>
{city}

    <div className="cards-container">
      
      {data.map((data,index)=>
      {

      const conditionText=data.day.condition.text;
      let imgSrc;
     if(conditionText==='Sunny'){
      imgSrc=sunnyImg;
     }
     else if(conditionText==="Orta kuvvetli yağmurlu")
     {
      imgSrc=rainyImg;
     }
     else if(conditionText==="Bölgesel düzensiz yağmur yağışlı")
     {
      imgSrc=rainyImg;
     }
     else if(conditionText==="Parçalı Bulutlu")
     {
      imgSrc=cloudImg;
     }
     return (
          <div>
        <div  key={index} className='card'> 
          
        <img src={imgSrc} alt="Description" />
        <p> Tarih: { data.date}  </p>

          <p> Sıcaklık: { data.day.avgtemp_c}  </p>
          <p> Hava Durumu: { conditionText}   </p>
           
           </div>
        
        </div>
      )
        
    })}
    </div>
    </div>
  );
}


export default WeatherCards;
