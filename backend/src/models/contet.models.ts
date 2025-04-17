import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
    type: {
      type: String,
      required: true,
      enum: ["document", "tweet", "youTube", "link"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
     
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", contentSchema);

export default Content;
