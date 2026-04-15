const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Simple & safe CORS (this is enough)
app.use(cors());

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Location route
app.post("/location", (req, res) => {
  console.log("🔥 HIT RECEIVED");
  console.log("📍 Location:", req.body);

  res.json({ message: "Location received" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});