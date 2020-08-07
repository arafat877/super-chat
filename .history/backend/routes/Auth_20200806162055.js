const router = require("express").Router();
const User = require("../model/User");
const { registerValidation } = require("../validation");
const bcrypt = require("bcryptjs");

router.route("/register").post( async (req, res) => {
  //JOI VALIDATION
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //UNIQUE USERNAME AND EMAIL VALIDATION
  const nameExist = await User.findOne({ name: req.body.name });
  if (nameExist) return res.status(400).send("Name allready exists");

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email allready exists");

  //HASH THE PASSWORD
  const salt = bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  newUser
    .save()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
