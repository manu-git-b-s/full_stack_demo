import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String },
  name: { type: String },
  passwordHash: { type: String },
});

export default mongoose.model("User", userSchema);
