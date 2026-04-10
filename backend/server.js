require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/tourism';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const { authRouter } = require('./routes/auth');
const placesRouter = require('./routes/places');
const messagesRouter = require('./routes/messages');
app.use('/api/auth', authRouter);
app.use('/api/places', placesRouter);
app.use('/api/messages', messagesRouter);

// Database Connection
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
