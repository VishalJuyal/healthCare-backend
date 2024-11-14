import express from "express";
import ratingRouter from "../controller/rating-controller"
const router = express.Router();

router.use("/reviews", ratingRouter);
router.get("/user", (req: any, res: any) => {
  res.send("Hello World");
});

export default router;
