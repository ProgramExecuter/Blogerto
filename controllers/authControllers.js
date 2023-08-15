// Import files-functions
import User from "../models/userModel.js";
import { hashPassword } from "../utils/utils.js";

const signupUser = async (req, res) => {
  // Username or Password missing
  if (!req.body || !req.body.username || !req.body.password) {
    return res
      .status(401)
      .json({ success: false, message: "Username and Password required" });
  }

  // Hash Password
  req.body.password = hashPassword(req.body.password);

  // Save user to DB
  const newUser = new User(req.body);
  await newUser.save();

  return res
    .status(201)
    .json({ success: true, message: "Signed up new User", newUser });
};

const loginUser = async (req, res) => {
  res.status(200).json("Login user");
};

export { signupUser, loginUser };
