const router = require("express").Router();

// route ,require(file path)
router.use("/auth", require("./userRoutes"));
router.use("/blog", require("./blogRoutes"));

module.exports = router;
