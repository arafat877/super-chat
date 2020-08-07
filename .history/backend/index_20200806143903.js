const express = require("express");
const app = express();
const mongoose = require("mongoose");

//connect to db
mongoose.connect(
  "mongodb+srv://safak:safak@cluster0.by8t1.mongodb.net/super-chat?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("Connected to MongoDB")
);

//import routes
const authRoute = require("./routes/auth");

//import middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Backend server up and running!"));
