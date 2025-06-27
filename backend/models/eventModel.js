// C:\projects\2nd\ngo\backend\models\eventModel.js
const mongoose = require('../connection');



const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);