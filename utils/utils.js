// Import packages
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const hashPassword = (data) => {
  const hashedData = bcrypt.hashSync(
    process.env.BCRYPT_SECRET_KEY,
    parseInt(process.env.BCRYPT_SALT_ROUNDS)
  );
  return hashedData;
};

const genJwtToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
  return token;
};

export { hashPassword, genJwtToken };
