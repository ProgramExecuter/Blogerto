// Import files-functions
import User from "../models/userModel.js";
import { genJwtToken, hashPassword } from "../utils/utils.js";

/*
  @ROUTE    - /api/auth/signup
  @FUNCTION - To signup user
*/
const signupUser = async (req, res) => {
  // Username or Password missing
  if (!req.body || !req.body.username || !req.body.password) {
    return res
      .status(401)
      .json({ success: false, message: "Username and Password required" });
  }

  // Hash Password
  req.body.password = hashPassword(req.body.password);

  // Generate a JWT token
  const token = genJwtToken({ username: req.body.username });

  // Save user to DB
  const newUser = new User(req.body);
  await newUser.save();

  return res
    .status(201)
    .json({ success: true, message: "New User Added", newUser, jwt: token });
};

const loginUser = async (req, res) => {
  res.status(200).json("Login user");
};

export { signupUser, loginUser };
