// Import Packages
import express from "express";

// Import files-functions
import {
  getAllBlogs,
  createNewBlog,
  getSingleBlog,
  editBlog,
  deleteBlog,
} from "../controllers/blogControllers.js";

const router = express.Router();

// Attach all routes
router.get("/", getAllBlogs);
router.post("/", createNewBlog);
router.get("/:blogId", getSingleBlog);
router.patch("/:blogId", editBlog);
router.delete("/:blogId", deleteBlog);

export default router;
