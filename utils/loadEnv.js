import dotenv from "dotenv";

const loadEnv = () => {
  dotenv.config({ path: process.cwd() + "/.env" });
};

export default loadEnv;
