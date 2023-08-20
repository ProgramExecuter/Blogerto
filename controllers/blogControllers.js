import Blog from "../models/blogModel.js";

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
  return res.status(200).json("Create new blog");
};

/*
  @ROUTE    - /api/blogs/:blogId - (PATCH)
  @FUNCTION - Edit single blog
*/
const editBlog = async (req, res) => {
  return res.status(200).json(`Edit Blog - ${req.params.blogId}`);
};

/*
  @ROUTE    - /api/blogs/:blogId - (DELETE)
  @FUNCTION - Delete single blog
*/
const deleteBlog = async (req, res) => {
  return res.status(200).json(`Delete Blog - ${req.params.blogId}`);
};

export { getAllBlogs, getSingleBlog, createNewBlog, editBlog, deleteBlog };
