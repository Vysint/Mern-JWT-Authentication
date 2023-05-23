const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();

app.use("/api/users", userRoutes);

const connect = () => {
  mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to mongoDB!");
};

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
  connect();
});
