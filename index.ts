import express from "express";
import mainRouter from "./routes/index"
import connectDB from "./db";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";


dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
connectDB();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONT_END_HOST || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    credentials: true,
  })
);
app.options("*", cors());

app.use("/api/v1", mainRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

