// Import packages
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const hashPassword = (data) => {
  const hashedData = bcrypt.hashSync(
    data,
    parseInt(process.env.BCRYPT_SALT_ROUNDS)
  );
  return hashedData;
};

const genJwtToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
  return token;
};

const matchPassword = (password, hashedPassword) => {
  const passMatched = bcrypt.compareSync(password, hashedPassword);
  return passMatched;
};

const checkId = (id) => {
  return mongoose.isValidObjectId(id);
};

export { hashPassword, genJwtToken, matchPassword, checkId };
