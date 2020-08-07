const router = require("express").Router();
const User = require("../models/User");

router.post("register", (res, req) => {
  const user = new User({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
  })
});

// router.post('/login',(res,req)=>{

// })

module.exports = router;
