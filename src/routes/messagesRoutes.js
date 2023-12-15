const {
  getChatMessages,
  postChatMessage,
} = require("../controllers/messagesController");
const { authenticate } = require("../middlewares/authenticate");

const router = require("express").Router();
router.get("/:admin/:user", authenticate, getChatMessages);
router.post("/", authenticate, postChatMessage);
module.exports = router;
