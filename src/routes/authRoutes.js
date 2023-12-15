const { registrationCtrl, loginCtrl } = require("../controllers/authController")
const { validate } = require("../middlewares/validate")
const { registrationSchema, loginUserSchema } = require("../validation/authValidation")
const router = require("express").Router()
router.post('/register', validate(registrationSchema), registrationCtrl)
router.post('/login', validate(loginUserSchema), loginCtrl) 
module.exports = router