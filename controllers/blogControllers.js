import Blog from "../models/blogModel.js";

/*
  @ROUTE    - /api/blogs/ - (GET)
  @FUNCTION - Get all blogs
*/
const getAllBlogs = async (req, res) => {
  return res.status(200).json("Get all blogs");
};

/*
  @ROUTE    - /api/blogs/:blogId - (GET)
  @FUNCTION - Get single blog
*/
const getSingleBlog = async (req, res) => {
  return res.status(200).json(`Get Blog - ${req.params.blogId}`);
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
