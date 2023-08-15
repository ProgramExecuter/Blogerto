// Import files-functions
import User from "../models/userModel.js";
import { genJwtToken, hashPassword, matchPassword } from "../utils/utils.js";

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

  // Generate a JWT token and attach it to User
  const token = genJwtToken({ username: req.body.username });
  req.body.jwt = token;

  // Save user to DB
  const newUser = new User(req.body);
  await newUser.save();

  return res
    .status(201)
    .json({ success: true, message: "New User Added", newUser, jwt: token });
};

/*
  @ROUTE    - /api/auth/login
  @FUNCTION - To login user
*/
const loginUser = async (req, res) => {
  // Username or Password missing
  if (!req.body || !req.body.username || !req.body.password)
    res.status(401).json({
      success: false,
      message: "Username or Password Incorrect",
    });

  // Find the user in DB
  let foundUser = await User.find({ username: req.body.username });

  // User not found
  if (!foundUser || foundUser.length == 0)
    res.status(401).json({
      success: false,
      message: "Username or Password Incorrect",
    });

  foundUser = foundUser[0];

  // Check if password matches
  const passMatch = matchPassword(req.body.password, foundUser.password);

  // Password not matching
  if (!passMatch)
    res.status(401).json({
      success: false,
      message: "Username or Password Incorrect",
    });

  // Generate a JWT token and update it in DB
  const token = genJwtToken({ username: req.body.username });
  foundUser.jwt = token;
  await foundUser.save();

  return res
    .status(200)
    .json({ success: true, message: "Login success", jwt: token });
};

export { signupUser, loginUser };
