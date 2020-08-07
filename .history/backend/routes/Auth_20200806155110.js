const router = require("express").Router();
const User = require("../model/User");

//VALIDATION
const Joi = require("@hapi/joi");

const schema = {
  name: Joi.string().min(3).required(),
  email: Joi.string().min(3).required().email(),
  password: Joi.string().min(6).required(),
};

router.route("/register").post((req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newUser = new User({
    name: req.body.name,
    email: req.body.mail,
    password: req.body.password,
  });

  newUser
    .save()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
