const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");


//connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("Connected to MongoDB")
);

//import routes
const authRoute = require("./routes/auth");

//import middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Backend server up and running!"));
