const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express()

app.use(cors());
app.use(express.json());

const connectDB = require("./config/db");

connectDB();

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Negotia API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});