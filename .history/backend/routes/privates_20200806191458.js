const router = require("express").Router();
const verify = require("./verifyToken");
const Private = require("../model/Private");

router.get("/:id", (req, res) => {
  Private.findById(req.params.id)
    .then((res) => res.json(res.data))
    .catch((err) => res.status(400).json("Error " + err));
});

router.post("/add", async (req, res) => {
  const name = req.body.members[0]

  const newPrivateGroup = new Private(
    {
      name,
      members: req.body.members,
    },
    { timestamps: true }
  );

  await newPrivateGroup
    .save()
    .then((data) => res.send(data._id))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
