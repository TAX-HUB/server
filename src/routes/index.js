const router = require("express").Router()

// route ,require(file path)
router.use('/auth', require('./userRoutes'))

module.exports = router