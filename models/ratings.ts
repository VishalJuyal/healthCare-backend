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
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    userId: {
      type: String,
      unique: true,
      default: null,
    },
  },
  { versionKey: false }
);

defaultRatingSchema.index({ userId: 1 },
  { unique: true, partialFilterExpression: { userId: { $exists: true, $ne: null } } }
);

const DefaultRating = mongoose.model("default-rating", defaultRatingSchema);

export default DefaultRating;
