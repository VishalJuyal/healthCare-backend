import mongoose from "mongoose";

const defaultRatingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
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
    ipAddress: {
      type: String,
      unique: true,
    },
  },
  { versionKey: false }
);

const DefaultRating = mongoose.model("default-rating", defaultRatingSchema);

export default DefaultRating;
