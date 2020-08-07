const router = require("express").Router();
const verify = require("./verifyToken");
const Message = require("../model/Message");


//GET GROUPS ALL MESSAGES
router.get("/group/:id", (req, res) => {
  Message.find({ groupId:req.params.id })
    .then((messages) => res.json(messages))
    .catch((err) => res.status(400).json("Error " + err));
});

//ADD A Message
router.post("/add", async (req, res) => {
  const newMessage = new Message({
    groupId: req.body.groupId,
    text: req.body.text,
    senderId: req.body.senderId,
  });

  await newMessage
    .save()
    .then((data) => res.send(data._id))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
