const Message = require("../models/messageModel");
const asyncHandler = require("express-async-handler");
module.exports = {
  getChatMessages: asyncHandler(async (req, res) => {
    const { user, admin } = req.params;
    const messages = await Message.find({
      $or: [
        { user, admin },
        { user: admin, admin: user },
      ],
    })
      .sort({ timestamp: 1 })
      .exec();
    res.status(200).json({ data: messages });
  }),
  postChatMessage: asyncHandler(async (req, res) => {
    const { text, admin } = req.body;
    const user=req.user._id
    const newMessage = new Message({ text, user, admin });
    res.status(201).json(newMessage);
  }),
};
