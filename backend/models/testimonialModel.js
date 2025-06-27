const mongoose = require('../connection');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
