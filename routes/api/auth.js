const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

// Item Model
const User = require('../../models/User');

// @route   POST api/auth
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
  const {email, password} = req.body;

  // simple validation
  if (!email || !password) {
    return res.status(400).json({msg: 'Please enter all fields'});
  }

  // Check for existing user
  User.findOne({email})
    .then(user => {
      if (!user) return res.status(400).json({msg: 'User does not exists'});

      // validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({msg: 'invalid credentials'});
          jwt.sign(
            {id: user.id},
            process.env.NODE_ENV === "production" ? process.env.JWT_SECRET : config.get('jwtSecret'),
            {expiresIn: 3600},
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          );
        });
    });
});

// @route   GET api/auth/users
// @desc    Get user data - validate user against token
// @access  Private
router.get('/users', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});


module.exports = router;
