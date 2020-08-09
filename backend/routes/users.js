const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/User");

//GET USER BY ID
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
        const payloadUser = {...user._doc}
        const {password,updatedAt, ...others} = payloadUser;
        res.send(others)
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
