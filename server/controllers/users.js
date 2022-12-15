import mongoose from "mongoose";
import User from "../models/auth.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    const allUserDeatails = [];
    allUsers.forEach((users) => {
      allUserDeatails.push({
        _id: users._id,
        name: users.name,
        about: users.about,
        tags: users.tags,
        join: users.join,
        followings:users.followings,
        followers:users.followers,
      });
    });
    res.status(200).json(allUserDeatails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const { id: _id } = req.params;
  const { name, about, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  try {
    const updatedProfile = await User.findByIdAndUpdate(
      _id,
      { $set: { name: name, about: about, tags: tags } },
      { new: true }
    );
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};

export const follow = async (req, res) => {

  if (req.body.id !== req.params.id) {
    
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.id);
    
      if (!user.followers.includes(req.body.id)) {
        await user.updateOne({ $push: { followers: req.body.id } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        alert("You already follow this user");
        res.status(402).json("you already follow this user");
      }
    } catch (err) {
      res.status(505).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
};

export const unfollow = async (req, res) => {

  if (req.body.id !== req.params.id) {
  
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.id.Luserid);
      console.log(user);
      console.log(currentUser);
     
      if (!user.followers.includes(req.body.id.LuserId)) {
        await user.updateOne({ $pull: { followers: req.body.id.Luserid } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you don't follow this user");
      }
    } catch (err) {
      res.status(505).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
};