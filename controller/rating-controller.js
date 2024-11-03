const express = require("express");
const router = express.Router();
const Ratings = require("../models/ratings");

router.get("/get-ratings", async (req, res) => {
  try {
    const reviews = await Ratings.find();
    console.log(reviews);
    return res.status(200).json({
      status: 200,
      reviews: reviews,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/submit-rating", async (req, res) => {
  try {
    const { name, rating, comment } = req?.body;
    const ipAddress = req.ip;
    console.log(req?.body);
    const updatedRating = await Ratings.findOneAndUpdate(
      { ipAddress },
      { name, rating, comment, ipAddress },
      { new: true, upsert: true }
    );
    return res.status(200).json({
      status: 200,
      message: "Rating submitted successfully",
      data: { name, rating, comment },
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
