const router = require("express").Router();
const User = require("../model/User");

router.route("/register").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({ name,email,password });
  
    newUser
      .save()
      .then((res) => res.json(res))
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;
