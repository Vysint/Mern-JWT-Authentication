// @desc   Auth user/set token
// route   POST /api/users/auth
// @access Public

exports.authUser = async (req, res) => {
  res.status(200).json({ message: "Auth User" });
};
