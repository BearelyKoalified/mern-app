const jwt = require('jsonwebtoken');

// middleware to declare route private
function auth(req, res, next) {
  const token = req.header('x-auth-token');

  // check for token
  if (!token) return res.status(401).json({msg: 'no token, authorization denied'});

  try {
    // verify token and Add user from payload
    req.user = process.env.JWT_SECRET;
    next();
  } catch (e) {
    res.status(400).json({msg: 'token is not valid'})
  }
}

module.exports = auth;