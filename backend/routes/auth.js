const express = require('express');
const crypto = require('crypto');
const router = express.Router();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'pushpakreddy12@admin.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '123456';
const activeTokens = new Set();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Invalid admin credentials.' });
  }

  const token = crypto.randomBytes(24).toString('hex');
  activeTokens.add(token);

  res.json({ token, email });
});

router.post('/logout', (req, res) => {
  const token = req.headers['x-admin-token'];
  if (token) {
    activeTokens.delete(token);
  }
  res.json({ message: 'Logged out successfully.' });
});

const requireAdminAuth = (req, res, next) => {
  const token = req.headers['x-admin-token'];
  if (!token || !activeTokens.has(token)) {
    return res.status(401).json({ message: 'Unauthorized. Admin token missing or invalid.' });
  }
  next();
};

module.exports = {
  authRouter: router,
  requireAdminAuth
};
