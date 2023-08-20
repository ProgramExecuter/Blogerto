// Import files-functions
import Blog from "../models/blogModel.js";
import { checkId } from "../utils/utils.js";

/*
  @ROUTE    - /api/blogs/ - (GET)
  @FUNCTION - Get all blogs
*/
const getAllBlogs = async (req, res) => {
  // Get list of all blogs from DB
  const blogsList = await Blog.find();

  return res.status(200).json({
    success: true,
    message: "List of all blogs",
    blogs: blogsList,
  });
};

/*
  @ROUTE    - /api/blogs/:blogId - (GET)
  @FUNCTION - Get single blog
*/
const getSingleBlog = async (req, res) => {
  // Check if blogId is valid ObjectId
  if (!checkId(req.params.blogId))
    return res.status(404).json({ success: false, message: "Blog not found" });

  // Get the desired blog from DB
  const foundBlog = await Blog.findById(req.params.blogId);

  // Blog not found
  if (!foundBlog)
    return res.status(404).json({ success: false, message: "Blog not found" });

  return res.status(200).json({
    success: true,
    message: "Found Blog",
    blog: foundBlog,
  });
};

/*
  @ROUTE    - /api/blogs/ - (POST)
  @FUNCTION - Add a new blog
*/
const createNewBlog = async (req, res) => {
  // Title is required
  if (!req.body.title)
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });

  // Logged in user is the author
  req.body.author = req.loggedInUser;

  // Create and save new blog in DB
  const newBlog = new Blog(req.body);
  await newBlog.save();

  return res.status(201).json({
    success: true,
    message: "New Blog Created",
    blog: newBlog,
  });
};

/*
  @ROUTE    - /api/blogs/:blogId - (PATCH)
  @FUNCTION - Edit single blog
*/
const editBlog = async (req, res) => {
  // Check if blogId is valid ObjectId
  if (!checkId(req.params.blogId))
    return res.status(404).json({ success: false, message: "Blog not found" });

  // Find the blog from DB
  const foundBlog = await Blog.findById(req.params.blogId);

  // Blog not found
  if (!foundBlog)
    return res.status(404).json({ success: false, message: "Blog not found" });

  // Logged In user should be author of blog
  if (req.loggedInUser != foundBlog.author)
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });

  // Filter to-be edited details
  const editedDetails = {};
  editedDetails.title = req.body.title;
  editedDetails.content = req.body.content;

  // Update the blog in DB
  const updatedBlog = await Blog.findByIdAndUpdate(
    req.params.blogId,
    editedDetails,
    { returnDocument: "after" }
  );

  return res.status(200).json({
    success: true,
    message: "Blog updated",
    blog: updatedBlog,
  });
};

/*
  @ROUTE    - /api/blogs/:blogId - (DELETE)
  @FUNCTION - Delete single blog
*/
const deleteBlog = async (req, res) => {
  // Check if blogId is valid ObjectId
  if (!checkId(req.params.blogId))
    return res.status(404).json({ success: false, message: "Blog not found" });

  // Find the blog from DB
  const foundBlog = await Blog.findById(req.params.blogId);

  // Blog not found
  if (!foundBlog)
    return res.status(404).json({ success: false, message: "Blog not found" });

  // Logged In user should be author of blog
  if (req.loggedInUser != foundBlog.author)
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });

  // Delete blog from DB
  await Blog.findByIdAndDelete(req.params.blogId);

  return res.status(200).json({ success: true, message: "Blog Deleted" });
};

export { getAllBlogs, getSingleBlog, createNewBlog, editBlog, deleteBlog };
