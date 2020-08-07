const router = require("express").Router();
const User = require("../model/User");

router.route("/register").post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({ username,email,password });
  
    newUser
      .save()
      .then(() => res.json("User added"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;
