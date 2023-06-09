const express = require("express");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

dotenv.config();

app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB!");
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
  connect();
});
