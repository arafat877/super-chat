const router = require("express").Router();
const User = require("../model/User");

//VALIDATION
const Joi = require("@hapi/joi");

router.route("/register").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const newUser = new User({ name, email, password });

  newUser
    .save()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
