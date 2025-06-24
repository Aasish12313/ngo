const express = require('express');
const router = express.Router();
const ImpactModel = require('../models/impact');
const multer = require('multer');
const cloudinary = require('../utils/cloudinary');
const upload = multer({ storage: multer.memoryStorage() });

// Add metric or story
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const { type, number, label, title, summary } = req.body;

    if (type === 'metric') {
      const result = await ImpactModel.addMetric(number, label);
      return res.status(200).json({ message: 'Metric added', result });
    } else if (type === 'story') {
      let imageUrl = '';
      if (req.file) {
        const imageUpload = await cloudinary.uploader.upload_stream({ resource_type: 'image', upload_preset: 'anupreset47' }, (error, result) => {
          if (error) throw error;
          return result;
        });

        imageUrl = (await new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { upload_preset: 'anupreset47' },
            (error, result) => {
              if (error) reject(error);
              else resolve(result.secure_url);
            }
          );
          stream.end(req.file.buffer);
        }));
      }

      const result = await ImpactModel.addStory(title, summary, imageUrl);
      return res.status(200).json({ message: 'Story added', result });
    } else {
      return res.status(400).json({ error: 'Invalid type' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get all data
router.get('/metrics', async (req, res) => {
  const data = await ImpactModel.getMetrics();
  res.json(data);
});

router.get('/stories', async (req, res) => {
  const data = await ImpactModel.getStories();
  res.json(data);
});

module.exports = router;




router.get('/all', async (req, res) => {
  try {
    const [metrics] = await pool.execute('SELECT * FROM impact_metrics');
    const [stories] = await pool.execute('SELECT * FROM impact_stories');

    res.json({ metrics, stories });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch impact data' });
  }
});