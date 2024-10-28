const express = require("express");
const app = express();
const router = express.Router();
const ratingRouter = require("../controller/rating-controller");

router.use("/reviews", ratingRouter);
router.get("/user", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
