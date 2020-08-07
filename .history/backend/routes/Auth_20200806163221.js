const router = require("express").Router();
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");

const areNameOrEmailExist = async (name, email) => {
  const nameExists = await User.findOne({ name });
  const emailExists = await User.findOne({ email });

  if (nameExists || emailExists) {
    return true;
  } else return false;
};

router.route("/register").post(async (req, res) => {
  //JOI VALIDATION
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //UNIQUE USERNAME AND EMAIL VALIDATION

  if (areNameOrEmailExist(req.body.name, req.body.email))
    return res.status(400).send("Name or email allready exists");

  //HASH THE PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  await newUser
    .save()
    .then((data) => res.send(data._id))
    .catch((err) => res.status(400).send(err));
});

router.post("/login", (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
});

module.exports = router;
