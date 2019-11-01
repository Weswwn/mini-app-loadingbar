import React from 'react';
import styled from 'styled-components';

const WeatherBox = styled.span`
    display: flex;
    flex-direction: row;
    width: 25%;
    border: 1px red;
`
class WeatherDay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // (0°C × 9/5) + 32
        return (
            <WeatherBox className="weather-container" >
                <span key={this.props.index}> 
                    {this.props.degreeChoice === 'metric' ? <span>{this.props.weather.main.temp_min} CELCIUS</span> : 
                        <span>{(this.props.weather.main.temp_min * 9/5) + 32} FAHRENHEIT</span>}   
                    {' '}
                    <span>{this.props.weather.main.temp_max}</span>
                    {' '}
                    <span>{this.props.weather.date}</span>
                </span>
            </WeatherBox>
        )
    }
}
export default WeatherDay;