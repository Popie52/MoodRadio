const { fetchWeather } = require("../services/weatherService");

const getWeatherByCoords = async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "Latitude and Longitude required" });
  }

  try {
    const weatherData = await fetchWeather(lat, lon);
    res.json(weatherData);
  } catch (err) {
    console.error("❌ Weather Error:", err.message);
    res.status(500).json({ error: "Failed to fetch weather" });
  }
};

module.exports = { getWeatherByCoords }