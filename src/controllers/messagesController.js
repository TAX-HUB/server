const Message = require("../models/messageModel");
const asyncHandler = require("express-async-handler");
module.exports = {
  getChatMessages: asyncHandler(async (req, res) => {
    const { user, admin, service } = req.params;
    const messages = await Message.find({
      $or: [
        { user, admin, service },
        { user: admin, admin: user, service },
      ],
    })
      .sort({ timestamp: 1 })
      .exec();
    res.status(200).json({ data: messages });
  }),

  postChatMessage: asyncHandler(async (req, res) => {
    const { admin, user, service } = req.params;

    const newMessage = new Message({
      message: req.body.message,
      user,
      admin,
      service,
    });
    await newMessage.save();

    res.status(201).json({ data: newMessage });
  }),
};
