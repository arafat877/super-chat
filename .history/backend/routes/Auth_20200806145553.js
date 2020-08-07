const router = require("express").Router();
const User = require("../models/User");

router.post("register", async (res, req) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// router.post('/login',(res,req)=>{

// })

module.exports = router;
