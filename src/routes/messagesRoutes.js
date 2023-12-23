const {
  getChatMessages,
  postChatMessage,
} = require("../controllers/messagesController");
const { authenticate } = require("../middlewares/authenticate");

const router = require("express").Router();
router.route("/:user/:admin/:service").all(authenticate).get(getChatMessages).post(postChatMessage)
module.exports = router;
