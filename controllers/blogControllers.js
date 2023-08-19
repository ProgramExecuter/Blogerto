const getAllBlogs = async (req, res) => {
  return res.status(200).json("Get all blogs");
};

const getSingleBlog = async (req, res) => {
  return res.status(200).json(`Get Blog - ${req.params.blogId}`);
};

const createNewBlog = async (req, res) => {
  return res.status(200).json("Create new blog");
};

const editBlog = async (req, res) => {
  return res.status(200).json(`Edit Blog - ${req.params.blogId}`);
};

const deleteBlog = async (req, res) => {
  return res.status(200).json(`Delete Blog - ${req.params.blogId}`);
};

export { getAllBlogs, getSingleBlog, createNewBlog, editBlog, deleteBlog };
