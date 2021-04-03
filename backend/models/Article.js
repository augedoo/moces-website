const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  slug: String,
  imageUrl: {
    type: String,
    required: true,
    default: 'no-photo.jpg',
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: 'ArticleTag',
  },
  author: {
    ref: 'Member',
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('article', ArticleSchema);
