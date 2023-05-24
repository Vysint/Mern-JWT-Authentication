const bcrypt = require("bcryptjs");

const createError = require("../utils/createError");
const User = require("../models/userModel");

// @desc   Auth user/set token
// route   POST /api/users/auth
// @access Public

exports.authUser = async (req, res) => {
  res.status(200).json({ message: "Auth User" });
};
// @desc   Register a new user
// route   POST /api/users
// @access Public

exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    next(err);
  }
  if (existingUser) return next(createError(404, "User already exists!"));

  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
      });
  } catch (err) {
    next(err);
  }

  res.status(200).json({ message: "Register User" });
};

// @desc   Logout a user
// route   POST /api/users/logout
// @access Public

exports.logoutUser = async (req, res) => {
  res.status(200).json({ message: "Logout User" });
};
// @desc   GET user profile
// route   GET /api/users/profile
// @access private

exports.getUserProfile = async (req, res) => {
  res.status(200).json({ message: "User Profile" });
};
// @desc   Update user profile
// route   PUT /api/users/profile
// @access private

exports.updateUserProfile = async (req, res) => {
  res.status(200).json({ message: "User Profile updated!" });
};
