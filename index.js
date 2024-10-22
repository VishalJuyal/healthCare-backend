const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 3001;
const db = require("./db");
const mainRouter = require("./routes/index");
app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
