const mongoose = require('mongoose');

const mountainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  heightAtPeakInFeet: {
    type: Number,
    required: true,
    min: 0
  },
  city: {
    type: String,
  },
  state: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Mountain', mountainSchema);
