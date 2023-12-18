const router = require("express").Router();
const papersController = require("../controllers/papersController");
const { authenticate } = require("../middlewares/authenticate");
const { upload } = require("../middlewares/multer");
const { validate } = require("../middlewares/validate");
const { paperValidationSchema } = require("../validation/paperValidation");
router
  .route("/")
  .post(authenticate,validate(paperValidationSchema), upload.single("image"), papersController.createPaper)
  .get(authenticate, papersController.getAllPapers)
  
router
  .route("/:id")
  .patch(authenticate, upload.single("image"), papersController.updatePaper)
  .delete(authenticate, papersController.deletePaper)
  .get(authenticate, papersController.getPaper);
module.exports = router;
