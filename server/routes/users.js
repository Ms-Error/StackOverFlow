import express from 'express';
import {login,signup} from '../controllers/auth.js'
import auth from "../middlewares/auth.js";
import { getAllUsers, updateProfile ,follow,unfollow} from "../controllers/users.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);

router.put("/:id/follow", auth, follow);
router.put("/:id/unfollow", auth, unfollow);
export default router;