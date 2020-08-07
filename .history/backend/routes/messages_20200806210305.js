const router = require("express").Router();
const verify = require("./verifyToken");
const Message = require("../model/Message");

//GET GROUPS ALL MESSAGES
router.get("/group/:id", (req, res) => {
  Message.find({ groupId: req.params.id })
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

//DELETE A MESSAGE
router.post("/delete/:id", (req, res) => {
  Message.updateOne(
    { _id: req.params.id },
    { $set: { text: "This message has been deleted.", isDeleted: true } }
  )
    .then((data) => res.json(data._id))
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
