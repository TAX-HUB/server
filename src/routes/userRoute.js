const router = require('express').Router()
const usersController = require('../controllers/userController')
const { validate } = require('../middlewares/validate')
const { createNewUserSchema, updateUserSchema } = require('../validation/userValidation')
const { authenticate, authorizeAdmin } = require('../middlewares/authenticate')
const { upload } = require('../middlewares/multer')

router.route('/').all(authorizeAdmin)
  .get(usersController.getAllUsers)
  .post(validate(createNewUserSchema), usersController.createNewUser)
router.route('/:id')
  .patch(authenticate, upload.single('image'), validate(updateUserSchema), usersController.updateUser)
  .delete(authorizeAdmin, usersController.deleteUser)

module.exports = router
