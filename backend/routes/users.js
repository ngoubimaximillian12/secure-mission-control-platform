const express = require('express');
const router = express.Router();

// Dummy users list for example
const users = [
  { id: 1, username: 'admin', role: 'admin' }
];

router.get('/', (req, res) => {
  res.json(users);
});

module.exports = router;
