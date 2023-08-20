// Import packages
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Import files-functions
import User from "../models/userModel.js";

const hashPassword = (data) => {
  const hashedData = bcrypt.hashSync(
    data,
    parseInt(process.env.BCRYPT_SALT_ROUNDS)
  );
  return hashedData;
};

const genJwtToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
  return token;
};

const matchPassword = (password, hashedPassword) => {
  const passMatched = bcrypt.compareSync(password, hashedPassword);
  return passMatched;
};

const checkId = (id) => {
  return mongoose.isValidObjectId(id);
};

const checkLoggedInUser = (req, res, next) => {
  // No token found
  if (!req.headers.authorization)
    return res.status(401).json({ success: false, message: "Unauthorized" });

  // Received JWT
  const receivedJWT = req.headers.authorization.split(" ")[1];

  // Verify the JWT
  jwt.verify(receivedJWT, process.env.JWT_SECRET_KEY, async (err, data) => {
    // Error encountered
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    } else {
      // Username from decoded JWT
      const loggedUser = data.username;

      // Find user in DB
      const foundUser = await User.findOne({ username: loggedUser });

      // Check if user is found, if yes, then is this token theirs?
      if (!foundUser || foundUser.jwt != receivedJWT) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      // Set a property for logged in user
      req.loggedInUser = loggedUser;

      next();
    }
  });
};

export { hashPassword, genJwtToken, matchPassword, checkId, checkLoggedInUser };
