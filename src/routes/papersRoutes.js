const router = require("express").Router();
const papersController = require("../controllers/papersController");
const { authenticate } = require("../middlewares/authenticate");
const { upload } = require("../middlewares/multer");
router
  .route("/")
  .post(authenticate, upload.single("image"), papersController.createPaper)
  .get(authenticate, papersController.getAllPapers);
router
  .route("/:id")
  .patch(authenticate, upload.single("image"), papersController.updatePaper)
  .delete(authenticate, papersController.deletePaper);
module.exports = router;
