// backend/app.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/auth');
const missionRoutes = require('./routes/missions');
const tenantRoutes = require('./routes/tenants');
const userRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/missions', missionRoutes);
app.use('/api/tenants', tenantRoutes);
app.use('/api/users', userRoutes);

app.get('/healthz', (req, res) => res.send('OK'));

module.exports = app;
