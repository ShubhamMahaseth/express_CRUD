const accountModel = require("../models/account.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await accountModel.findOne({ email });

    if (!user) {
      return res.status(403).json({
        message: "Please signup before login",
        success: false,
      });
    }

    const isPassEqual = bcrypt.compare(password, user.password);

    if (!isPassEqual) {
      return res.status(403).json({
        message: "Password is incorrect",
        success: false,
      });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1m" }
    );

    return res.status(200).json({
      message: "Login success",
      success: true,
      jwtToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

module.exports = handleLogin;
