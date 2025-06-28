const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const Impact = require('../models/impactModel');

//  Cloudinary setup
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'du4tklzpq',
  api_key: '862668851362822',       //  Replace with real key
  api_secret: 'nMqwplSkAD5t6DRK6oMkMCbT3Oo', //  Replace with real secret
});

//  Multer for memory storage (Cloudinary upload)
const storage = multer.memoryStorage();
const upload = multer({ storage });

//  GET all impacts
router.get('/', async (req, res) => {
  try {
    const impacts = await Impact.find().sort({ createdAt: -1 });
    res.json(impacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  POST new impact (image, title, description)
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const file = req.file;

    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    const data = new FormData();
    data.append('file', file.buffer, file.originalname);
    data.append('upload_preset', 'anupreset47');
    data.append('cloud_name', 'du4tklzpq');

    const cloudinaryRes = await axios.post('https://api.cloudinary.com/v1_1/du4tklzpq/image/upload', data, {
      headers: data.getHeaders(),
    });

    const newImpact = new Impact({
      imageUrl: cloudinaryRes.data.secure_url,
      publicId: cloudinaryRes.data.public_id,
      title,
      description,
    });

    const savedImpact = await newImpact.save();
    res.status(201).json(savedImpact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  DELETE impact by ID
router.delete('/:id', async (req, res) => {
  try {
    const impact = await Impact.findById(req.params.id);
    if (!impact) return res.status(404).json({ message: 'Impact not found' });

    // Delete image from Cloudinary
    await cloudinary.uploader.destroy(impact.publicId);

    // Delete from MongoDB
    await Impact.findByIdAndDelete(req.params.id);

    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('Error deleting impact:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
