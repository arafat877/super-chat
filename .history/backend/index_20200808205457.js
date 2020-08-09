const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const groupRoute = require("./routes/groups");
const privateRoute = require("./routes/privates");
const messageRoute = require("./routes/messages");

dotenv.config();

//connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to MongoDB")
);

//middlewares
app.use(express.json());

//route middlewares
app.use("/api/user", authRoute);
app.use("/api/users", userRoute);
app.use("/api/groups", groupRoute);
app.use("/api/privates", privateRoute);
app.use("/api/messages", messageRoute);

app.listen(5000, () => console.log("Backend server up and running!"));
