const express = require("express");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

dotenv.config();

app.use("/api/users", userRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB!");
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
  connect();
});
