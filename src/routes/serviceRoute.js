const router = require("express").Router();
const servicesController = require("../controllers/serviceController");
const { authenticate, authorizeAdmin } = require("../middlewares/authenticate");
const { upload } = require("../middlewares/multer");
const { validate } = require("../middlewares/validate");
const { serviceSchema } = require("../validation/serviceValidation");

router
  .route("/")
  .get(authenticate, servicesController.getServices)
  
 router.post('/create',
    authorizeAdmin,
    validate(serviceSchema),
    upload.single("image"),
    servicesController.createService
  );

router
  .route("/:id")
  .get(authenticate, servicesController.getOneService)
  .patch(authorizeAdmin, upload.single("image"), servicesController.updateService)
  .delete(authorizeAdmin, servicesController.deleteService);

module.exports = router;
