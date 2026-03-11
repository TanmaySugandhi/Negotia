const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express()

app.use(cors());
app.use(express.json());

const connectDB = require("./config/db");

connectDB();

const testRoutes = require("./routes/testRoutes");

app.use("/api", testRoutes);

app.get("/", (req, res) => {
  res.send("BargainAI API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});