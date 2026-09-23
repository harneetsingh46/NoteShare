import express from "express";
import { register, login, getUser, SignOut } from "../controllers/userController.js";
import { protect } from "../utils/protect.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/get-user",protect,getUser)
router.post("/signout", SignOut);

export default router;