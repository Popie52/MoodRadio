const axios = require("axios");

const fetchWeather = async (lat, lon) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  const response = await axios.get(url);
  const weather = response.data;
  return {
    location: weather.name,
    condition: weather.weather[0].main,
    description: weather.weather[0].description,
    temperature: weather.main.temp,
    icon: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
  };
};

module.exports = { fetchWeather }