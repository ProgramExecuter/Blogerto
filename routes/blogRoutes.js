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
import { checkLoggedInUser } from "../utils/utils.js";

const router = express.Router();

// Attach all routes
router.get("/", getAllBlogs);
router.post("/", checkLoggedInUser, createNewBlog);
router.get("/:blogId", getSingleBlog);
router.patch("/:blogId", checkLoggedInUser, editBlog);
router.delete("/:blogId", checkLoggedInUser, deleteBlog);

export default router;
