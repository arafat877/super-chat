const router = require("express").Router();
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");

router.route("/register").post(async (req, res) => {
  //JOI VALIDATION
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //UNIQUE USERNAME AND EMAIL VALIDATION
  const nameExist = await User.findOne({ name: req.body.name });
  if (nameExist) return res.status(400).send("Name allready exists");

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email allready exists");

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

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exist!");
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  res.send("oki")
});

module.exports = router;
