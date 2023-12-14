const router = require("express").Router();
const blogController = require("../controllers/blogController");
const { authenticate, authorizeAdmin } = require("../middlewares/authenticate");
const { upload } = require("../middlewares/multer");
const { validate } = require("../middlewares/validate");
const { blogSchema } = require("../validation/blogValidation");

// Create a new blog post
router.post(
  "/create",
  authorizeAdmin,
  validate(blogSchema),
  upload.single("image"),
  blogController.createBlog
);

// Get all blog posts
router.get("/", authenticate, blogController.getAllBlogs);

// Get a blog post by ID
router.get("/:id", authenticate, blogController.getBlogById);

// Update a blog post by ID
router.put(
  "/:id",
  authorizeAdmin,
  validate(blogSchema),
  upload.single("image"),
  blogController.updateBlog
);

// Delete a blog post by ID
router.delete("/:id", authorizeAdmin, blogController.deleteBlog);

module.exports = router;
