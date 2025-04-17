import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  hashedURL: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Link = mongoose.model("Link", linkSchema);
export default Link;
