const mongoose = require("mongoose");

const defaultRatingSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    maxlength: 500,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const DefaultRating = mongoose.model("DefaultRating", defaultRatingSchema);

module.exports = DefaultRating;
