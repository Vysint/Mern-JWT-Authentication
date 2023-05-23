const express = require("express");

const { authUser } = require("../controllers/userController");

const router = express.Router();

router.post("/auth", authUser);

module.exports = router;
