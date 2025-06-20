const express = require('express');
const router = express.Router();

// Dummy in-memory store for demo
const tenants = [];

router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Tenant name required' });

  const tenant = { id: tenants.length + 1, name };
  tenants.push(tenant);
  res.status(201).json(tenant);
});

router.get('/', (req, res) => {
  res.json(tenants);
});

module.exports = router;
