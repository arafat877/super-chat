const router = require("express").Router();
const User = require("../model/User");

router.post("/register", (res, req) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user.save()
  .then(() => res.json("User added"))
  .catch((err) => res.status(400).json("Error: " + err));
  
  
});

module.exports = router;
