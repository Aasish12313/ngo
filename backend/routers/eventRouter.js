const express = require('express');
const router = express.Router();
const Event = require('../models/eventModel');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new event
router.post('/', async (req, res) => {
  try {
    const { name, date, targetAmount } = req.body;
    const newEvent = new Event({ name, date, targetAmount });
    const saved = await newEvent.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Toggle event completion
router.put('/:id/complete', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    event.isCompleted = !event.isCompleted;
    const updated = await event.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;