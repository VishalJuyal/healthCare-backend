import jwt from "jsonwebtoken";
import { z } from "zod";

// const userSchema = z.object({
//   userName: z.string().email(),
//   password: z.string().length(10),
// });

export const authMiddleWare = (req: any, res: any, next: any) => {
  try {
    // const { userName, password } = req.query;
    const { userName, password, jwtToken } = req.query;
    // console.log(jwtToken);
    // const valiDation = userSchema.parse({ userName, password });
    // const token = jwt.sign(req.query, "secret", { expiresIn: "1h" });
    const token = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log(token);
    next();
  } catch (error) {
    res.status(400).send({ message: error?.message || "Arguments required" });
    console.log(error);
  }
};
