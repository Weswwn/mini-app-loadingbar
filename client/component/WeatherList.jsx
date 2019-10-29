import React from 'react';
import WeatherDay from './WeatherDay.jsx';

var WeatherList = (props) => {
  return (
      <div key='weatherList'>
        {props.weatherlist.map((eachWeatherDay, index) => <WeatherDay index={index} weather={eachWeatherDay}/>)}
      </div>
  )
}

export default WeatherList;