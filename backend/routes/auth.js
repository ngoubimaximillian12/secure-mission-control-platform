const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const USER_DB = {
  username: 'admin',
  passwordHash: bcrypt.hashSync('password', 10),
  role: 'admin'
};

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (username !== USER_DB.username) return res.status(401).send('Invalid username');

  const valid = await bcrypt.compare(password, USER_DB.passwordHash);
  if (!valid) return res.status(401).send('Invalid password');

  const token = jwt.sign(
    { username, role: USER_DB.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

module.exports = router;
