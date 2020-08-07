const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const privateSchema = new Schema(
  {
    name: { type: String },
    members: { type: Array},
    lastMessage:{type:Object, required:false}
  },
  { timestamps: true }
);

const Private = mongoose.model("Private", privateSchema);

module.exports = Private;
