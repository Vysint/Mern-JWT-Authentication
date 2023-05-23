const express = require("express");

const {
  authUser,
  logoutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

module.exports = router;
