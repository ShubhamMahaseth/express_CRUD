const express = require("express");
const handleLogin = require("../controllers/login");
const handleSignup = require("../controllers/signup");
const router = express.Router();

router.post("/login", handleLogin);
router.post("/signup", handleSignup);

module.exports = router;
