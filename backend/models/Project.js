const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: String,
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
    default: 'no-photo.jpg',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('project', ProjectSchema);
