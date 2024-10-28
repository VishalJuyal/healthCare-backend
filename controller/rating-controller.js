const express = require("express");
const router = express.Router();
const Ratings = require("../models/ratings");

router.get("/get-ratings", async (req, res) => {
  try {
    const reviews = await Ratings.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
