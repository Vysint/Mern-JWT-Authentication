// @desc   Auth user/set token
// route   POST /api/users/auth
// @access Public

exports.authUser = async (req, res) => {
  res.status(200).json({ message: "Auth User" });
};
// @desc   Register a new user
// route   POST /api/users
// @access Public

exports.registerUser = async (req, res) => {
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
