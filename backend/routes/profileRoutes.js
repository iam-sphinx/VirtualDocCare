import express from "express";
import { getProfile, updateProfile } from "../controllers/profileController.js";

const router = express.Router();

//GET USER PROFILE
router.get("/:id", getProfile);

//UPDATE USER PROFILE
router.put("/:id", updateProfile);

export default router;
