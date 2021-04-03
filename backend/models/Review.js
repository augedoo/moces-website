const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a title for the review'],
    maxlength: 100,
  },
  text: {
    type: String,
    required: [true, 'Please add some text'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, 'Please add a rating between 1 and 10'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  article: {
    type: mongoose.Schema.ObjectId,
    ref: 'Article',
    require: true,
  },
  member: {
    type: mongoose.Schema.ObjectId,
    ref: 'Member',
    require: true,
  },
});

// Preview member from submitting more than 1 review per article
ReviewSchema.index({ article: 1, member: 1 }, { unique: true });

// Static method to get average rating and save
ReviewSchema.statics.getAverageRating = async function (articleId) {
  const obj = await this.aggregate([
    {
      $match: { article: articleId },
    },
    {
      $group: {
        _id: '$article',
        averageRating: { $avg: '$rating' },
      },
    },
  ]);

  try {
    // Save/Update averageRating of article
    await this.model('Article').findByIdAndUpdate(articleId, {
      averageRating: obj[0].averageRating,
    });
  } catch (err) {
    console.error(err);
  }
};

// Call averageRating after save
ReviewSchema.post('save', function () {
  this.constructor.getAverageRating(this.article);
});

// Call averageRating before remove
ReviewSchema.pre('remove', function () {
  this.constructor.getAverageRating(this.article);
});

module.exports = mongoose.model('Review', ReviewSchema);
