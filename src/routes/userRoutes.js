const { registrationCtrl } = require("../controllers/authController")
const { validate } = require("../middlewares/validate")
const { registrationSchema } = require("../validation/authValidation")
const router = require("express").Router()
//route ,middleware(validationSchema), controller 
router.post('/register', validate(registrationSchema), registrationCtrl)
module.exports = router