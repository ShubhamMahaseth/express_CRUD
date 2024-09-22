const accountModel = require("../models/account.model");
const bcrypt = require("bcrypt");

async function handleSignup(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await accountModel.findOne({ email });

    if (user) {
      return res.status(409).json({
        message: "User is already exist, you can login",
        success: false,
      });
    }
    const AccountModel = new accountModel({ name, email, password });
    AccountModel.password = await bcrypt.hash(password, 10);
    await AccountModel.save();
    return res.status(201).json({
      message: "Signup successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: `Internal server error ${err}`,
      success: false,
    });
  }
}

module.exports = handleSignup;
