import mongoose from 'mongoose';

const TagScheme = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tag', TagScheme);
