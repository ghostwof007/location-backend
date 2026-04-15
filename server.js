const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/location", (req, res) => {
  const { latitude, longitude } = req.body;

  console.log("📍 New user location:");
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
  console.log("----------------------");

  res.json({ message: "Location received" });
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});