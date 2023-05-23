const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const connect = () => {
  mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to mongoDB!");
};

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
  connect();
});
