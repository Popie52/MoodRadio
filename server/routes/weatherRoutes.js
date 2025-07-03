const express = require("express");
const {getWeatherByCoords} = require("../controllers/weatherController");

const weatherRoutes = express.Router();


weatherRoutes.get("/", getWeatherByCoords);

module.exports = weatherRoutes;