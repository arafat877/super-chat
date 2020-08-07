const router = require("express").Router();
const User = require("../models/User");

router.post("register", (res, req) => {
  res.send("Register");
});

// router.post('/login',(res,req)=>{

// })

module.exports = router;
