const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route (so browser doesn't show "Cannot GET /")
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully");
});

// Main location route
app.post("/location", (req, res) => {
  const { latitude, longitude } = req.body;

  console.log("🔥 API HIT");
  console.log("📍 New user location:");
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
  console.log("----------------------");

  res.json({
    message: "Location received",
    data: {
      latitude,
      longitude
    }
  });
});

// Port (IMPORTANT for Render)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});