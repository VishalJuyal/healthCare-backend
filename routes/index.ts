import express from "express";
import ratingRouter from "../controller/rating-controller"
import userRouter from "../controller/user-controller"
const router = express.Router();

router.use("/reviews", ratingRouter);
router.use("/user", userRouter);

export default router;
