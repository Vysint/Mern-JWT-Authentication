const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const User = require("../models/userModel");
const verifyToken = require("../utils/jwt");

// @desc   Auth user/set token
// route   POST /api/users/auth
// @access Public

exports.authUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401);
      throw new Error("Wrong Password!");
    }

    verifyToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    return next(err);
  }
};

// @desc   Register a new user
// route   POST /api/users
// @access Public

exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      res.status(422);
      throw new Error("Invalid inputs passed, please check your data.");
    }
  } catch (err) {
    return next(err);
  }

  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401);
      throw new Error("User already exists, sign in instead.");
    }
  } catch (err) {
    return next(err);
  }

  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    verifyToken(res, savedUser._id);
    res.status(201).json({
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
    });
  } catch (err) {
    return next(err);
  }
};

// @desc   Logout a user
// route   POST /api/users/logout
// @access Public

exports.logoutUser = async (req, res, next) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
};
// @desc   GET user profile
// route   GET /api/users/profile
// @access private

exports.getUserProfile = async (req, res, next) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };

  res.status(200).json(user);
};
// @desc   Update user profile
// route   PUT /api/users/profile
// @access private

exports.updateUserProfile = async (req, res, next) => {
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      res.status(422);
      throw new Error("Invalid inputs passed, please check your data.");
    }
  } catch (err) {
    return next(err);
  }

  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        user.password = hashedPassword;
      }
      const updatedUser = await user.save();
      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (err) {
    return next(err);
  }
};
