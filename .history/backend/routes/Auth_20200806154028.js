const router = require("express").Router();
const User = require("../model/User");

//VALIDATION
const Joi = require("@hapi/joi");

const schema = {
  name: Joi.string.min(3).required(),
  email: Joi.string.min(3).required().email(),
  password: Joi.string.min(6).required(),
};

router.route("/register").post((req, res) => {
    
  Joi.validate(req.body, schema);

  const newUser = new User({
    name: req.body.name,
    email: req.body.mail,
    password: req.body.password,
  });

  newUser
    .save()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
