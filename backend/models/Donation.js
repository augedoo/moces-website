const mongoose = require('mongoose');

const DonationSchema = mongoose.Schema({
  type: {
    type: [String],
    required: true,
    enum: ['financial', 'material', 'service'],
  },
  amount: {
    type: Number,
  },
  comment: {
    type: String,
    required: true,
  },
  member: {
    type: mongoose.Schema.ObjectId,
    ref: 'Member',
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('donation', DonationSchema);
