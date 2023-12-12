const router = require("express").Router();
const blogController = require("../controllers/blogController");
const upload = require("../middlewares/multer");
const { validate } = require("../middlewares/validate");
const { blogSchema } = require("../validation/blogValidation");

// Create a new blog post
router.post(
  "/create",
  validate(blogSchema),
  upload.single("image"),
  blogController.createBlog
);

// Get all blog posts
router.get("/", blogController.getAllBlogs);

// Get a blog post by ID
router.get("/:id", blogController.getBlogById);

// Update a blog post by ID
router.put(
  "/:id",
  validate(blogSchema),
  upload.single("image"),
  blogController.updateBlog
);

// Delete a blog post by ID
router.delete("/:id", blogController.deleteBlog);

module.exports = router;
