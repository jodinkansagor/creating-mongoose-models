const mongoose = require('mongoose');

const skaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true,
  },
  skaterNumber: {
    type: Number,
    required: true,
    min: 0,
    max: 9999
  },
  positions: {
    type: [String],
    enum: ['blocker', 'jammer', 'pivot', 'offense']
  }
});

module.exports = mongoose.model('Skater', skaterSchema);
