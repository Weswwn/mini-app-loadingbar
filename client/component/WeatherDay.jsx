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
        return (
            <WeatherBox className="weather-container" >
                <span key={this.props.index}> 
                    <span>{this.props.weather.main.temp_min}</span>
                    {' '}
                    <span>{this.props.weather.main.temp_max}</span>
                    {' '}
                </span>
            </WeatherBox>
        )
    }
}
export default WeatherDay;