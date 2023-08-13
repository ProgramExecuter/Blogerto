import User from "../models/userModel.js";

const signupUser = async (req, res) => {
  const newUser = new User(req.body);

  await newUser.save();

  res.status(200).json({ message: "Signed up new User", newUser });
};

const loginUser = async (req, res) => {
  res.status(200).json("Login user");
};

export { signupUser, loginUser };
