const router = require("express").Router();

// route ,require(file path)
router.use("/auth", require("./authRoutes"));
router.use("/blog", require("./blogRoutes"));
router.use("/contact", require("./contactRoutes"));
router.use("/user", require("./userRoute"));

module.exports = router;
