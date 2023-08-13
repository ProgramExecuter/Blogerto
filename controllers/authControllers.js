const signupUser = async (req, res) => {
  res.status(200).json("Signup new user");
};

const loginUser = async (req, res) => {
  res.status(200).json("Login user");
};

export { signupUser, loginUser };
