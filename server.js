const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Strong CORS fix
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// ✅ Handle preflight requests
app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.post("/location", (req, res) => {
  console.log("🔥 HIT RECEIVED");
  console.log("📍 Location:", req.body);

  res.json({ message: "Location received" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});