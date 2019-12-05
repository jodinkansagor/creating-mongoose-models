const mongoose = require('mongoose');

const tarotSchema = new mongoose.Schema({
  cardName: {
    type: String,
    required: true
  },
  majorArcana: {
    type: Boolean,
    required: true,
  },
  minorArcana: {
    type: Boolean,
    required: true,
  },
  suit: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Tarot', tarotSchema);
