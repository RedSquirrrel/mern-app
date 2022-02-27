const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    // will create an "updatedAt" and "createdAt" field automatically
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', goalSchema);
