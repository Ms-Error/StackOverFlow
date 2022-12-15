import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  postedBy: { type: String, required: true },
  imageURL: { type: String },
  videoURL: { type: String },
  message: { type: String },
  likes: { type: [String], default: [] },
  userId: { type: String },
  postedOn: { type: Date, default: Date.now },
});

export default mongoose.model("Postt", postSchema);
