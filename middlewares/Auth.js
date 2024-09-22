const jwt = require("jsonwebtoken");

function ensureAuthentication(req, res, next) {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({
      message: "Unauthorized, JWT token is require",
      success: false,
    });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    console.log(decoded,'dd');
    
    next();
  } catch (err) {
    return res.status(403).json({
      message: "Unauthorized, JWT token wrong or expired",
    });
  }
}

module.exports = ensureAuthentication
