const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

//connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  () => console.log("Connected to MongoDB")
);

//middlewares
app.use(express.json());

//route middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Backend server up and running!"));
