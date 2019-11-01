import React from 'react';
import axios from 'axios';
import WeatherList from './component/WeatherList.jsx';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weatherList: [],
            degreeChoice: 'metric'
        }
    }

    componentDidMount() {
        axios.get('/api/weather', {
            params: {
                degreeChoice: this.state.degreeChoice
            }
        })
        .then((response) => {
            // This if statement is required to format data from database
            // versus from axios get request
            console.log(response.data);
            if (!response.data.list) {
                response.data.list = response.data
            }
            this.setState({
                weatherList: response.data.list
            })
        })
        .catch((error) => {
            console.log('Error:', error);
        })
    }

    render() {
        return (
            <WeatherList degreeChoice = {this.state.degreeChoice} weatherlist={this.state.weatherList}/>
        )
    }
}

export default App;