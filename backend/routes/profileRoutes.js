import express from "express";
import { getProfile, updateProfile } from "../controllers/profileController.js";

const router = express.Router();

//GET USER PROFILE
router.get("/:userId", getProfile);

//UPDATE USER PROFILE
router.put("/:userId", updateProfile);

export default router;
