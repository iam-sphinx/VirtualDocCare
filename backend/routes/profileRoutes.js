import express from "express";
import { getPatientProfile, getProfile, updatePatientProfile, updateProfile } from "../controllers/profileController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//GET USER PROFILE
router.get("/doc/:id", getProfile);
router.get("/patient/:id", getPatientProfile);

//UPDATE USER PROFILE
router.put("/doc/:id", verifyToken, updateProfile);
router.put("/patient/:id", verifyToken, updatePatientProfile);

export default router;
