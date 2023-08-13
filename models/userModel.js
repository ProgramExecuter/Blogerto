import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: [2, "Username should have minimum 2 characters"],
    maxLength: [25, "Username should be of maximum 25 characters"],
    required: [true, "Username is required"],
    unique: [true, "Username already taken"],
  },
  password: {
    type: String,
    minLength: [8, "Password should have minimum 8 characters"],
    maxLength: [40, "Password should be of maximum 40 characters"],
    required: [true, "Password is required"],
  },
});

export default mongoose.model("User", userSchema);
