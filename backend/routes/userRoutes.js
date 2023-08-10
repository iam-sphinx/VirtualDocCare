import express from "express";
import {
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//UPDATE USER
router.put("/:id", verifyToken, updateUser);

//DELETE USER
router.delete("/:id", verifyToken, deleteUser);

//GET A USER
router.get("/:id", getUser);

export default router;
