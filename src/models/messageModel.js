const { Schema,model } = require("mongoose");
const messageSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    admin: { type: Schema.Types.ObjectId, ref: "User" },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);
const Message = model("Message", messageSchema);
module.exports = Message;
