const router = require("express").Router();
const servicesController = require("../controllers/serviceController");
const { authenticate, authorizeAdmin } = require("../middlewares/authenticate");
const { upload } = require("../middlewares/multer");
const { validate } = require("../middlewares/validate");
const { serviceSchema } = require("../validation/serviceValidation");

router
  .route("/")
  .get(authenticate, servicesController.getServices)
  .post(
    authorizeAdmin,
    validate(serviceSchema),
    upload.single("img"),
    servicesController.createService
  );

router
  .route("/:id")
  .get(authenticate, servicesController.getOneService)
  .patch(authorizeAdmin, upload.single("img"), servicesController.updateService)
  .delete(authorizeAdmin, servicesController.deleteService);

module.exports = router;
