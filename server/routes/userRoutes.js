const express = require("express");

const { check } = require("express-validator");

const {
  authUser,
  logoutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  registerUser
);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

router.get(
  "/profile",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  protect,
  getUserProfile
);
router.put(
  "/profile",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  protect,
  updateUserProfile
);

module.exports = router;
