const mongoose = require("mongoose");
// const { Schema } = mongoose;
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL, {})
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((err) => {
    console.log("error while connecting mongodb", err);
  });
