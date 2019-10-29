const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weather', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var weatherSchema = new mongoose.Schema({
  date: String,
  main: Object,
  weather: Object,
  createdAt: {
    type: Date,
    expires: '6000',
    default: Date.now
  }
});

var Weather = mongoose.model('Weather', weatherSchema);

module.exports = {
    db: db,
    Weather: Weather
}