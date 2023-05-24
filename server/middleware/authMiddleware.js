const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const createError = require("../utils/createError");

const protect = async (req, res, next) => {
  let token = req.cookies.jwt;

  // if (!token) return next(createError(404, "Not Authorized, not token"));

  // jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
  //   if (err) return next(createError(401, "Token is not valid"));
  //   req.user = payload.userId;

  //   next();
  // });

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (err) {
      return next(createError(401, "Not authorized, token failed!"));
    }
  } else {
    return next(createError(401, "Not authorized, no token"));
  }
};

module.exports = protect;
