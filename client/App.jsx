import React from 'react';
import axios from 'axios';
import WeatherList from './component/WeatherList.jsx';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weatherList: [],
        }
    }

    componentDidMount() {
        axios.get('/api/weather')
        .then((response) => {
            console.log(response);
            console.log(response.data.list);
            this.setState({
                weatherList: response.data.list
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <WeatherList weatherlist={this.state.weatherList}/>
        )
    }
}

export default App;