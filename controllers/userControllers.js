// Import files-functions
import User from "../models/userModel.js";

/*
  @ROUTE    - /api/users - (GET)
  @FUNCTION - List all the users in DB
*/
const getAllUsersDetails = async (req, res) => {
  // Get list of all users
  const usersList = await User.find();

  return res.status(200).json({
    success: true,
    message: "Users list",
    users: usersList,
  });
};

/*
  @ROUTE    - /api/users/:username - (GET)
  @FUNCTION - Get single user details
*/
const getSingleUserDetails = async (req, res) => {
  // Get the user details from DB
  let foundUser = await User.findOne({ username: req.params.username });

  // User not found
  if (!foundUser)
    return res.status(404).json({ status: false, message: "User not found" });

  return res
    .status(200)
    .json({ success: true, message: "Found User", user: foundUser });
};

/*
  @ROUTE    - /api/users/:username - (PATCH)
  @FUNCTION - Update single user details
*/
const editUserDetails = async (req, res) => {
  // Check if logged in user is owner of data
  if (req.params.username != req.loggedInUser)
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });

  // Editable details
  const editedDetails = {};
  editedDetails.profilePicUrl = req.body.profilePicUrl;
  editedDetails.name = req.body.name;
  editedDetails.status = req.body.status;

  // Edit the user details in DB
  let editedUser = await User.findOneAndUpdate(
    { username: req.params.username },
    editedDetails,
    { returnDocument: "after" }
  );

  // User not found
  if (!editedUser)
    return res.status(404).json({ status: false, message: "User not found" });

  return res
    .status(200)
    .json({ success: true, message: "Edited user details", user: editedUser });
};

/*
  @ROUTE    - /api/users/:username - (DELETE)
  @FUNCTION - To delete a user
*/
const deleteUser = async (req, res) => {
  // Check if logged in user is owner of data
  if (req.params.username != req.loggedInUser)
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });

  // Find user and delete from DB
  const deletedUser = await User.findOneAndDelete({
    username: req.params.username,
  });

  // User not found
  if (!deletedUser)
    return res.status(404).json({ success: false, message: "User not found" });

  return res
    .status(200)
    .json({ success: true, message: "User deleted succesfully" });
};

export {
  getAllUsersDetails,
  getSingleUserDetails,
  editUserDetails,
  deleteUser,
};
