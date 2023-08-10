import express from "express";
import {
  createPrescription,
  deletePrescription,
  getUserPrescriptions,
  updatePrescription,
} from "../controllers/prescriptionController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//VIEW USER'S PRESCRIPTION
router.get("/user/:userId", verifyToken, getUserPrescriptions);

//CREATE A NEW PRESCRIPTION
router.post("/", verifyToken, createPrescription);

//UPDATE A PRESCRIPTION
router.put("/:id", verifyToken, updatePrescription);

//DELETE A PRESCRIPTION
router.delete("/:id", verifyToken, deletePrescription);

export default router;
