const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User.model');

module.exports = {
  // Login
  login: (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
      if (err) return res.status(500).send('Error on the server');
      if (!user) return res.status(404).send('No user found');
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) return res.status(401).send('Not authorized');
      const expiresIn = 86400;
      const token = jwt.sign({ id: user._id }, 'secretKey', {
        expiresIn
      });
      res.status(200).send({
        expiresIn,
        token
      });
    })
  },
  // Register
  register: (req, res) => {
    const { name, username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const data = {
      name,
      username,
      password: hashedPassword
    }
    User.create(data, (err, result) => {
      if (err) return res.status(500).send('There was a problem registering the user');
      // const expiresIn = 86400;
      // const token = jwt.sign({ id: result._id }, 'secretKey', {
      //   expiresIn
      // });
      res.status(200).send(result);
    })
  },
  // Reset password
  resetPassword: (req, res) => {

  }
}

