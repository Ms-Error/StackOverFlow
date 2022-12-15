import mongoose from "mongoose";
import posts from "../models/post.js";

export const postImage = async (req, res) => {
  const postImageData = req.body;
    const userId = req?.body?.userId
  const uploadImage = new posts({ ...postImageData, userId });
  try {
    await uploadImage.save();
    res.status(200).json("Post uploaded successfully");
  } catch (error) {
    console.log(error.message);
    res.status(409).json("Couldn't upload a post");
  }
};

export const postVideo = async (req, res) => {
  const postVideoData = req.body;
 const userId = req?.body?.userId
  const uploadVideo = new posts({ ...postVideoData, userId });
  try {
    await uploadVideo.save();
    res.status(200).json("Post uploaded successfully");
  } catch (error) {
    console.log(error.message);
    res.status(409).json("Couldn't upload a post");
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const postsList = await posts.find();
    res.status(200).json(postsList);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;
  const userId = req.userId;

  try {
    const post = await posts.findById(_id);
    const likeIndex = post.likes.findIndex((id) => id === String(userId));

    if (likeIndex === -1) {
      post.likes.push(userId);
    } else if (likeIndex !== -1) {
      post.likes = post.likes.filter((id) => id !== String(userId));
    }
    await posts.findByIdAndUpdate(_id, post);
    res.status(200).json({ message: "liked the post successfully" });
  } catch (error) {
    res.status(404).json({ message: "id not found" });
  }
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  try {
    await posts.findByIdAndRemove(_id);
    res.status(200).json({ message: "successfully deleted..." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
