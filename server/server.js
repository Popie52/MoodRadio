// server.js
const express = require("express");
const cors = require("cors");
const { getWeatherByCoords } = require("./controllers/weatherController");
require("dotenv").config();
const weatherRoutes = require("./routes/weatherRoutes")

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes 
app.get("/api/ping", (req, res) => {
  res.json({ message: "MoodRadio backend is alive!" });
});

app.get("/", getWeatherByCoords);
app.use("/api/weather", weatherRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
