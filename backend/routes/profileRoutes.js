import express from "express";
import {  getProfile, updateProfile } from "../controllers/profileController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//GET USER PROFILE
router.get("/:id",getProfile);

//UPDATE USER PROFILE
router.put("/:id", verifyToken, updateProfile);


export default router;
