import express from "express";
import auth from "../middlewares/auth.js";

import {
  postImage,
  postVideo,
  getAllPosts,
  likePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

router.post("/image", auth, postImage);
router.post("/video", auth, postVideo);
router.get("/get", getAllPosts);
router.delete("/delete/:id", auth, deletePost);
router.patch("/like/:id", auth, likePost);

export default router;
