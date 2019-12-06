const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  conifer: {
    type: Boolean,
  },
  averageHeight: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Tree', treeSchema);
