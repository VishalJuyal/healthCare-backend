import express from "express";
import Ratings from "../models/ratings"
import { Request, Response } from "express";

const router = express.Router();
const app = express();
const getRatings = async (req: Request, res: Response) => {
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
};

export default { getRatings };

