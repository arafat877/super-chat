const express = require("express")
const app = express();

const authRoute = require('./routes/auth');





app.listen(3000, ()=>console.log("Backend server up and running!"))