import express from "express";
import {
  createAppointment,
  deleteAppointment,
  getUserAppointments,
  updateAppointment,
} from "../controllers/appointmentController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//VIEW USER'S APPOINTMENT
router.get("/user/:id", getUserAppointments);

//CREATE A NEW APPOINTMENT
router.post("/", verifyToken, createAppointment);

//UPDATE AN APPOINTMENT
router.put("/:id", verifyToken, updateAppointment);

//CANCEL AN APPOINTMENT
router.delete("/:id", verifyToken, deleteAppointment);

export default router;
