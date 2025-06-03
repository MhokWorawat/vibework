const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const user = {
  email: 'admin@example.com',
  password: bcrypt.hashSync('password123', 10)
};

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email !== user.email || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;