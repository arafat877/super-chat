const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/add", verify, async (req, res) => {

  const name = req.body.members[0] + req.body.members[1];

  const newPrivateGroup = new Private({
    name,
    email: req.body.email,
  });

  await newPrivateGroup
    .save()
    .then((data) => res.send(data._id))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
