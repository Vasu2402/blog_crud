const express = require("express");
const router = express.Router();
const {
  getBlogs,
  renderCreateForm,
  createBlog,
  renderEditForm,
  updateBlog,
  deleteBlog,
  likeBlog,
  getComments,
  addComment
} = require("../controllers/blog.controller");

// View all blogs
router.get("/", getBlogs); 

// Render create form
router.get("/create", renderCreateForm);

// Handle blog creation
router.post("/create", createBlog);

// Render edit form
router.get("/:id/edit", renderEditForm);

// Handle update
router.post("/update/:id", updateBlog);

// Handle deletion
router.get("/:id/delete", deleteBlog);

// Handle liking a blog
router.post("/:id/like", likeBlog);

// Render comments for a specific blog post
router.get("/:id/comments", getComments); 

// Add a comment to a specific blog post
router.post("/:id/comments", addComment);




module.exports = router;
