const router = require("express").Router();
const User = require("../model/User");

router.post("/register", async (res, req) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await user.save()
  } 
  catch{
      console.log("amk")
  }
  
});

module.exports = router;
