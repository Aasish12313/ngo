const express = require('express');
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const Gallery = require('../models/galleryModel');

const router = express.Router();

// Multer setup for memory buffer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Cloudinary config
cloudinary.config({
  cloud_name: 'du4tklzpq',
  api_key: '862668851362822',
  api_secret: 'nMqwplSkAD5t6DRK6oMkMCbT3Oo',
});

// ✅ Upload Multiple Images
router.post('/upload', upload.array('images'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No images provided' });
    }

    const savedImages = [];

    // Loop through files and upload each
    for (const file of req.files) {
      const streamUpload = () =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              upload_preset: 'anupreset47',
              folder: 'ngo_gallery',
            },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          );
          stream.end(file.buffer);
        });

      const result = await streamUpload();

      const newImage = new Gallery({
        imageUrl: result.secure_url,
        publicId: result.public_id,
      });

      const saved = await newImage.save();
      savedImages.push(saved);
    }

    res.status(201).json(savedImages);
  } catch (err) {
    console.error('Multiple Upload Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get All Images
router.get('/', async (req, res) => {
  try {
    const images = await Gallery.find().sort({ uploadedAt: -1 });
    res.status(200).json(images);
  } catch (err) {
    console.error('Fetch Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Delete Image
router.delete('/:id', async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ error: 'Image not found in database' });
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(image.publicId);

    // Delete from MongoDB
    await image.deleteOne();

    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (err) {
    console.error('Delete Error:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
