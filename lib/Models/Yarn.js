const mongoose = require('mongoose');

const yarnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true
  },
  unitOfMeasurementForLength: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Yarn', yarnSchema);

