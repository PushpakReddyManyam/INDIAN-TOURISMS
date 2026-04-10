const express = require('express');
const router = express.Router();
const Place = require('../models/Place');
const { requireAdminAuth } = require('./auth');

// GET all places
router.get('/', async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET place by id
router.get('/:id', async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.json(place);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new place (admin only)
router.post('/', requireAdminAuth, async (req, res) => {
  const { name, location, description, image } = req.body;
  if (!name || !location || !description || !image) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const place = new Place({ name, location, description, image });
  try {
    const newPlace = await place.save();
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update place (admin only)
router.put('/:id', requireAdminAuth, async (req, res) => {
  const { name, location, description, image } = req.body;
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }

    place.name = name || place.name;
    place.location = location || place.location;
    place.description = description || place.description;
    place.image = image || place.image;

    const updatedPlace = await place.save();
    res.json(updatedPlace);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE place (admin only)
router.delete('/:id', requireAdminAuth, async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }

    await place.remove();
    res.json({ message: 'Place deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
