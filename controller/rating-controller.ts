import express from "express";
import Ratings from "../models/ratings"
import ratingsController from "../services/rating-service"
import { authMiddleWare } from "../middlewares/authMiddleware";

const router = express.Router();
const app = express();

router.get("/get-ratings", authMiddleWare, async (req: any, res: any) => {
  try {
    const reviews = await ratingsController.getRatings(req, res);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/submit-rating", authMiddleWare, async (req: any, res: any) => {
  try {
    const { name, rating, comment, userId } = req?.body;
    const ipAddress = req.ip;
    console.log(req?.body);
    const updatedRating = await Ratings.findOneAndUpdate(
      { userId: userId },
      {
        name, rating, comment,
        updatedAt: Date.now(),
        $setOnInsert: { createdAt: Date.now() },
      },
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

export default router;
