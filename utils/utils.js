// Import packages
import bcrypt from "bcryptjs";

const hashPassword = (data) => {
  const hashedData = bcrypt.hashSync(process.env.BCRYPT_SECRET_KEY, 10);
  return hashedData;
};

export { hashPassword };
