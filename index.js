const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db.");
  })
  .catch(() => {
    console.log("error connecting to db!!!");
  });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/test", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running ON :", process.env.PORT);
});
