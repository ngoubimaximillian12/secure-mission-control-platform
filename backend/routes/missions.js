const express = require('express');
const router = express.Router();

// In-memory mission store (replace with DB later)
const missions = [];

// Create new mission (Protected route)
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const newMission = {
    id: missions.length + 1,
    title,
    description,
    createdBy: req.user?.username || 'unknown'
  };
  missions.push(newMission);
  res.status(201).json(newMission);
});

// Get all missions
router.get('/', (req, res) => {
  res.json(missions);
});

module.exports = router;
