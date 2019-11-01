import React from 'react';
import WeatherDay from './WeatherDay.jsx';

var WeatherList = (props) => {
  return (
      <div key='weatherList'>
        {props.weatherlist.map((eachWeatherDay, index) => <WeatherDay degreeChoice={props.degreeChoice} index={index} weather={eachWeatherDay}/>)}
      </div>
  )
}

export default WeatherList;