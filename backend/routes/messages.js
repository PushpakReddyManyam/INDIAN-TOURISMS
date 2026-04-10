const express = require('express');
const router = express.Router();

// In-memory contact messages store for demo purposes.
const messages = [];

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  messages.push({ id: messages.length + 1, name, email, message, createdAt: new Date() });
  console.log('New contact message:', { name, email, message });

  res.status(201).json({ message: 'Your message has been received. We will contact you soon.' });
});

router.get('/', (req, res) => {
  res.json(messages);
});

module.exports = router;
