const getAllUsersDetails = async (req, res) => {
  res.status(200).json("All User Details");
};

const getSingleUserDetials = async (req, res) => {
  console.log("/api/user/username", req.params);

  res.status(200).json(`Single User Details - ${req.params.username}`);
};

const editUserDetials = async (req, res) => {
  console.log("PATCH /api/user/username", req.params, req.body);

  res.status(200).json(`Edit User Details - ${req.params.username}`);
};

const deleteUser = async (req, res) => {
  console.log("DELETE /api/user/username", req.params, req.body);

  res.status(200).json(`Delete User - ${req.params.username}`);
};

export {
  getAllUsersDetails,
  getSingleUserDetials,
  editUserDetials,
  deleteUser,
};
