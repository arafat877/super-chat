const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/User");

//GET USER BY ID
router.get("/users/:id", (req, res) => {
    User.findById(req.params.id)
      .then((users) => res.json(user))
      .catch((err) => res.status(400).json("Error " + err));
  });