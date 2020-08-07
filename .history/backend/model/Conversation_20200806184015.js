const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const conversationSchema = new Schema(
  {
    name: { type: String },
    adminUserId: { type: Number, required:false },
    members: { type: Array},
    lastMessage:{type:Object, required:false}
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
