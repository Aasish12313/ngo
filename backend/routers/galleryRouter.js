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
  api_key: '862668851362822',         // 🔁 Replace
  api_secret: 'nMqwplSkAD5t6DRK6oMkMCbT3Oo',   // 🔁 Replace
});

// ✅ Upload Endpoint
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const stream = cloudinary.uploader.upload_stream(
      {
        upload_preset: 'anupreset47',
        folder: 'ngo_gallery',
      },
      async (error, result) => {
        if (error) {
          console.error('Cloudinary Upload Error:', error);
          return res.status(500).json({ error: 'Cloudinary upload failed' });
        }

        const newImage = new Gallery({
          imageUrl: result.secure_url,
          publicId: result.public_id,
        });

        await newImage.save();
        res.status(201).json(newImage);
      }
    );

    stream.end(req.file.buffer);
  } catch (err) {
    console.error('Upload Error:', err);
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
    const cloudRes = await cloudinary.uploader.destroy(image.publicId);
    console.log('Cloudinary Response:', cloudRes);

    // Delete from MongoDB
    await image.deleteOne();

    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (err) {
    console.error('Delete Error:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
