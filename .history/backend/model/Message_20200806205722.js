const mongoose = require("mongoose");
const { boolean } = require("@hapi/joi");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    groupId:{type:String, required:true},
    senderId:{type:String, required:true},
    text: { type: String, required:true},
    deleted: {type:boolean, default:"false"}
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
