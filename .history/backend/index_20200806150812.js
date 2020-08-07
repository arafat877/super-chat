const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");

dotenv.config();

//connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("Connected to MongoDB")
);

//middlewares
app.use(express.json());

//route middlewares
app.use("/api/user", authRouter);

app.listen(3000, () => console.log("Backend server up and running!"));
