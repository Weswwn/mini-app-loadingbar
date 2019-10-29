const { db, Weather } = require('../database/index.js');

var findWeatherData = (callback) => {
    Weather.find({}, (err, docs) => {
        if (err) {
            return callback(err, null);
        } else if (!docs) {
            return callback(null, docs);
        } else {
            return callback(null, docs);
        }
    })
}

var insertWeatherData = (weatherData) => {
    for (var i = 0; i < weatherData.length; i++) {
        var weatherObj = new Weather({
            date: weatherData[i].dt_txt,
            main: weatherData[i].main,
            weather: weatherData[i].weather[0]
        });
        weatherObj.save((err, weatherObj) => {
            if (err) return console.log(err)
        })
    }
}

module.exports = {
    findWeatherData: findWeatherData,
    insertWeatherData: insertWeatherData
}