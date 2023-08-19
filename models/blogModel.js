import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: [2, "Blog title should have minimum 2 characters"],
    maxLength: [100, "Blog title should be of maximum 100 characters"],
    required: [true, "Blog title is required"],
  },
  content: String,
  author: String,
});

export default mongoose.model("Blog", blogSchema);
