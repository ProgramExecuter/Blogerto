// Import packages
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

export { hashPassword, genJwtToken, matchPassword };
